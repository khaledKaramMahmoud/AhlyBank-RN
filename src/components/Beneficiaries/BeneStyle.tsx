import { StyleSheet } from "react-native";
import GlobalStyles from "../../GlobalStyles";

const styles = StyleSheet.create({
    beneTitle:{
        fontSize:20,
        fontWeight:'700',
        color:GlobalStyles.colors.titlesColor,
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
        backgroundColor:GlobalStyles.colors.light,
        borderRadius:15,
        flexDirection: "row",
        alignItems:'center',
        justifyContent:"space-around",
        paddingHorizontal:5,
    },
    listViewTxt:{
        color:GlobalStyles.colors.green,
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
        backgroundColor:GlobalStyles.colors.green,
        marginTop:10
    },
    GreenlistViewTxt:{
        color:GlobalStyles.colors.light
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
        backgroundColor:GlobalStyles.colors.light,
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
        backgroundColor:GlobalStyles.colors.light,
        borderRadius: 10,
        paddingLeft: 16,
        marginBottom: 10,
        paddingTop: 32,
        color:GlobalStyles.colors.black,
        position:"relative"
      },
      inpLabel:{
        position:'absolute',
        top:11,
        left:16,
        color:GlobalStyles.colors.titlesColor,
        fontWeight:"700",
      },
      selectCont:{
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingVertical:11,
        paddingHorizontal:16,
        alignItems: 'center',
        backgroundColor:GlobalStyles.colors.light,
        marginBottom:10,
      },
      selectOption:{
        marginBottom:8,
        fontWeight:'700',
        color:GlobalStyles.colors.titlesColor
      },
      selectDesc:{
        fontSize:16,
        color:GlobalStyles.colors.titlesColor
      },
      dropdown: {
        borderWidth: 1,
        borderColor: GlobalStyles.colors.grey,
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
        backgroundColor:GlobalStyles.colors.light,
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
        backgroundColor:GlobalStyles.colors.light,
        borderRadius:18,
      },
      view1Img:{
        height: 50,
        width: 50,
        marginBottom: 5,
      },
      // view2
      View2Row:{
        flexDirection:"row",
        gap:5,
        alignItems:"center",
        justifyContent:"flex-start",
        backgroundColor:GlobalStyles.colors.light,
        height:86,
        borderRadius:18,
        marginTop:10,
      },
      View2name:{
        color:GlobalStyles.colors.titlesColor,
        fontWeight:"700"
      },
      View2data:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:5,
        gap:5
      },

});
  
export default styles;