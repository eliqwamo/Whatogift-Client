import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TabsNavigator, AccountStack } from './src/navigation';

export default function App() {

  const [isLogin, setIsLogin] = useState(true);

  return (
    <NavigationContainer>
      {
        isLogin ? (<TabsNavigator />) : (<AccountStack />)
      }
    </NavigationContainer>
  );
}
