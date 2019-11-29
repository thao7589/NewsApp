import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import Signup from '../screens/Signup';

const screens = createStackNavigator(
    {
        Home: Home,
        Welcome: Welcome,
        Login: Login,
        Signup: Signup
    },
    {
        initialRouteName: 'Welcome'
    }
);

export default createAppContainer(screens);