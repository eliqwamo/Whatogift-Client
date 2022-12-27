import react, {useState, useEffect} from "react";
import {View,Text, TouchableOpacity, ActivityIndicator, Alert} from 'react-native';
import Style from '../../utilis/AppStyle';
import {TextInput, Button} from 'react-native-paper';
import Colors from '../../utilis/AppColors.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as actions from '../../../store/actions';
import {useDispatch} from 'react-redux';

import firebase from '../../utilis/firebaseConfig';

const Login = () => {


    const [loginView, setLoginView] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if(errorMsg){
            Alert.alert('Login', errorMsg);
        }
    },[errorMsg])


    const login = async() => {
        setIsLoading(true);
        if(email != '' && password != ''){
            try {
                const action = actions.login(email,password);
                dispatch(action);
                const user = await firebase.auth().signInWithEmailAndPassword(email,password);
                setIsLoading(false);
            } catch (error) {
                
            }
        } else {
            setIsLoading(false);
            setErrorMsg('Email and password are required');
        }
    }



    const signup = async() => {
        setErrorMsg(null);
        setIsLoading(true);
        if(email != '' && password != '' && firstName != '' && lastName != ''){
            try {
                const user = await firebase.auth().createUserWithEmailAndPassword(email,password);
                const action = actions.signup(email,password,firstName, lastName, user.user.uid);
                dispatch(action);
                setIsLoading(false);
            } catch (error) {
                setErrorMsg(error.message);
                setIsLoading(false);
            }
        } else {
            setIsLoading(false);
            setErrorMsg('Email and password are required');
        }
    }




    // const login = async() => {
    //     setIsLoading(true);
    //     if(email != '' && password != ''){
    //         const action = actions.login(email,password);
    //         try {
    //             dispatch(action);
    //             setIsLoading(false);
    //         } catch (error) {
                
    //         }
    //     } else {
    //         setIsLoading(false);
    //         setErrorMsg('Email and password are required');
    //     }
    // }




    return(
        <View style={Style.container}>

        {
            loginView ? (
                <View>
                            <Text style={{fontSize:24, fontWeight:'700', marginBottom:30}}>Login</Text>
                            <TextInput
                                value={email} onChangeText={text => {setEmail(text)}}
                                label="Email"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                right={<TextInput.Icon icon="email" />}
                            />

                            <TextInput
                                value={password} onChangeText={text => {setPassword(text)}}
                                label="Password"
                                keyboardType="default"
                                autoCapitalize="none"
                                secureTextEntry
                                right={<TextInput.Icon icon="eye" />}
                            />
                            {
                                isLoading ? (<ActivityIndicator color={Colors.ocean} size="large" />) 
                                : (<Button icon="send" mode="contained" onPress={login}>LOGIN</Button>)
                            }
                            <TouchableOpacity onPress={() => {setLoginView(false)}} style={{width:'100%', alignItems:'center', marginTop:20}}>
                                <Text>Don't have account? Signup Now!</Text>
                            </TouchableOpacity>
                </View>
            ) : (





            <View>
            <Text style={{fontSize:24, fontWeight:'700', marginBottom:30}}>Signup</Text>
           

            <TextInput
                value={firstName} onChangeText={text => {setFirstName(text)}}
                label="First name"
                keyboardType="default"
                right={<TextInput.Icon icon="account" />}
            />


            <TextInput
                value={lastName} onChangeText={text => {setLastName(text)}}
                label="Last name"
                keyboardType="default"
                right={<TextInput.Icon icon="account" />}
            />

           
            <TextInput
                value={email} onChangeText={text => {setEmail(text)}}
                label="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                right={<TextInput.Icon icon="email" />}
            />

            <TextInput
                value={password} onChangeText={text => {setPassword(text)}}
                label="Password"
                keyboardType="default"
                autoCapitalize="none"
                secureTextEntry
                right={<TextInput.Icon icon="eye" />}
            />
            {
                isLoading ? (<ActivityIndicator color={Colors.ocean} size="large" />) 
                : (<Button icon="send" mode="contained" onPress={signup}>SIGN UP</Button>)
            }

                    <TouchableOpacity onPress={() => {setLoginView(true)}} style={{width:'100%', alignItems:'center', marginTop:20}}>
                        <Text>Back to login</Text>
                    </TouchableOpacity>


                </View>
            )
        }
     

        </View>
    )
}

export default Login;