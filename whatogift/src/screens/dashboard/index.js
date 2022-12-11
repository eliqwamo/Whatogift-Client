import React, {useEffect,useCallback, useState} from 'react'
import { View, Text, Button, Alert} from 'react-native';
import Style from '../../utilis/AppStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../utilis/AppColors';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/actions';
import * as Location from 'expo-location';


const Dashboard = (props) => {

    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [location, setLocation] = useState(null);

    const getDataFromAsync = useCallback(async ()=> {
        const dataFromAsync = await AsyncStorage.getItem('Account');
        if(dataFromAsync != null){
            const data = JSON.parse(dataFromAsync);
            setToken(data.token);
        }
    },[setToken])

    useEffect(() => {
        getDataFromAsync();
    },[getDataFromAsync])



    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);

          if(token && location){
              console.log(location);
            const action = actions.getOverview(token,location);
            try {
                dispatch(action);
                setIsLoading(false);
            } catch (error) {
                
            }
          }

        })();
      }, []);
    return(
        <View style={Style.container}>
            <Text>Dashboard</Text>
            <Button onPress={() => {dispatch(actions.logout())}} title='Logout' />
        </View>
    )
}

export const screenOptions = (navData) => {
    return {
        headerTitle: 'Overview',
        headerShown: true,
        headerRight: () => (
            <MaterialIcons onPress={() => {navData.navigation.navigate('test')}} name='settings' color={Colors.white} size={26} />
        )
    }
}

export default Dashboard;