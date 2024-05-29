import React, { useState } from 'react';
import { Image, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './TransferStyle'
import modalStyle from '../../Layouts/ModalStyle'
import NavAuth from '../../Layouts/NavAuth';
import logo from '../../images/logo2.png'
import modalDone from '../../images/modalComplete.png'
import GreenBtn from '../../Inputs/GreenBtn';
import FiveInputsRow from '../../Inputs/FiveInputsRow';
import { useDarkMode } from '../../contexts/DarkModeContext';
import getStyles from './TransferStyle';

export default function TransferConfirmCode({navigation}) {
  const { isDarkMode } = useDarkMode();
  const styles = getStyles(isDarkMode);

    const [isModalVisible, setModalVisible] = useState(false);

    const handleSubmit = () => {
        setModalVisible(true);
      };
    
    const closeModal = () => {
        setModalVisible(false);
        nextClick()
      };

  const backClick = () => {
    navigation.navigate("Transfer");
  };
  const nextClick = () => {
    navigation.navigate("Transfer");
  };
  return (
      <View style={styles.parent}>
        <ScrollView  contentContainerStyle={styles.container}>
          {/* top */}
          <View>
        <NavAuth btnTxt={'<'} src={logo} onPress={backClick}/>
        
          <Text style={styles.transTitle}>OTP</Text>
          <Text style={styles.otpSubTitle}>Enter 5 digit code we sent to +20 101 131 5412</Text>
        
        <FiveInputsRow/>    

          <Text style={styles.otpQuest}>Didn’t receive the code?</Text>
          <Text style={styles.otpReq}>Request new one in 00:12</Text>

        </View>
          {/* bottom */}
          <View>
            <GreenBtn text='Submit' onpress={handleSubmit}/>
          </View>
        </ScrollView> 

        {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <View style={modalStyle.modalOverlay}>
          <View style={modalStyle.modalContainer}>
            <Image source={modalDone}/>
            <Text style={modalStyle.modalTitle}>Mission Complete</Text>
            <Text style={modalStyle.modalContent}>Transfer to Jsmine  Robert was successful</Text>
            <TouchableOpacity style={modalStyle.modalCloseButton} onPress={closeModal}>
              <Text style={modalStyle.modalCloseButtonText}>Finish</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      </View>
  );
}
