import { StyleSheet } from "react-native";
import GlobalStyles from "../../GlobalStyles";

const getStyles = (isDarkMode) => {
  const currentColors = isDarkMode ? GlobalStyles.colors.dark : GlobalStyles.colors;

return StyleSheet.create({ 
    parent:{
        backgroundColor:currentColors.bgLight,
        flex:1
      },
      container:{
        marginHorizontal:20,
        marginVertical:10,
        height: "95%",
        flexDirection: 'column',
        justifyContent: 'space-between',
      },
      transTitle:{
        color:currentColors.titlesColor,
        fontSize:20,
        fontWeight:'700',
        marginTop:30,
        marginBottom:10
      },
      transOptionCont:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop:10,
        paddingVertical:11,
        paddingHorizontal:16,
        alignItems: 'center',
        backgroundColor:currentColors.light,
        borderRadius:10,
        borderWidth:2,
        borderColor:currentColors.light
      },
      transOption:{
        marginBottom:8,
        fontWeight:'700',
        color:currentColors.titlesColor
      },
      transOptionDesc:{
        fontSize:16,
        color:currentColors.titlesColor
      },
      TransReasonInp:{
        height:"100%",
        fontWeight:"700"
      },
    //   confirm
    otpSubTitle:{
        fontSize:16,
        marginBottom:20
      },
      otpQuest:{
        fontSize:16,
        marginTop:20,
        color:currentColors.grey
      },
      otpReq:{
        fontSize:16,
        fontWeight:"700",
        color:currentColors.titlesColor
      },
    
      
 });
}
export default getStyles;