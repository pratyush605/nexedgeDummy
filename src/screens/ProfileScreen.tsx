import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Footer from '../components/Footer';

const styles = StyleSheet.create({
    profile: {
        flex: 1,
    }
});

const ProfileScreen = () => {
  return (
    <View style={styles.profile}>
      <Text>ProfileScreen</Text>
      <Footer/>
    </View>
  );
};

export default ProfileScreen;