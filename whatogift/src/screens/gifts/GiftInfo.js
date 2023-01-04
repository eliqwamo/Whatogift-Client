import React, {useState,useEffect,useCallback} from "react";
import {View, TouchableOpacity, ScrollView, Alert, Text, Image} from 'react-native';
import Styles from '../../utilis/AppStyle';
import Colors from '../../utilis/AppColors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as actions from '../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';


const GiftInfo = props => {

    const token = props.route.params.token;
    const giftItem = props.route.params.gift.gift;
    const dispatch = useDispatch();
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        if(errorMsg){
            Alert.alert('Product', errorMsg);
        }
    },[errorMsg])



    const saveToFav = useCallback(async () => {

        console.log('token: ' + token);
        console.log('giftItem._id: ' + giftItem._id);

        if(token && giftItem._id){
            try {
                const action = actions.saveProductToFav(token,giftItem._id);
                dispatch(action);
            } catch (error) {
                setErrorMsg(error.message);
            }
        } else {
            setErrorMsg('Some data is missing');
        }
    },[actions.saveProductToFav,dispatch]);



    const myData = useSelector((state) => state.myData);
    console.log('TTTT: ' + JSON.stringify(myData));


    return (
        <View style={Styles.container_nopadding}>
            <ScrollView>
            <View style={Styles.big_image_container}>
                <Image source={{uri: giftItem.productImage[0].imageSource}} style={Styles.big_image} />
            </View>

            <TouchableOpacity onPress={saveToFav}>
                <MaterialCommunityIcons color={Colors.pink} size={50} name='cards-heart-outline' />
            </TouchableOpacity>

            </ScrollView>
        </View>
    )
}

export const screenOptions = navData => {
    return {
        headerTitle: navData.route.params.gift.gift.productName
    }
}

export default GiftInfo;