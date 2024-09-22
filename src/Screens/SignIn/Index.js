import React, { useState, useContext } from 'react';
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
} from './Styles';  // Verifique se todos esses estão sendo usados
import Api from '../../Api';
import { useNavigation } from '@react-navigation/native';
import SignInput from '../../components/SignInput';
import BarberLogo from '../../assets/Logo-black.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import { UserContext } from '../../contexts/UserContext';  // Adicionando {} para consistência
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default () => {

  const { dispatch: userDispatch} = useContext(UserContext);
  const navigation = useNavigation();

  const [emailFild, setEmailFild] = useState('');
  const [senhaFild, setSenhaFild] = useState('');
  const clickCadastrese = () => {
    navigation.reset({
      routes: [{name: 'SignUp'}],
    });
  };
  const clickLogin = async () => {
    if (emailFild != '' && senhaFild != '') {
      let json = await Api.signIn(emailFild, senhaFild);
      if (json.token) {
        await AsyncStorage.setItem('token', json.token);
        userDispatch({
          type: 'setAvatar',
          payload:{
            avatar: json.data.avatar
          }
        });

        navigation.reset({
          routes:[{name:"MainTab"}]
        });

      } else {
        Alert.alert('Email e/ou senha incorretos!');
      }
    } else {
      Alert.alert('preencha os campos');
    }
  };

  return (
    <Container>
      <LogoContainer>
        <BarberLogo width="10%" color="#000000" />
        <NameLogo font-size="15px">BarBerFinder</NameLogo>
      </LogoContainer>

      <InputArea>
        <Saudacao>Bem Vindo</Saudacao>
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
          <CustomButtonText>Login</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={clickCadastrese}>
        <SignMessageButtonText>Não tem uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};