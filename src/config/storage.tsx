import EncryptedStorage from 'react-native-encrypted-storage';
import {RequiredAuthState} from '../store/AuthSlice';

export const storeUserSession = async (user: RequiredAuthState) => {
  await EncryptedStorage.setItem('user', JSON.stringify(user));
};

export const retrieveUserSession = async () => {
  const user = await EncryptedStorage.getItem('user');
  return user ? (JSON.parse(user) as RequiredAuthState) : null;
};

export const removeUserSession = async () => {
  await EncryptedStorage.removeItem('user');
};
