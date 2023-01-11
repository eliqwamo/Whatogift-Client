import { StyleSheet } from 'react-native';
import Colors from './AppColors';

export default StyleSheet.create({
    container:{
        flex:1, backgroundColor:Colors.bg,
        padding:30
    },
    btn_container:{
        width:'100%',
        alignItems:'center',
        paddingVertical:15,
        borderRadius:12,
        backgroundColor: Colors.pink,
        marginTop:20, marginBottom:20
    },
    btn_white_text:{
        fontWeight:'700',
        color:Colors.white,
        fontSize:20
    },
    username:{
        fontSize:20, marginTop:7
    },
    email:{
        fontSize:14, marginTop:0
    },


    avatar_container:{
        width:'100%',
        paddingVertical:30,
        backgroundColor:Colors.white,
        alignItems:'center'
    },



    container_nopadding:{
        flex:1, backgroundColor:Colors.bg,
    },
    big_image_container:{
        width:'100%', height:350,
    },
    big_image:{
        width:'100%', height:350, resizeMode:'cover'
    },
})