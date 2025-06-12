import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Footer from '../components/Footer';

const styles = StyleSheet.create({
    home: {
        flex: 1,
    }
});

const HomeScreen = () => {
  return (
    <View style={styles.home}>
      <Footer/>
    </View>
  );
};

export default HomeScreen;