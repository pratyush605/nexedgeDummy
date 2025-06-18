import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Dashboard from '../screens/HomeScreen';
import Profile from '../screens/ProfileScreen';
import Performance from '../screens/PerformanceScreen';
import InvestmentReport from '../screens/InvestmentReportScreen';
import { BTABS } from '../utils/Constants';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName={BTABS.DASHBOARD}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';

          if (route.name === BTABS.DASHBOARD) {
            iconName = 'home';
          } else if (route.name === BTABS.PROFILE) {
            iconName = 'person';
          } else if (route.name === BTABS.PERFORMANCE) {
            iconName = 'engineering';
          } else if (route.name === BTABS.REPORT) {
            iconName = 'article'
          }

          return (
            <MaterialIcons
              name={iconName}
              size={24}
              color={focused ? '#000080' : '#999'}
            />
          );
        },
        tabBarLabelStyle: {
          fontSize: 12,
          paddingBottom: 5,
        },
        tabBarStyle: {
          height: 75,
          paddingTop: 10,
          paddingBottom: 5,
          backgroundColor: '#fff',
          borderTopWidth: 0.5,
          borderTopColor: '#ccc',
        },
        tabBarActiveTintColor: '#000080', // dark blue
        tabBarInactiveTintColor: '#999',
      })}
    >
      <Tab.Screen
        name={BTABS.DASHBOARD}
        component={Dashboard}
        options={{ tabBarLabel: 'Home', unmountOnBlur: true }}
      />
      <Tab.Screen
        name={BTABS.PERFORMANCE}
        component={Performance}
        options={{ tabBarLabel: 'Performance', unmountOnBlur: true }}
      />
      <Tab.Screen
        name={BTABS.REPORT}
        component={InvestmentReport}
        options={{ tabBarLabel: 'Reports', unmountOnBlur: true }}
      />
      <Tab.Screen
        name={BTABS.PROFILE}
        component={Profile}
        options={{ tabBarLabel: 'Account', unmountOnBlur: true }}
      />
    </Tab.Navigator>
  );
}
