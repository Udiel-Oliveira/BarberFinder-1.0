import React, {useEffect,useContext} from 'react';
import { UserContext } from '../../contexts/UserContext';
import {Container, NameLogo, LoadingIcon} from './Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import BarberLogo from '../../assets/Logo.svg';
import Api from '../../Api';

export default () => {
  const navigation = useNavigation();
  const { dispatch: userDispatch} = useContext(UserContext);

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        let res = await Api.checkToken(token);
        if(res.token){
          await AsyncStorage.setItem('token', res.token);
          userDispatch({
            type: 'setAvatar',
            payload:{
              avatar: res.data.avatar
            }
          });
        navigation.reset({
          routes:[{name:"MainTab"}]
        });
        }else{
          navigation.navigate('SignIn');
        }
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