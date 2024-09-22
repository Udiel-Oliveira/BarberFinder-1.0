import React from "react";
import styled from 'styled-components/native';
import Arrow from '../assets/Flecha.svg';
import Stars from '../components/Stars'

const Area = styled.TouchableOpacity`
    background-color: transparent;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 20px;
    flex-direction: row;
    border-bottom-width: 2px;
    border-bottom-color: #CCCCCC;
    
`;

const Avatar = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 20px;
`;

const InfoArea = styled.View`
    margin-left: 20px;
    flex: 1;
    justify-content: space-between;
`;

const UserName = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: #000000;
`;

const SeeProfileButton = styled.View`
    justify-content: center;
    align-items: center;
`;

const SeeProfileContent = styled.View`
    justify-content: center;
    border-radius: 10px;
    background-color: #000000;
    align-items: center;
    height: 50px;
    width: 50px;
`;

export default ({data}) => {
    return(
        <Area>
            <Avatar source={{uri: data.avatar}}/>
            <InfoArea>
                <UserName>{data.name}</UserName>

                <Stars stars={data.stars} showNumber={true} />
            </InfoArea>
            <SeeProfileButton>
                <SeeProfileContent>
                    <Arrow width="24" height="24" />
                </SeeProfileContent>
            </SeeProfileButton>
        </Area>
    )
}