import { StyleSheet } from "react-native";
import GlobalStyles from "../../../GlobalStyles";

const getStyles = (isDarkMode) => {
  const currentColors = isDarkMode ? GlobalStyles.colors.dark : GlobalStyles.colors;

return StyleSheet.create({
    parent:{
      backgroundColor:currentColors.bgLight,
      height: '100%',
    },
    container:{
      marginHorizontal:20,
      marginVertical:10,
      height: '96%',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },

      title:{
        color:currentColors.titlesColor
      },
      subtitle:{
        color:currentColors.grey
      },
      titleCont:{
        marginTop:30,
      },

      mobileInp: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: currentColors.green,
        backgroundColor: currentColors.light,
        borderRadius:10,
        paddingHorizontal: 10,
        position: 'relative',
        marginTop:20
      },
      mobileIcon:{
        color:currentColors.grey,
        fontSize:25,
        fontWeight:'700',
        marginRight: 20,
      },
      mobileinput: {
        flex: 1,
        fontSize: 16,
        color:currentColors.titlesColor,
        paddingTop: 35,
      },
      mobileCaption:{
        color:currentColors.green,
        fontSize:16,
        fontWeight:'700',
        position: 'absolute',
        top:10,
        left:57,
      },
      // signup password
      passInpShadow:{
        borderWidth:0,
        // Android
        elevation: 5,
        // iOS
        shadowColor: currentColors.bgBlack,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      radioCont: {
        flexDirection: 'row',
        gap: 10,
      },
      // finish 
      finishBackground:{
        backgroundColor:currentColors.green,
        height: '100%',
      },
      finishLogo:{        
        marginHorizontal:20,
        marginVertical:10,
      },
      finishImgBackground:{
        height: '100%',
        marginTop:20,
      },
      finishData:{
        height: '80%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginHorizontal:20,
        marginVertical:10,
      },
      finishTitle:{
        color:currentColors.light
      },
      finishTitleCont:{
        marginTop:-40,
      },
      finishBtn:{
        backgroundColor: currentColors.light,
        paddingVertical: 15,
        paddingHorizontal: 24,
        borderRadius: 12.5,
        alignItems: 'center',
      },
      finishBtnTxt: {
        color: currentColors.green,
        fontSize: 16,
        fontWeight: '700',
      },
  });
}
  export default getStyles;
  