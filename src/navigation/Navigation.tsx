import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import SigninScreen from '../screens/SigninScreen';
import { navigationRef } from '../utils/NavigationUtils';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name='SplashScreen' component={SplashScreen}/>
            <Stack.Screen name='SigninScreen' component={SigninScreen}/>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            <Stack.Screen name='ProfileScreen' component={ProfileScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;