import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import CustomTabBar from "../components/CustomTabBar";

import Home from "../Screens/Home";
import Search from "../Screens/Search";
import Appointments from "../Screens/Appointments";
import Favoritos from "../Screens/Favoritos";
import Profile from "../Screens/Profile";

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props}/>}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Search" component={Search}/>
        <Tab.Screen name="Appointments" component={Appointments}/>
        <Tab.Screen name="Favoritos" component={Favoritos}/>
        <Tab.Screen name="Profile" component={Profile}/>
    </Tab.Navigator>
)