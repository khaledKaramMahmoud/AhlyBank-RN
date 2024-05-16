import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import NavAuth from '../../../Layouts/NavAuth';
import styles from './SignupStyles';
import GlobalStyles from '../../../GlobalStyles';
import Icons from 'react-native-vector-icons/Entypo';
import GreenBtn from '../../../Inputs/GreenBtn';
import logo from '../../../images/logo2.png'
import FiveInputsRow from '../../../Inputs/FiveInputsRow';

export default function ConfirmCode({navigation}) {
      const titleStyles = [GlobalStyles.fonts.h4,styles.title]
      const subtitleStyles = [GlobalStyles.fonts.h5,styles.subtitle]
      const requestTiming = [GlobalStyles.fonts.h5,styles.title]

      const backClick = () => {
        navigation.navigate("Signup");
      };
      const nextClick = () => {
        navigation.navigate("SignupPass");
      };
      
  return (
    <View style={styles.parent}>
      <View style={styles.container}>
        {/* top */}
        <View>
        <NavAuth btnTxt={'<'} src={logo} onPress={backClick}/>
        
        <View style={styles.titleCont}>
          <Text style={titleStyles}>Verification</Text>
          <Text style={subtitleStyles}>Enter 5 digit code we sent to +20 101 131 5412</Text>
        </View>
        
        <FiveInputsRow/>    

        <View style={styles.titleCont}>
          <Text style={subtitleStyles}>Didn’t receive the code?</Text>
          <Text style={requestTiming}>Request new one in 00:12</Text>
        </View>

        </View>

        {/* bottom */}
        <View>
          <GreenBtn text='Submit'  onpress={nextClick}/>
        </View>

      </View>

    </View>
  );
}
