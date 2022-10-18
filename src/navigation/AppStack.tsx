import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Error, Home } from '../screens';
import { RootStackParamList } from '../config';

const AppStack = createNativeStackNavigator<RootStackParamList>();

const AppStackNavigation = () => {
    return (
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="Home" component={Home} />
            <AppStack.Screen name="Error" component={Error} />
        </AppStack.Navigator>
    );
};

export default AppStackNavigation;