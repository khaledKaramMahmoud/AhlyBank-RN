import { StyleSheet } from "react-native";
import GlobalStyles from "../GlobalStyles";

const styles = StyleSheet.create({ 
modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C2437C4',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 6,
  },
  modalContent: {
    fontSize: 16,
    marginBottom: 21,
  },
  modalCloseButton: {
    backgroundColor: GlobalStyles.colors.green,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    height:50,
    width:"100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCloseButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  modalPalance:{
    color: GlobalStyles.colors.titlesColor,
    fontSize:40,
    fontWeight:'700',
    marginBottom:25
  }
});
  
export default styles;