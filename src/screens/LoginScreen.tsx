
import React, {useState} from 'react';
import { View, ScrollView, StyleSheet, Dimensions, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { Text, TextInput, Button, IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import PasswordInputText from './PasswordInputText';
import axiosInstance from '../utils/axiosInstance';
import { AuthInfo, loginType } from './types';
import {useDispatch} from 'react-redux';
import {saveAuthInfo} from '../store/AuthSlice';
import {storeUserSession, retrieveUserSession} from '../config/storage';

const { height: screenHeight } = Dimensions.get('window');

// Validation Schema
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

// Initial Values
const initialValues = {
  email: '',
  password: '',
};

export default function LoginScreen() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // Formik render function
  const renderForm = ({
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
  }: FormikProps<loginType>) => (
    <>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.inputs}
        placeholder={'Email'}
        placeholderTextColor="#000"
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
        error={!!(touched.email && errors.email)}
      />
      {touched.email && errors.email && (
        <Text style={styles.errorText}>{errors.email}</Text>
      )}

      <Text style={styles.label}>Password</Text>
      <PasswordInputText
        style={styles.inputs}
        placeholder={'Password'}
        secureTextEntry={true}
        autoCapitalize="none"
        iconColor={'#000'}
        placeholderTextColor={'#000'}
        setValue={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
        error={touched.password && errors.password}
      />
      {touched.password && errors.password && (
        <Text style={styles.errorText}>{errors.password}</Text>
      )}

      <View style={styles.checkboxRow}>
        <View style={styles.checkbox} />
        <Text style={styles.keepMeSigned}>Keep Me Signed In</Text>
      </View>

      <Button
        mode="contained"
        style={[
          styles.signInButton,
          (!isValid || loading) && styles.disabledButton,
        ]}
        disabled={!isValid || loading}
        onPress={() => handleSubmit()}
      >
        {loading ? 'Signing In...' : 'Sign In'}
      </Button>
    </>
  );

  const handleLogin = async (values: loginType) => {
    try {
      setLoading(true);
      console.log('email', values.email);
      const {data: authInfo} = await axiosInstance.post<AuthInfo>(
        '/auth/login',
        {
          email: values.email,
          password: values.password,
        },
      );
      const loginInfo = {user: authInfo.user, token: authInfo.token};
      dispatch(saveAuthInfo(loginInfo));
      storeUserSession(loginInfo);
      if (!authInfo.token) {
        Alert.alert('Incorrect Credentials', 'Incorrect Username or Password');
      }
      const user = await retrieveUserSession();
      console.log('user', user);
    } catch (error) {
      setLoading(false);
      console.log('error', error);
      Alert.alert('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        style={{flex: 1}}
      >
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <IconButton
              icon="arrow-left"
              iconColor="white"
              size={24}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.headerTitle}>Sign In</Text>
          </View>
        </View>

        {/* Form overlapping header */}
        <View style={styles.formWrapper}>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.formContainer}>
              <Text style={styles.welcome}>Welcome Back</Text>
              <Text style={styles.subtext}>Lorem Ipsum dolor sit amet</Text>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
              >
                {renderForm}
              </Formik>

              <View style={styles.footerRow}>
                <Text style={styles.poweredBy}>Powered by</Text>
                <Image
                  source={require('../assets/images/nexedge.jpeg')}
                  style={styles.logo}
                  resizeMode="contain"
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    backgroundColor: '#021B78',
    height: screenHeight * 0.28,
    position: 'relative',
    paddingHorizontal: 20,
    paddingTop: 50,
    zIndex: 1,
    overflow: 'visible',
  },
  ellipseLeft: {
    position: 'absolute',
    bottom: -15,
    left: 15,
    opacity: 4,
  },
  ellipseRightTop: {
    position: 'absolute',
    top: -10,
    right: -15,
    opacity: 4,
  },
  ellipseRightMid: {
    position: 'absolute',
    top: 60,
    right: -10,
    opacity: 4,
  },
  headerContent: {
    zIndex: 2,
  },
  headerTitle: {
    color: 'white',
    fontSize: 26,
    fontWeight: '600',
    fontFamily: 'Montserrat-Bold',
    marginLeft: 8,
    marginTop: 3,
  },
  formWrapper: {
    position: 'absolute',
    top: screenHeight * 0.28 - 30,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    zIndex: 10,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40,
  },
  welcome: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  subtext: {
    color: '#9a9a9a',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#9A9A9A',
    marginBottom: 6,
  },
  input: {
    marginBottom: 15,
    fontFamily: 'Montserrat-Regular',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#9A9A9A',
    backgroundColor: 'white',
    height: 20, // 👈 fixed height for consistency
    paddingHorizontal: 12, // 👈 prevents overflow
    paddingVertical: 10,   // 👈 controls text spacing
  },
  forgotPassword: {
    textAlign: 'center',
    color: '#021B78',
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: '#021B78',
    borderRadius: 8,
    paddingVertical: 8,
    marginBottom: 20,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  checkbox: {
    width: 13,
    height: 13,
    borderWidth: 1,
    borderColor: '#9a9a9a',
    borderRadius: 4,
    marginRight: 8,
  },
  keepMeSigned: {
    fontSize: 12,
    color: '#9a9a9a',
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 20,
  },
  poweredBy: {
    fontSize: 12,
    color: '#9a9a9a',
  },
  logo: {
    width: 80,
    height: 20,
  },
    inputs: {
    color: '#000',
    alignSelf: 'stretch',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
    errorText: {
    color: '#ff4444',
    fontSize: 12,
    marginTop: 4,
    marginBottom: 8,
  },
  disabledButton: {
    opacity: 0.6,
  },
});
