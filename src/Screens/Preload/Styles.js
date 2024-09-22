import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #176b70;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const NameLogo = styled.Text`
  color: #ffffff;
  font-size: 35px;
  margin-top: 20px;
  font-weight: 900;
  text-align: center;
`;
export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 20px;
`;