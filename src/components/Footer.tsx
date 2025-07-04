import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { Colors, screenHeight } from '../utils/Constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { navigate } from '../utils/NavigationUtils';
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
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Icon name='home' size={40} color={route.name === 'HomeScreen' ? Colors.nexedgeColor : '#888888'}/>
                <Text style={{color: `${route.name === 'HomeScreen' ? Colors.nexedgeColor : '#888888'}`, }}>Home</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> {
            navigate('PerformanceScreen');
        }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Icon name='engineering' size={40} color={route.name === 'PerformanceScreen' ? Colors.nexedgeColor : '#888888'}/>
                <Text style={{color: `${route.name === 'PerformanceScreen' ? Colors.nexedgeColor : '#888888'}`, }}>Performance</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            navigate('InvestmentReportScreen');
        }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Icon name='article' size={40} color={route.name === 'InvestmentReportScreen' ? Colors.nexedgeColor : '#888888'}/>
                <Text style={{color: `${route.name === 'InvestmentReportScreen' ? Colors.nexedgeColor : '#888888'}`}}>Reports</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            navigate('ProfileScreen');
        }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Icon name='account-circle' size={40} color={route.name === 'ProfileScreen' ? Colors.nexedgeColor : '#888888'}/>
                <Text style={{color: `${route.name === 'ProfileScreen' ? Colors.nexedgeColor : '#888888'}`}}>Account</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
};

export default Footer;