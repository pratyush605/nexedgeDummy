import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Footer from '../components/Footer';

const styles = StyleSheet.create({
    home: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const HomeScreen = () => {
  return (
    <View style={styles.home}>
      <Text>HomeScreen</Text>
      <Footer/>
    </View>
  );
};

export default HomeScreen;