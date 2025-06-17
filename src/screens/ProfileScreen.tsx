import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { screenHeight, screenWidth } from '../utils/Constants';
import { useSelector, useDispatch } from 'react-redux';
import { getUserDetails } from '../store/AuthSlice';
import { removeUserSession } from '../config/storage';
import { logoutUser } from '../store/AuthSlice';

const styles = StyleSheet.create({
    profile: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#e0e0e0'
    },
    personalInfo: {
      backgroundColor: '#fff',
      borderRadius: 20,
      width: screenWidth * 0.8,
      padding: 25,
    },
    image: {
      borderRadius: 50,
      flexDirection: 'row',
      width: screenWidth * 0.15,
      height: screenWidth * 0.15,
      overflow: 'hidden'
    },
    logout: {
      backgroundColor: '#AB932B',
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      width: screenWidth * 0.30,
      height: screenHeight * 0.2 * 0.3,
      marginTop: 20,
    }
});

const ProfileScreen = () => {
  const user = useSelector(getUserDetails);
  console.log('user', user);
  const dispatch = useDispatch();

  const handleLogout = async() => {
  await removeUserSession();
  dispatch(logoutUser());
};
  return (
    <View style={styles.profile}>
      <View style={{flexDirection: 'row', width: '100%', marginBottom: 20}}>
        <Icon name='person' size={40} style={{paddingTop: 10, paddingLeft: 10}}/>
        <Text style={{paddingTop: 15, marginLeft: 15}}>Profile</Text>
      </View>
      <View style={styles.personalInfo}>
        <Text>Personal Information</Text>
        <View style={{ borderBottomColor: '#888888', borderBottomWidth: StyleSheet.hairlineWidth, marginTop: 10, marginBottom: 10 }}/>
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
          <View style={styles.image}>
            <Image source={require('../assets/images/pp.jpg')} style={styles.image}></Image>
          </View>
          <Text style={{marginLeft: 30}}>{user?.name}</Text>
        </View>
        <Text style={{color: '#888888', marginBottom: 25}}>Email:
          <Text style={{color: 'black', }}>     {user?.email_id}</Text>
        </Text>
        <Text style={{color: '#888888'}}>Mobile:
          <Text style={{color: 'black'}}>     1234567890</Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.logout} onPress={handleLogout}>
        <Text style={{color: 'white'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;