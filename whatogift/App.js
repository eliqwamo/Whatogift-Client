import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TabsNavigator, AccountStack } from './src/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { useSelector } from 'react-redux';

import firebase from './src/utilis/firebaseConfig';

import reducers from './store/reducers';
const rootReducer = combineReducers({
  appReducer: reducers,
  giftsList: reducers
})
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {

  const [token, setToken] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const getDataFromAsync = useCallback(async () => {
    const dataFromAsync = await AsyncStorage.getItem('Account');
    if (dataFromAsync != null) {
      const data = JSON.parse(dataFromAsync);
      setToken(data.token);
      setIsLogin(true);
    }
  }, [setToken])

  useEffect(() => {
    getDataFromAsync();
  }, [getDataFromAsync])



  const [isAuth, setIsAuth] = useState(false);
  if (firebase.apps.length) {
    firebase.auth().onAuthStateChanged((user) => {
      setIsAuth(!!user)
    })
  }


  return (
    <Provider store={store}>
      <NavigationContainer>
        {
          isAuth ? (<TabsNavigator />) : (<AccountStack />)
        }
      </NavigationContainer>
    </Provider>
  );
}
