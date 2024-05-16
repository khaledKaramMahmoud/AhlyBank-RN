import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import NavAuth from '../../../Layouts/NavAuth';
import styles from './SignupStyles';
import GlobalStyles from '../../../GlobalStyles';
import Icons from 'react-native-vector-icons/Entypo';
import GreenBtn from '../../../Inputs/GreenBtn';
import logo from '../../../images/logo2.png'
import FiveInputsRow from '../../../Inputs/FiveInputsRow';
import PassInput from '../../../Inputs/PassInput';
import RadioBtn from '../../../Inputs/RadioBtn';

export default function SignupPass({navigation}) {
      const titleStyles = [GlobalStyles.fonts.h4,styles.title]
      const subtitleStyles = [GlobalStyles.fonts.h5,styles.subtitle]

      const backClick = () => {
        navigation.navigate("ConfirmCode");
      };
      const nextClick = () => {
        navigation.navigate("FinishSignup");
      };
  return (
    <View style={styles.parent}>
      <View style={styles.container}>
        {/* top */}
        <View>
        <NavAuth btnTxt={'<'} src={logo}  onPress={backClick}/>
        
        <View style={styles.titleCont}>
          <Text style={titleStyles}>Set your password</Text>
          <Text style={subtitleStyles}>Enter a strong password for your online banking account</Text>
        </View>
          
          <PassInput text={'Password'}/>
          <PassInput btnStyle={styles.passInpShadow} txtStyle={{color:GlobalStyles.colors.grey}} text={'Confirm Password'}/>

        <View style={styles.radioCont}>
           <View>
                <RadioBtn label={'Lower case letter'}/>
                <RadioBtn label={'Minimum 8 characters'}/>
                <RadioBtn label={'Special character'}/>
           </View>
            <View>
                <RadioBtn label={'Upper case letter'}/>
                <RadioBtn label={'Number'}/>
            </View>
        </View>
          
        </View>

        {/* bottom */}
        <View>
          <GreenBtn text='Submit' onpress={nextClick}/>
        </View>

      </View>

    </View>
  );
}
