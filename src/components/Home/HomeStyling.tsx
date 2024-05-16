import { StyleSheet } from "react-native";
import GlobalStyles from "../../GlobalStyles";

const styles = StyleSheet.create({
  homeContainer:{
    marginHorizontal:20,
    marginTop:60
  },
  balanceCard:{
    width:'100%',
    height:132,
    backgroundColor:GlobalStyles.colors.greenCard,
    borderRadius:22,
  },
  balanceCardHeader:{
    margin:11,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  balanceTxt:{
    color:GlobalStyles.colors.light,
    fontSize:16,
  },
  balanceRegister:{
    width:27,
    height:27,
  },
  balanceValue:{
    color:GlobalStyles.colors.light,
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
    backgroundColor: GlobalStyles.colors.green,
    width:59,
    height:59,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center'
  },
  optionsCont:{
    alignItems: 'center',
    color:GlobalStyles.colors.titlesColor,
    fontSize:16,
  },
  optionTxt:{
    color:GlobalStyles.colors.titlesColor,
    fontSize:16,
  },
  sliderCont:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:30,
  },
  sliderSendMoney:{
    color:GlobalStyles.colors.titlesColor,
    fontSize:20,
    fontWeight:'700',
  },
  // home cards page
  cardsTitle:{
    color:GlobalStyles.colors.titlesColor,
    fontSize:20,
    fontWeight:'700',
  },
  historyTitle:{
    marginTop:10
  },
  // drawer side bar
  drawer:{
    flex: 1,
    backgroundColor:GlobalStyles.colors.bgLight,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
  },
  drawerNavbar:{
    flexDirection:"row",
    justifyContent:"space-between",
    margin:20
  },
  drawerNavButton: {
    backgroundColor: GlobalStyles.colors.light,
    width:40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  drawerNavButtonText: {
    color: GlobalStyles.colors.green, 
    fontSize: 16,
    fontWeight:'700',
  },
  drawerSideBtn: {
    backgroundColor: GlobalStyles.colors.grey,
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
    backgroundColor: GlobalStyles.colors.green,
    borderRadius:13,
  },
  drawerlastLabel:{
    flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between',
  },
  drawerLabel: {
    color: '#1B1B1B',
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
    color: GlobalStyles.colors.red,
  },
  drawerUser:{
    flexDirection: "row", 
    gap: 10,
    marginLeft:20,
  },
  drawerUserName:{
    fontWeight:'700',
    color:GlobalStyles.colors.black,
  },
  drawerUserPhone:{
    color:GlobalStyles.colors.black,
  },
  drawerFooter:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    backgroundColor:GlobalStyles.colors.light,
    borderRadius:29,
    paddingVertical:15,
    marginHorizontal:20,
    marginTop:10
  },
  drawerUserChoice:{
    marginRight:10
  }

  });
  
  export default styles;
  