import { StyleSheet } from "react-native";
import GlobalStyles from "../../GlobalStyles";

const styles = StyleSheet.create({
    homeContainer:{
        marginHorizontal:20,
        marginTop:60,
    },
    airpayTitle:{
        color:GlobalStyles.colors.titlesColor,
        fontSize:20,
        fontWeight:'700',
    },
    airpayuploadImg:{
        marginTop:60,
        height:216,
        alignItems: 'center',
        justifyContent: 'center',
        padding:10,
    },
    airpayuploadTxt:{
        color:GlobalStyles.colors.green,
        fontSize:20,
        fontWeight:'500',
        textAlign: 'center',
    },
    payBtn:{
        marginTop:30,
    }

});
  
export default styles;