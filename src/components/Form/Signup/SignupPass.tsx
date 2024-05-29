import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import NavAuth from '../../../Layouts/NavAuth';
import styles from './SignupStyles';
import GlobalStyles from '../../../GlobalStyles';
import GreenBtn from '../../../Inputs/GreenBtn';
import logo from '../../../images/logo2.png';
import PassInput from '../../../Inputs/PassInput';
import RadioBtn from '../../../Inputs/RadioBtn';

export default function SignupPass({ navigation }) {
  const titleStyles = [GlobalStyles.fonts.h4, styles.title];
  const subtitleStyles = [GlobalStyles.fonts.h5, styles.subtitle];

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passChanged, setPassChanged] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasLowerCase, setHasLowerCase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);
  const [isMinLength, setIsMinLength] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

  const handlePassCreateria = (password) => {
    setPassword(password);
    setPassChanged(true);

    setHasUpperCase(/[A-Z]/.test(password));
    setHasLowerCase(/[a-z]/.test(password));
    setHasNumber(/[0-9]/.test(password));
    setHasSpecialChar(/[!@#$%^&*(),.?":{}|<>]/.test(password));
    setIsMinLength(password.length >= 8);

    setPasswordsMatch(password === confirmPassword && confirmPassword !== '');
  };

  const handlePassMatch = (confirmPassword) => {
    setConfirmPassword(confirmPassword);
    setConfirmPasswordTouched(true); // Set confirm password field as touched
    setPasswordsMatch(password === confirmPassword && confirmPassword !== '');
  };

  const backClick = () => {
    navigation.navigate("ConfirmCode");
  };

  const nextClick = () => {
    if (passwordsMatch && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && isMinLength) {
      navigation.navigate("FinishSignup");
    }
  };

  return (
    <ScrollView contentContainerStyle={{minHeight:"100%"}}>
      <View style={styles.parent}>
      <View style={styles.container}>
        {/* top */}
        <View>
          <NavAuth btnTxt={'<'} src={logo} onPress={backClick} />
          <View style={styles.titleCont}>
            <Text style={titleStyles}>Set your password</Text>
            <Text style={subtitleStyles}>Enter a strong password for your online banking account</Text>
          </View>
          <PassInput 
            text={'Password'} 
            onPasswordChange={handlePassCreateria} 
          />
          <PassInput 
            btnStyle={styles.passInpShadow} 
            txtStyle={{ color: GlobalStyles.colors.grey }} 
            text={'Confirm Password'} 
            onPasswordChange={handlePassMatch} 
            warning={!passwordsMatch ? "Passwords doesn't match" : null}
          />
          <View style={styles.radioCont}>
            <View>
              <RadioBtn label={'Lower case letter'} active={hasLowerCase} />
              <RadioBtn label={'Minimum 8 characters'} active={isMinLength} />
              <RadioBtn label={'Special character'} active={hasSpecialChar} />
            </View>
            <View>
              <RadioBtn label={'Upper case letter'} active={hasUpperCase} />
              <RadioBtn label={'Number'} active={hasNumber} />
            </View>
          </View>
        </View>
        {/* bottom */}
        <View>
          <GreenBtn text='Submit' onpress={nextClick} />
        </View>
      </View>
    </View>
    </ScrollView>
  );
}
