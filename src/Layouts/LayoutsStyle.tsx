import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';
import GlobalStyles from '../GlobalStyles';
import { StyleSheet } from 'react-native';

const getStyles = (isDarkMode) => {
  const currentColors = isDarkMode ? GlobalStyles.colors.dark : GlobalStyles.colors;
  return StyleSheet.create({
  // Icon & Logo Auth Navbar
    nav:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:"space-between",
        marginTop:15,
    },
    navButton: {
        backgroundColor: currentColors.green,
        width:40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
      },
      navButtonText: {
        color: currentColors.light, 
        fontSize: 30,
        fontWeight:'400',
      },
      // Home nav
      homeNav:{
        marginRight: 20,
        flexDirection: "row", 
        justifyContent:"space-between",
        width:"100%"
      },
      homeNavLeft:{
        flexDirection: "row", 
        gap: 10
      },
      homeNavName:{
        fontWeight:'700',
        color:currentColors.black,
      },
      homeNavBtn:{
        backgroundColor: currentColors.light,
        width:40,
        height:40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      // Slider
      sliderContainer: {
        flex: 1,
        marginTop: 10,
        // paddingLeft: 5, 
      },
      sliderCardContainer: {
        width: 77,
        height: 86,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        marginHorizontal: 18, // Add horizontal margin between sliders
        borderRadius: 18,
        elevation: 3,
      },
      sliderImage: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
      },
      sliderLabel: {
        marginBottom: 10,
        fontSize: 14,
        fontWeight: 'bold',
        color: currentColors.titlesColor,
      },
      // client history for home
      historyCont:{
        flexDirection:"row",
        alignItems: 'center',
        justifyContent:"space-between",
        marginTop:7,
        borderBottomWidth:1,
        borderBottomColor:currentColors.grey,
        paddingVertical:10,
      },
      historyLeftSide:{
        flexDirection:"row",
        gap:10,
      },
      clientName:{
        fontSize:18,
        color:currentColors.titlesColor,
      },
      clientHistory:{
        color:currentColors.grey,
      },
      clientLogo: {
        backgroundColor: currentColors.light,
        width:50,
        height:50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
      },
      historyAmount:{
        fontSize:18,
        color:currentColors.titlesColor,
        fontWeight:'700',
      },
      VisaSliderContainer: {
        marginTop: 10,
      },
      // visa card
      visaLogo:{
        alignSelf: 'flex-end',
        marginTop:23,
        marginRight:21
      },
      visaSection:{
        flexDirection:"row",
        alignItems: 'center',
        justifyContent:"space-between",
        marginLeft:30,
        marginRight:24,
        marginTop:24
      },
      visaDetails:{
        flexDirection:"row",
        alignItems: 'center',
        justifyContent:"space-between",
        marginLeft:30,
        marginRight:24,
        marginVertical:22,
      },
      visaIcons:{
        flexDirection:"row",
        alignItems: 'center',
        gap:4
      },
      visaBalance:{
        fontSize:25,
        color:currentColors.light,
        fontWeight:'700',
        marginLeft:30
      },
      visaNumber:{
        fontSize:25,
        color:currentColors.light,
      },
      visaIcon1:{
        color:currentColors.light,
        backgroundColor:'#f9cd7f',
      },
      visaTitle:{
        color:currentColors.grey
      },
      visaData:{
        color:currentColors.light,
        fontWeight:"700"
      },
      // card row
      View2Row:{
        flexDirection:"row",
        gap:9,
        alignItems:"center",
        justifyContent:"flex-start",
        backgroundColor:currentColors.light,
        height:86,
        borderRadius:18,
        marginTop:10,
        paddingHorizontal:10
      },
      View2nameImg:{
        width:59,
        height:59,
        borderRadius:8
      },
      View2name:{
        color:currentColors.titlesColor,
        fontWeight:"700"
      },
      View2txt:{
        color:currentColors.grey,
      },
      View2data:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:5,
        gap:5
      },
      
      
})
}
export default getStyles;