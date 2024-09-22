import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
  width: 100%;
  height: 60px;
  border-bottom-width: 2px;
  border-bottom-color: #919191;
  background-color: transparent;
  flex-direction: row;
  padding-left: 15px;
  align-items: center;
  margin-bottom: 15px;
`;

const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #919191;
  margin-left: 10px;
`;

export default ({IconSvg, placeholder, value, onChangeText, senha}) => {
  return (
    <InputArea>
      <IconSvg width="20" height="20" fill="#919191" />
      <Input
        placeholder={placeholder}
        placeholderTextColor={'#919191'}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={senha}
      />
    </InputArea>
  );
};
