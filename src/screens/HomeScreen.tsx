import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

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
    </View>
  );
};

export default HomeScreen;