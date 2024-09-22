import React, {useState} from 'react';
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
} from './styles';
import Api from '../../Api';
import {useNavigation} from '@react-navigation/native';
import SignInput from '../../components/SignInput';

import BarberLogo from '../../assets/Logo-black.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import {Alert} from 'react-native';

export default () => {
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
        Alert.alert('Deu certo!');
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