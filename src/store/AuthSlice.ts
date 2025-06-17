import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import axiosInstance from '../utils/axiosInstance';
import {UserData} from '../screens/types';

export interface AuthState {
  user?: UserData;
  token?: string;
}

// AuthState type where all fields are required
export type RequiredAuthState = Required<AuthState>;

const initialState: AuthState = {};

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveAuthInfo: (state, action: PayloadAction<RequiredAuthState>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${action.payload.token}`;
    },
    logoutUser: state => {
      state.user = undefined;
      state.token = undefined;
      axiosInstance.defaults.headers.common.Authorization = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const {saveAuthInfo, logoutUser} = counterSlice.actions;

// Selector to get user details
export const getUserDetails = (state: {auth: AuthState}) => state.auth.user;

export default counterSlice.reducer;
