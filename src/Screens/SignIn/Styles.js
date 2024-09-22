import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #ffffff;
  flex: 1;
  align-items: center;
`;

export const NameLogo = styled.Text`
  color: #000000;
  font-size: 15px;
  font-weight: 900;
  text-align: center;
`;
export const Saudacao = styled.Text`
  color: #000000;
  font-weight: 900;
  font-size: 35px;
  margin-bottom: 20px;
`;
export const NameLogin = styled.Text`
  color: #000000;
  font-size: 20px;
  font-weight: 900;
`;
export const InputArea = styled.View`
  padding: 40px;
  width: 100%;
  flex: 1;
`;
export const LogoContainer = styled.View`
  width: 100%;
  height: 20%;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-direction: row;
`;
export const CustomButton = styled.TouchableOpacity`
  height: 50px;
  background-color: #176b70;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;
export const CustomButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
`;
export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: end;
  margin-top: 50px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: flex-end;
`;
export const SignMessageButtonText = styled.Text`
  color: #176b70;
  font-size: 12px;
`;
export const SignMessageButtonTextBold = styled.Text`
  color: #176b70;
  font-size: 12px;
  font-weight: 900;
  margin-left: 5px;
`;