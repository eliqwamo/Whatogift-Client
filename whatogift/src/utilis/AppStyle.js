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
})