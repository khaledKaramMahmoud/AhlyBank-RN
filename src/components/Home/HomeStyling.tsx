import { StyleSheet } from "react-native";
import GlobalStyles from "../../GlobalStyles";

const getStyles = (isDarkMode) => {
  const currentColors = isDarkMode ? GlobalStyles.colors.dark : GlobalStyles.colors;

  return StyleSheet.create({
    homeCont:{
      backgroundColor: currentColors.bgLight
    },
    homeContainer:{
      marginHorizontal:20,
      marginTop:60,
    },
    balanceCard:{
      width:'100%',
      height:132,
      backgroundColor:currentColors.greenCard,
      borderRadius:22,
    },
    balanceCardHeader:{
      margin:11,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    balanceTxt:{
      color:currentColors.light,
      fontSize:16,
    },
    balanceRegister:{
      width:27,
      height:27,
    },
    balanceValue:{
      color:currentColors.light,
      fontSize:25,
      fontWeight:'700',
      textAlign: 'center',
    },
    options:{
      flexDirection: 'row',
      justifyContent:'space-between',
      marginTop:20,
    },
    option: {
      backgroundColor: currentColors.green,
      width:59,
      height:59,
      borderRadius: 13,
      alignItems: 'center',
      justifyContent: 'center'
    },
    optionsCont:{
      alignItems: 'center',
      color:currentColors.titlesColor,
      fontSize:16,
    },
    optionTxt:{
      color:currentColors.titlesColor,
      fontSize:16,
    },
    sliderCont:{
      flexDirection:"row",
      justifyContent:"space-between",
      marginTop:30,
    },
    sliderSendMoney:{
      color:currentColors.titlesColor,
      fontSize:20,
      fontWeight:'700',
    },
    cardsTitle:{
      color:currentColors.titlesColor,
      fontSize:20,
      fontWeight:'700',
    },
    historyTitle:{
      marginTop:10
    },
    drawer:{
      flex: 1,
      backgroundColor:currentColors.background,
      borderTopRightRadius: 40,
      borderBottomRightRadius: 40,
    },
    drawerNavbar:{
      flexDirection:"row",
      justifyContent:"space-between",
      margin:20
    },
    drawerNavButton: {
      backgroundColor: currentColors.light,
      width:40,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    drawerNavButtonText: {
      color: currentColors.green, 
      fontSize: 16,
      fontWeight:'700',
    },
    drawerSideBtn: {
      backgroundColor: currentColors.grey,
      width:30,
      height:30,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    drawerItem: {
      marginTop:-8
    },
    selectedItem: {
      backgroundColor: currentColors.green,
      borderRadius:13,
    },
    drawerlastLabel:{
      flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
    },
    drawerLabel: {
      color: currentColors.black,
      fontSize:18,
      marginLeft:-22,
      fontWeight:"500"
    },
    extraIcon:{
      fontSize:50
    },
    drawerLogoutCont:{
      marginLeft:20,
      marginTop:50,
      flexDirection:"row",
      alignItems: 'center',
      gap:10
    },
    drawerLogoutButton: {
      backgroundColor: '#E1072133',
      width:30,
      height:30,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    drawerLogoutText:{
      fontSize: 18,
      fontWeight:'500',
      color: currentColors.red,
    },
    drawerUser:{
      flexDirection: "row", 
      gap: 10,
      marginLeft:20,
    },
    drawerUserName:{
      fontWeight:'700',
      color:currentColors.black,
    },
    drawerUserPhone:{
      color:currentColors.black,
    },
    drawerFooter:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      backgroundColor:currentColors.light,
      borderRadius:29,
      paddingVertical:15,
      marginHorizontal:20,
      marginTop:10
    },
    drawerUserChoice:{
      marginRight:10
    }
  });
};

export default getStyles;
