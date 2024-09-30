import React, { useState, useContext } from 'react';
import styled from 'styled-components/native';
import { UserContext } from '../contexts/UserContext';

import HomeIcon from '../assets/HomeIcon.svg';
import SearchIcon from '../assets/SearchIcon.svg';
import CalendarIcon from '../assets/CalendarIcon.svg';
import FavoritoIcon from '../assets/FavoritoIcon.svg';
import PerfilIcon from '../assets/PerfilIcon.svg';

const TabArea = styled.View`
    flex-direction: row;
    justify-content: space-around;
    background-color: #fff;
    padding: 10px;
    border-top-width: 2px;
    border-top-color: #EAEAE9;
`;

const TabItem = styled.TouchableOpacity`
    border-radius: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-width: 2px;
    border-color: ${({ isActive }) => (isActive ? '#01969F' : '#ffffff')};
    padding: 5px;
    background-color: ${({ isActive }) => (isActive ? '#01969F' : '#ffffff')};
`;

const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #176B70;
    border-radius: 35px;
    border: 5px solid #ffffff;
    margin-top: -30px;
`;

const AvatarIcon = styled.Image`
    width: 25px;
    height: 25px;
    border-radius: 12px;
`;

const Icon = styled.View`
    fill: ${({ isActive }) => (isActive ? '#000000' : '#ffffff')};
    opacity: ${({ isActive }) => (isActive ? 1 : 1)};
`;

export default ({ state, navigation }) => {
    const { state: user } = useContext(UserContext);
    const [activeTab, setActiveTab] = useState('Home');

    const goTo = (screenName) => {
        setActiveTab(screenName);
        navigation.navigate(screenName);
    };

    return (
        <TabArea>
            <TabItem isActive={activeTab === 'Home'} onPress={() => goTo('Home')}>
                <Icon isActive={activeTab === 'Home'}>
                    <HomeIcon width="25" height="25" />
                </Icon>
            </TabItem>
            <TabItem isActive={activeTab === 'Search'} onPress={() => goTo('Search')}>
                <Icon isActive={activeTab === 'Search'}>
                    <SearchIcon width="25" height="25" />
                </Icon>
            </TabItem>
            <TabItemCenter onPress={() => goTo('Appointments')}> 
                <CalendarIcon width="25" height="25" />
            </TabItemCenter>
            <TabItem isActive={activeTab === 'Favoritos'} onPress={() => goTo('Favoritos')}>
                <Icon isActive={activeTab === 'Favoritos'}>
                    <FavoritoIcon width="25" height="25" fill="#ffffff"/>
                </Icon>
            </TabItem>
            <TabItem isActive={activeTab === 'Profile'} onPress={() => goTo('Profile')}>
                {user.avatar !== '' ? (
                    <AvatarIcon source={{ uri: user.avatar }} />
                ) : (
                    <Icon isActive={activeTab === 'Profile'}>
                        <PerfilIcon width="25" height="25" fill="currentColor" />
                    </Icon>
                )}
            </TabItem>
        </TabArea>
    );
};
