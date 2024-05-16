import GlobalStyles from '../../../GlobalStyles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    parent:{
        height: '100%',
    },
    container:{
        marginHorizontal:20,
        marginVertical:10,
    },
    navButton: {
      backgroundColor: GlobalStyles.colors.light,
    },
    navButtonText: {
      color: GlobalStyles.colors.green, 
      fontSize: 16,
      fontWeight:'700',
    },
      headerTxtCont:{
        marginTop:70,
      },
      headerTxt:{
        fontSize:40,
        fontWeight:'700',
        color:GlobalStyles.colors.light,
        lineHeight:46.88
      },
      userInp: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: GlobalStyles.colors.grey,
        borderRadius:10,
        paddingHorizontal: 10,
        position: 'relative',
        marginTop:50
      },
      userInpAt:{
        color:GlobalStyles.colors.light,
        fontSize:25,
        fontWeight:'700',
        marginRight: 20,
      },
      userinput: {
        flex: 1,
        fontSize: 16,
        color:GlobalStyles.colors.light,
        paddingTop: 35,
      },
      userNameCaption:{
        color:GlobalStyles.colors.light,
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
        backgroundColor: GlobalStyles.colors.light,
      },
      checkIcon:{
        fontSize: 20,
        textAlign: 'center',
        color: GlobalStyles.colors.grey,
      },
      checkLabel: {
        fontSize: 16,
        color: GlobalStyles.colors.light,
        fontWeight:'400',
      },
      forgetLabel: {
        fontSize: 16,
        color: GlobalStyles.colors.light,
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
        color: GlobalStyles.colors.light,
        fontSize: 14.5,
        fontWeight:'400',
        textAlign: 'center',
      },
      signUpLink:{
        color: GlobalStyles.colors.mostarda,
        fontSize: 14.5,
        fontWeight:'700',
      },
      footer:{
        alignItems: 'center',
        backgroundColor:GlobalStyles.colors.bgBlack,
        paddingVertical:13
      },
      footerLinks:{
        color: GlobalStyles.colors.mostarda,
      },
      footerDash:{
        color: GlobalStyles.colors.light,
      },
      copyRight:{
        color: GlobalStyles.colors.light,
        fontSize: 10,
        fontWeight:'400',
        textAlign: 'center',
        marginTop:7,
      }
});

export default styles;
