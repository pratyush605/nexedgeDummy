import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Colors, screenHeight } from '../utils/Constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { navigate, resetAndNavigate } from '../utils/NavigationUtils';
import { useRoute } from '@react-navigation/native';

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        height: screenHeight * 0.2 * 0.35,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: 16,
        width: '100%',
        backgroundColor: 'white',
        boxShadow: '0 0 8px #888888'
    }
});

const Footer = () => {

    const route = useRoute();

  return (
    <View style={styles.footer}>
        <TouchableOpacity onPress={()=> {
            navigate('HomeScreen');
        }}>
            <Icon name='home' size={40} color={route.name === 'HomeScreen' ? Colors.nexedgeColor : '#888888'}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            navigate('ProfileScreen');
        }}>
            <Icon name='person-pin' size={40} color={route.name === 'ProfileScreen' ? Colors.nexedgeColor : '#888888'}/>
        </TouchableOpacity>
    </View>
  );
};

export default Footer;