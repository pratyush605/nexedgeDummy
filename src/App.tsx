import Navigation from './navigation/Navigation';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './store';
import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider} from 'react-native-paper';
import {retrieveUserSession} from './config/storage';
import {saveAuthInfo} from './store/AuthSlice';

function App(): React.JSX.Element {
  const dispatch = useDispatch();

  const getLoggedInUser = async () => {
    const user = await retrieveUserSession();
    console.log('user', user);
    if (user) {
      dispatch(saveAuthInfo(user));
    }
  };

  useEffect(() => {
    getLoggedInUser();
  }, []);

  const isLoggedIn = !!useSelector((state: RootState) => state.auth.token);

  return (
    <PaperProvider>
      <NavigationContainer>
        <Navigation isLoggedIn={isLoggedIn} />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;