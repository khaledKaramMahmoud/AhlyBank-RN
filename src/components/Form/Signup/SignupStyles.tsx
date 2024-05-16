import { StyleSheet } from "react-native";
import GlobalStyles from "../../../GlobalStyles";

const styles = StyleSheet.create({
    parent:{
      backgroundColor:GlobalStyles.colors.bgLight,
      height: '100%',
      // flexDirection: 'column',
    },
    container:{
      marginHorizontal:20,
      marginVertical:10,
      height: '96%',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },

      title:{
        color:GlobalStyles.colors.titlesColor
      },
      subtitle:{
        color:GlobalStyles.colors.grey
      },
      titleCont:{
        marginTop:30,
      },

      mobileInp: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: GlobalStyles.colors.green,
        backgroundColor: GlobalStyles.colors.light,
        borderRadius:10,
        paddingHorizontal: 10,
        position: 'relative',
        marginTop:20
      },
      mobileIcon:{
        color:GlobalStyles.colors.grey,
        fontSize:25,
        fontWeight:'700',
        marginRight: 20,
      },
      mobileinput: {
        flex: 1,
        fontSize: 16,
        color:GlobalStyles.colors.titlesColor,
        paddingTop: 35,
      },
      mobileCaption:{
        color:GlobalStyles.colors.green,
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
        shadowColor: GlobalStyles.colors.bgBlack,
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
        backgroundColor:GlobalStyles.colors.green,
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
        color:GlobalStyles.colors.light
      },
      finishTitleCont:{
        marginTop:-40,
      },
      finishBtn:{
        backgroundColor: GlobalStyles.colors.light,
        paddingVertical: 15,
        paddingHorizontal: 24,
        borderRadius: 12.5,
        alignItems: 'center',
      },
      finishBtnTxt: {
        color: GlobalStyles.colors.green,
        fontSize: 16,
        fontWeight: '700',
      },
  });
  
  export default styles;
  