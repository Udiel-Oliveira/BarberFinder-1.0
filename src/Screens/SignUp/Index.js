import React, { useState, useContext, useEffect } from 'react';
import {
  Container,
  NameLogo,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
  LogoContainer,
  Saudacao,
  NameLogin,
} from './Styles';
import { UserContext } from '../../contexts/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from '../../Api';
import {useNavigation} from '@react-navigation/native';
import SignInput from '../../components/SignInput';
import BarberLogo from '../../assets/Logo-black.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import NomeIcon from '../../assets/nome.svg';
import {Alert, PermissionsAndroid, Platform} from 'react-native';
import { Notification } from '../../components/NotificationService';
const notificador = Notification;

export default () => {
  const { dispatch: userDispatch} = useContext(UserContext);

  const navigation = useNavigation();
  const [nameFild, setNameFild] = useState('');
  const [emailFild, setEmailFild] = useState('');
  const [senhaFild, setSenhaFild] = useState('');

  const clickCadastrese = () => {
    navigation.reset({
      routes: [{name: 'SignIn'}],
    });
  };
  const clickLogin = async () => {
    if (nameFild != '' && emailFild != '' && senhaFild != '') {
      let res = await Api.signUp(nameFild, emailFild, senhaFild);
      if (res.token) {
        await AsyncStorage.setItem('token', res.token);
        userDispatch({
          type: 'setAvatar',
          payload:{
            avatar: res.data.avatar
          }
        });

        notificador.mostrarNotificacao(
          1,
          "Cadastro Realizado",
          "Parabéns! Seu cadastro foi realizado com sucesso!",
          {}, 
          {}
        );

        navigation.reset({
          routes:[{name:"MainTab"}]
        });
      } else {
        Alert.alert('Erro: ' + res.error);
      }
    } else {
      Alert.alert('Preencha os campos');
    }
  };

  // Permissao do usuario
  async function requestNotificationPermission() {
    if (Platform.OS === 'android' && Platform.Version >= 33) {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  }

  //Notificação
  useEffect(() => {
    async function init() {
      const permissionGranted = await requestNotificationPermission();
      if (permissionGranted) {
        notificador.configurar();
        notificador.criarCanal();
      } else {
        Alert.alert("Permissão de notificações não concedida.");
      }
    }
    init();
  }, []);

  onPressCancelarNotificacoes = () =>{
    notificador.cancelarTodasNotificacoes()
  }


  return (
    <Container>
      <LogoContainer>
        <BarberLogo width="10%" color="#000000" />
        <NameLogo font-size="15px">BarBerFinder</NameLogo>
      </LogoContainer>

      <InputArea>
        <Saudacao>Bem Vindo</Saudacao>
        <NameLogin>Nome</NameLogin>
        <SignInput
          IconSvg={NomeIcon}
          placeholder="Digite seu Nome"
          value={nameFild}
          onChangeText={t => setNameFild(t)}
        />
        <NameLogin>Email</NameLogin>
        <SignInput
          IconSvg={EmailIcon}
          placeholder="Digite seu Email"
          value={emailFild}
          onChangeText={t => setEmailFild(t)}
        />
        <NameLogin>Senha</NameLogin>
        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua Senha"
          value={senhaFild}
          onChangeText={t => setSenhaFild(t)}
          senha={true}
        />
        <CustomButton onPress={clickLogin}>
          <CustomButtonText>Cadastrar</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={clickCadastrese}>
        <SignMessageButtonText>Já tem uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};