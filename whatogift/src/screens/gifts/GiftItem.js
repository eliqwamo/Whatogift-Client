import React from "react";
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

const GiftItem = props => {
    return(
        <View>
            <Text>{props.gift.productName}</Text>
        </View>
    )
}

export default GiftItem;