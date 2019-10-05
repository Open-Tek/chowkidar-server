import React from 'react';
import {Image, Platform} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import FlatScreen from '../screens/FlatScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from "../screens/LoginScreen";
const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
});

const HomeStack = createStackNavigator(
    {
        Home: FlatScreen,
    },
    config
);

const LoginStack = createStackNavigator(
    {
        Login: LoginScreen,
    },
    config
);
LoginStack.navigationOptions = {
    tabBarLabel: 'Login',
    tabBarIcon: ({ focused }) => (
        <Image
            source={require('../assets/images/icons/Stats-Icon.png')}
            resizeMode="contain"
        />
    ),
};

LoginStack.path = '';


HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
        />
    ),
};

const LinksStack = createStackNavigator(
    {
        Links: LinksScreen,
    },
    config
);

HomeStack.path = '';

LinksStack.navigationOptions = {
    tabBarLabel: 'Logs',
    tabBarIcon: ({ focused }) => (
        <Image
            source={require('../assets/images/icons/Logs-Icon.png')}
            resizeMode="contain"
        />
    ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
    {
        Settings: SettingsScreen,
    },
    config
);

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ focused }) => (
        <Image

            source={require('../assets/images/icons/Settings-Icon.png')}
            resizeMode="contain"
        />
    ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
    HomeStack,
    LoginStack,
    LinksStack,
    SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;