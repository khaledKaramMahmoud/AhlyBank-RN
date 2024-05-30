import { StyleSheet } from "react-native";
import GlobalStyles from "../../GlobalStyles";

const getStyles = (isDarkMode) => {
    const currentColors = isDarkMode ? GlobalStyles.colors.dark : GlobalStyles.colors;

return StyleSheet.create({
    airCont:{
        backgroundColor: currentColors.bgLight,
        flex:1
      },
    homeContainer:{
        marginHorizontal:20,
        marginTop:60,
    },
    airpayTitle:{
        color:currentColors.titlesColor,
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
        color:currentColors.green,
        fontSize:20,
        fontWeight:'500',
        textAlign: 'center',
    },
    payBtn:{
        marginTop:30,
    }

});
}
export default getStyles;