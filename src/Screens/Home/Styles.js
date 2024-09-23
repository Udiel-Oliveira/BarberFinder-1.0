import React from "react";
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #FFFFFF;
    height: 100%;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
`;

export const TopContent = styled.View`
    background-color: #176B70;
    padding: 15px;
    padding-bottom: 10px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;

export const HeaderAerea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderTitle = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
    width: 70%;
`;

export const SearchButton = styled.TouchableOpacity`
    border: 1px solid #ffffff;
    padding: 13px;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    fill: #ffffff;
`;

export const LocationArea = styled.View`
    border-bottom-width: 2px;
    border-bottom-color: #FFFFFF;
    height: 60px;
    flex-direction: row;
    align-items: center;
    margin-top: 30px;
`;

export const LocationInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: white;
`;

export const LocationFinder = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
`;
export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`
export const ListArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const ImagemContent = styled.View`
    margin-top: 15px;
    border-radius: 10px;
    width: 100%;
`;
