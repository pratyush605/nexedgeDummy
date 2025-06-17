import axios from 'axios';
import {store} from '../store';
import {logoutUser} from '../store/AuthSlice';
import {removeUserSession} from '../config/storage';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.55.130:3000/api',
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (!error.response) {
      // network or API error
      error.message =
        error.message + ': API not responding! Check your network connection.';
    } else if (error.response.status === 401) {
      store.dispatch(logoutUser());
      removeUserSession();
    } else if (error.response.status === 403) {
      // setTimeout(() => {
      //   toast.error('Access Denied!');
      // }, 500);
      // window.history.back();
    }
    throw error;
  },
);

export default axiosInstance;
