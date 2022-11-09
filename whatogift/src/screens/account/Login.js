import react, {useState} from "react";
import {View,Text} from 'react-native';
import Style from '../../utilis/AppStyle';
import {TextInput, Button } from 'react-native-paper';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View style={Style.container}>

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

            <Button icon="send" mode="contained" onPress={() => console.log('Pressed')}>LOGIN</Button>

            

        </View>
    )
}

export default Login;