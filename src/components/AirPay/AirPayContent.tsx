import React, { useState } from 'react';
import { Image, ImageBackground, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import SliderCard from '../../Layouts/SliderCard';
import styles from "./AirPayStyling"
import {launchImageLibrary} from 'react-native-image-picker';
import GreenBtn from '../../Inputs/GreenBtn';
import modalDone from '../../images/cards.png'  
import modalStyle from '../../Layouts/ModalStyle'

export default function AirPayContent() {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleSubmit = () => {
      setModalVisible(true);
    };
  
  const closeModal = () => {
      setModalVisible(false);
    };
  const [selectedImage, setSelectedImage] = useState(null);
  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };
  return (
    <ScrollView contentContainerStyle={styles.homeContainer}>
        <Text style={styles.airpayTitle}>Cards</Text>
        <SliderCard/>
        <TouchableOpacity onPress={openImagePicker}>
        <ImageBackground
         style={styles.airpayuploadImg}
            source={require('../../images/cardBorder.png')}
            resizeMode="cover"
        >
          <Text style={styles.airpayuploadTxt}>Touch & hold a card then drag it to this box</Text>
          </ImageBackground>
        </TouchableOpacity>

        <View style={styles.payBtn}><GreenBtn text='Pay Now' onpress={handleSubmit}/></View>

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
            <Text style={modalStyle.modalContent}>Your payment to IKEA was successful</Text>
            <Text style={modalStyle.modalPalance}>$5,542.00</Text>
            <TouchableOpacity style={modalStyle.modalCloseButton} onPress={closeModal}>
              <Text style={modalStyle.modalCloseButtonText}>Finish</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}
