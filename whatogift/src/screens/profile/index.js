import React from 'react'
import { View, Text} from 'react-native';
import Style from '../../utilis/AppStyle';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from 'react-native-paper';


const Profile = () => {

    const myData = useSelector((state) => state.myData);

    return(
        <View style={Style.container_nopadding}>

            <View style={Style.avatar_container}>
                {
                    myData?.appReducer?.avatar && <Avatar.Image size={100} source={{uri:myData?.appReducer?.avatar}} />
                }
                <Text style={Style.username}>{myData?.appReducer?.firstName} {myData.appReducer.lastName}</Text>
                <Text style={Style.email}>{myData?.appReducer?.email}</Text>
                
            </View>
            
        </View>
    )
}

export default Profile;