import { StyleSheet } from "react-native";
import GlobalStyles from "../../GlobalStyles";

const getStyles = (isDarkMode) => {
  const currentColors = isDarkMode ? GlobalStyles.colors.dark : GlobalStyles.colors;

return StyleSheet.create({
    beneTitle:{
        fontSize:20,
        fontWeight:'700',
        color:currentColors.titlesColor,
    },
    beneContainer:{
        marginHorizontal:20,
        marginTop:70,
        flexDirection:"row",
        justifyContent:"space-between"
      },
      listViewCont:{
        flexDirection:"row",
        gap:10
      },
    listView:{
        width:61,
        height:30,
        backgroundColor:currentColors.light,
        borderRadius:15,
        flexDirection: "row",
        alignItems:'center',
        justifyContent:"space-around",
        paddingHorizontal:5,
    },
    listViewTxt:{
        color:currentColors.green,
    },
    // emptyBene
    emptyBene:{
        alignItems:"center",
        justifyContent:"center",
        marginTop:"50%",
        width:240,
    },
    emptyBeneTxt:{
        fontSize:18,
        fontWeight:"500",
        color:"#34343F",
        marginTop:15
    },
    emptyBeneDesc:{
        color:"#34343F",
    },
    EmptybeneContainer:{
        alignItems:"center",
    },
    GreenlistView:{
        backgroundColor:currentColors.green,
        marginTop:10
    },
    GreenlistViewTxt:{
        color:currentColors.light
    },
    // Add Bene
    addContainer:{
        marginHorizontal:20,
        marginVertical:10,
        position:"relative"
    },
    addnotification:{
        position:'absolute',
        top:15,
        left:50,
        backgroundColor: '#E5E5E5',
        width:40,
        height:40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addImgCont:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:26
    },
    addImg:{
        width:138,
        height:138,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:currentColors.light,
    },
    selectedImage: {
      width: '100%',
      height: '100%',
      borderRadius: 10, // Adjust based on your design
    },
    nameInps:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:14
    },
    firstNameInp: {
        height: 65,
        width:165,
        backgroundColor:currentColors.light,
        borderRadius: 10,
        paddingLeft: 16,
        marginBottom: 10,
        paddingTop: 32,
        color:currentColors.black,
        position:"relative"
      },
      inpLabel:{
        position:'absolute',
        top:11,
        left:16,
        color:currentColors.titlesColor,
        fontWeight:"700",
      },
      selectCont:{
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingVertical:11,
        paddingHorizontal:16,
        alignItems: 'center',
        backgroundColor:currentColors.light,
        marginBottom:10,
      },
      selectOption:{
        marginBottom:8,
        fontWeight:'700',
        color:currentColors.titlesColor
      },
      selectDesc:{
        fontSize:16,
        color:currentColors.titlesColor
      },
      dropdown: {
        borderWidth: 1,
        borderColor: currentColors.grey,
        borderRadius: 10,
        marginBottom:10
      },
      option: {
        padding: 10,
      },
      optionText: {
        fontSize: 16,
      },
      AddnumInp:{
        height:"100%",
        fontWeight:"700"
      },
      AccountnumInp:{
        paddingLeft: 12,
        marginBottom: 10,
        paddingTop: 20,
        height:65,
        backgroundColor:currentColors.light,
        borderRadius:10,
      },
      btnCont:{
        marginTop:12
      },
      // Views
      viewCont:{
        flexDirection:"row",
        gap:14,
        flexWrap:"wrap"
      },
      viewContainer:{
        marginHorizontal:20,
        marginTop:20
      },
      view1Card:{
        width: 77,
        height: 86,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:currentColors.light,
        borderRadius:18,
      },
      view1Img:{
        height: 50,
        width: 50,
        marginBottom: 5,
        borderRadius: 10,
      },
      // History
      beneHistoryCont:{
        marginHorizontal:20,
        marginTop:70,
      },
      beneHistoryTitle:{
        fontSize:20,
        fontWeight:'700',
        color:currentColors.titlesColor,
        marginTop:25
      },
      benenoHistory:{
        alignItems:'center',
        marginTop:80,
        marginHorizontal:"auto",
        width:"70%",
      },
      beneHistoryNoHistory:{
        fontSize:18,
        fontWeight:'500',
        color:currentColors.titlesColor,
        marginTop:15
      },
      beneHistoryDesc:{
        color:currentColors.subtitlesColor,
        marginTop:15,
        textAlign:"center",
      },
      beneHistorycard:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingVertical:10,
        paddingHorizontal:16,
        borderBottomColor:currentColors.grey,
        borderBottomWidth:1,
      },
      beneHistoryname:{
        color:currentColors.titlesColor,
        fontSize:18,
        marginBottom:8,
      },
      beneHistorydate:{
        color:currentColors.grey
      },
      beneHistoryamount:{
        color:currentColors.titlesColor,
        fontWeight:"700",
        fontSize:18
      }
      

});
} 
export default getStyles;