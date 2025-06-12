import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { screenHeight, screenWidth } from '../utils/Constants';
import { resetAndNavigate } from '../utils/NavigationUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: screenWidth * 0.7,
        height: screenHeight * 0.1,
        resizeMode: 'contain',
    },
    intro: {
      color: '#b8b8b8',
      marginLeft: screenWidth * 0.12,
      marginRight: screenWidth * 0.12,
    },
    welcome: {
      fontSize: screenWidth * 0.2 * 0.2,
      fontWeight: 'bold'
    },
    getStarted: {
      position: 'absolute',
      bottom: screenHeight * 0.2,
      backgroundColor: '#AB932B',
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      width: screenWidth * 0.35,
      height: screenHeight * 0.2 * 0.3,
    },
    circleWithArrow: {
      borderRadius: 50,
      width: screenWidth * 0.2 * 0.35,
      height: screenWidth * 0.2 * 0.35,
      backgroundColor: '#fff',
      opacity: 0.65,
      justifyContent: 'center',
      alignItems: 'center'
    }
});

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to</Text>
      <Image source={require('../assets/images/nexedge.png')} style={styles.logo}/>
      <Text style={styles.intro}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae</Text>
      <TouchableOpacity style={styles.getStarted} onPress={() => resetAndNavigate('SigninScreen')}>
        <Text style={{color: 'white', marginRight: 20}}>Get Started</Text>
        <View style={styles.circleWithArrow}>
          <Image source={require('../assets/images/arrow_forward.png')} style={{width: 40}}/>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;