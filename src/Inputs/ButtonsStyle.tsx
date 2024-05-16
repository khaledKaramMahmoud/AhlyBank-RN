import GlobalStyles from '../GlobalStyles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // green btn
    greenBtn:{
        backgroundColor: GlobalStyles.colors.green,
        paddingVertical: 15,
        paddingHorizontal: 24,
        borderRadius: 12.5,
        alignItems: 'center',
      },
      greenBtnTxt: {
        color: GlobalStyles.colors.light,
        fontSize: 16,
        fontWeight: '700',
      },
    //   passInput
    passInp:{
        marginTop:25,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: GlobalStyles.colors.green,
        backgroundColor: GlobalStyles.colors.light,
        borderRadius:10,
        paddingHorizontal: 10,
        position:'relative',
      },
      lockIcon: {
        marginHorizontal: 10,
      },
      passCaption:{
        color:GlobalStyles.colors.green,
        fontSize:16,
        fontWeight:'700',
        position: 'absolute',
        top:10,
        left:57,

      },
      passinput: {
        flex: 1,
        fontSize: 16,
        paddingTop: 35,       
      },
      eyeIcon: {
        marginHorizontal: 10,
        marginTop: 25,
      },
      // five inputs row
      fiveInputsCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginTop: 20,
      },
      fiveInputsInput: {
        width: 45,
        height: 65,
        borderWidth: 1,
        borderColor: GlobalStyles.colors.light,
        backgroundColor: GlobalStyles.colors.light,
        fontSize:25,
        fontWeight:'700',
        borderRadius:10,
        textAlign: 'center',
      },
      // radio button
      radioButtonsCont:{
        marginTop:20,
      },
      radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      radioBtn: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginRight: 10,
        borderColor: 'gray',
        backgroundColor: GlobalStyles.colors.light,
      },
      radioLabel: {
        fontSize: 16,
        color: GlobalStyles.colors.titlesColor,
        fontWeight:'400',
      },
})

export default styles;