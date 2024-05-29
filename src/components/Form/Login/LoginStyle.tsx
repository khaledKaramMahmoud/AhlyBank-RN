import GlobalStyles from '../../../GlobalStyles';
import { StyleSheet } from 'react-native';

const getStyles = (isDarkMode) => {
  const currentColors = isDarkMode ? GlobalStyles.colors.dark : GlobalStyles.colors;

return StyleSheet.create({
    parent:{
        height: '100%',
    },
    container:{
        marginHorizontal:20,
        marginVertical:10,
    },
    navButton: {
      backgroundColor: currentColors.light,
    },
    navButtonText: {
      color: currentColors.green, 
      fontSize: 16,
      fontWeight:'700',
    },
      headerTxtCont:{
        marginTop:70,
      },
      headerTxt:{
        fontSize:40,
        fontWeight:'700',
        color:currentColors.light,
        lineHeight:46.88
      },
      userInp: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: currentColors.grey,
        borderRadius:10,
        paddingHorizontal: 10,
        position: 'relative',
        marginTop:50
      },
      userInpAt:{
        color:currentColors.light,
        fontSize:25,
        fontWeight:'700',
        marginRight: 20,
      },
      userinput: {
        flex: 1,
        fontSize: 16,
        color:currentColors.light,
        paddingTop: 35,
      },
      userNameCaption:{
        color:currentColors.light,
        fontSize:16,
        fontWeight:'700',
        position: 'absolute',
        top:10,
        left:57,
      },
      checkCont:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginTop:25,
      },
      checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      checkbox: {
        width: 25,
        height: 25,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginRight: 10,
        borderColor: 'gray',
        backgroundColor: currentColors.light,
      },
      checkIcon:{
        fontSize: 20,
        textAlign: 'center',
        color: currentColors.grey,
      },
      checkLabel: {
        fontSize: 16,
        color: currentColors.light,
        fontWeight:'400',
      },
      forgetLabel: {
        fontSize: 16,
        color: currentColors.light,
        fontWeight:'400',
      },
      loginBtnCont:{
        flexDirection:'row',
        gap: 25,
        marginTop:25,
      },
      loginBtn:{
        flex:2,
      },
      redirectLinkCont:{
        flexDirection:'row',
        justifyContent: 'center',
        marginTop:25,
      },
      redirectLink:{
        color: currentColors.light,
        fontSize: 14.5,
        fontWeight:'400',
        textAlign: 'center',
      },
      signUpLink:{
        color: currentColors.mostarda,
        fontSize: 14.5,
        fontWeight:'700',
      },
      footer:{
        alignItems: 'center',
        backgroundColor:currentColors.bgBlack,
        paddingVertical:13
      },
      footerLinks:{
        color: currentColors.mostarda,
      },
      footerDash:{
        color: currentColors.light,
      },
      copyRight:{
        color: currentColors.light,
        fontSize: 10,
        fontWeight:'400',
        textAlign: 'center',
        marginTop:7,
      }
});
}
export default getStyles;
