import React, { useState } from 'react';
import { Image, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './TransferStyle'
import NavAuth from '../../Layouts/NavAuth';
import Icons from 'react-native-vector-icons/FontAwesome';
import logo from '../../images/logo2.png'
import modalDone from '../../images/modalComplete.png'
import GlobalStyles from '../../GlobalStyles';
import GreenBtn from '../../Inputs/GreenBtn';
import FiveInputsRow from '../../Inputs/FiveInputsRow';

export default function TransferConfirmCode({navigation}) {
    const [isModalVisible, setModalVisible] = useState(false);

    const handleSubmit = () => {
        setModalVisible(true);
      };
    
    const closeModal = () => {
        setModalVisible(false);
      };

  const backClick = () => {
    navigation.navigate("Transfer");
  };
//   const nextClick = () => {
//     navigation.navigate("ConfirmCode");
//   };
  return (
      <View style={styles.parent}>
        <ScrollView  contentContainerStyle={styles.container}>
          {/* top */}
          <View>
        <NavAuth btnTxt={'<'} src={logo} onPress={backClick}/>
        
          <Text style={styles.transTitle}>OTP</Text>
          <Text style={styles.otpSubTitle}>Enter 5 digit code we sent to +20 101 131 5412</Text>
        
        <FiveInputsRow/>    

        <View style={styles.titleCont}>
          <Text style={styles.otpQuest}>Didn’t receive the code?</Text>
          <Text style={styles.otpReq}>Request new one in 00:12</Text>
        </View>

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
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Image source={modalDone}/>
            <Text style={styles.modalTitle}>Mission Complete</Text>
            <Text style={styles.modalContent}>Transfer to Jsmine  Robert was successful</Text>
            <TouchableOpacity style={styles.modalCloseButton} onPress={closeModal}>
              <Text style={styles.modalCloseButtonText}>Finish</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      </View>
  );
}
