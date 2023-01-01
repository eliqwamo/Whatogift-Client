import React from "react";
import {View, TouchableOpacity, ScrollView, Text, Image} from 'react-native';
import Styles from '../../utilis/AppStyle';

const GiftInfo = props => {

    //console.log(JSON.stringify(props));

    const giftItem = props.route.params.gift.gift;

    return (
        <View style={Styles.container_nopadding}>
            <ScrollView>
            <View style={Styles.big_image_container}>
                <Image source={{uri: giftItem.productImage[0].imageSource}} style={Styles.big_image} />
            </View>
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