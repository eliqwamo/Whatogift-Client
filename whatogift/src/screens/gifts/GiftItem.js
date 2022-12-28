import React from "react";
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native';
import Colors from '../../utilis/AppColors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const GiftItem = props => {


    return(
        <View style={styles.row}>
            <View style={styles.product_row}>
                <View style={styles.image_container}>
                    <View style={styles.brand}>
                        <Text style={styles.brand_text}>{props.gift.gift.brandId.brandName} / {props.gift.gift.categoryId.categoryName}</Text>
                    </View>
                    <Image source={{uri: props.gift.gift.productImage[0].imageSource}} style={styles.image} />
                </View>
                <View style={styles.product_container}>
                    <Text>{props.gift.gift.productName}</Text>
                    <Text style={styles.desc}>{props.gift.gift.productDescription.toString().substring(0,60)}...</Text>
                </View>
                <View style={styles.price_container}>
                    <Text style={styles.price}>${props.gift.gift.productPrice}</Text>
                    <Text style={styles.instock}>{props.gift.gift.unitInStock} left</Text>

                    <View style={{flexDirection:'row', marginTop:7}}>
                        <Ionicons size={18} color={Colors.pink} name='md-location-sharp' />
                        <Text style={styles.distance}>{(props.gift.distance / 200000).toFixed(0)}km</Text>
                    </View>
                </View>
            </View>
            <View style={styles.company_row}>
                <View style={styles.company_container}>
                    <Image source={{uri:props.gift.gift.companyId.logo}} style={styles.logo} />
                    <Text style={styles.company}>{props.gift.gift.companyId.companyName}</Text>
                </View>
                <View style={styles.instore_container}>
                    <MaterialCommunityIcons size={20} color={Colors.white} name='chat' />
                    <Text style={styles.reviews}>{props.gift.gift.reviews.length}</Text>
                </View>
                <View style={styles.btn_container}>
                    <Text style={styles.view}>VIEW</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    destance:{fontSize:10,marginTop:10},
    instock:{fontSize:13},
    price:{fontWeight:'800', fontSize:16},
    reviews:{color:Colors.white, marginLeft:6},
    view:{fontSize:14, color:Colors.white, fontWeight:'700'},
    desc:{fontSize:12},
    company:{marginTop:10, marginLeft:7},
    logo:{width:20, height:20, resizeMode:'cover',marginTop:10},
    image:{width:'100%', height:90, resizeMode:'cover'},
    row:{width:'100%', backgroundColor:Colors.white, marginBottom:12},
    product_row:{flexDirection:'row',width:'100%',height:100},
    company_row: {flexDirection:'row', width:'100%', height:40, backgroundColor:Colors.light_blue2},
    image_container: {width:'30%'},
    product_container: {width:'50%',padding:10},
    price_container: {width:'20%', alignItems:'center', justifyContent:'center'},
    company_container: {width:'60%', alignItems:'flex-start', paddingHorizontal:5, flexDirection:'row'},
    instore_container: {width:'20%', justifyContent:'center', alignItems:'center', backgroundColor:Colors.dark_blue, flexDirection:'row'},
    btn_container: {width:'20%', backgroundColor:Colors.ocean, alignItems:'center', justifyContent:'center'},
    brand:{width:'100%', height:15, backgroundColor:Colors.pink, alignItems:'center', justifyContent:'center'},
    brand_text:{color:Colors.white, fontSize:10},
});

export default GiftItem;