import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TabsNavigator, AccountStack } from './src/navigation';

import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { combineReducers, applyMiddleware, createStore } from 'redux';

import reducers from './store/reducers';
const rootReducer = combineReducers({
  appReducer : reducers
})
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
 
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Provider store={store}>
      <NavigationContainer>
        {
          isLogin ? (<TabsNavigator />) : (<AccountStack />)
        }
      </NavigationContainer>
    </Provider>
  );
}
