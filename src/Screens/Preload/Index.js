import React, {useEffect} from 'react';
import {Container, NameLogo, LoadingIcon} from './Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import BarberLogo from '../../assets/Logo.svg';

export default () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        //validar o token
      } else {
        navigation.navigate('SignIn');
      }
    };
    checkToken();
  }, []);

  return (
    <Container>
      <BarberLogo width="100%" />
      <NameLogo width="100%">BarBerFinder</NameLogo>
      <LoadingIcon size="large" color="#FFFFFF" />
    </Container>
  );
};