import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import MainContainer from './MainContainer';
// Import your authenticated screens here
// import HomeScreen from '../screens/HomeScreen';
// import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

interface NavigationProps {
  isLoggedIn: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isLoggedIn }) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isLoggedIn ? (
        // Authenticated screens
        <>
          <Stack.Screen name="MainContainer" component={MainContainer} />
        </>
      ) : (
        // Unauthenticated screens
        <>
          {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
          <Stack.Screen name="Login" component={LoginScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Navigation;