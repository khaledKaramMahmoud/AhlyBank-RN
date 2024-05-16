import React from 'react';
import { Text, TextInput, View } from 'react-native';
import NavAuth from '../../../Layouts/NavAuth';
import styles from './SignupStyles';
import GlobalStyles from '../../../GlobalStyles';
import Icons from 'react-native-vector-icons/Entypo';
import GreenBtn from '../../../Inputs/GreenBtn';
import logo from '../../../images/logo2.png'

export default function Signup({navigation}) {
    

      const titleStyles = [GlobalStyles.fonts.h4,styles.title]
      const subtitleStyles = [GlobalStyles.fonts.h5,styles.subtitle]

      const backClick = () => {
        navigation.navigate("Login");
      };
      const nextClick = () => {
        navigation.navigate("ConfirmCode");
      };
  return (
    <View style={styles.parent}>
      <View style={styles.container}>
        {/* top */}
        <View>
        <NavAuth btnTxt={'<'} src={logo} onPress={backClick}/>
        
        <View style={styles.titleCont}>
          <Text style={titleStyles}>Mobile number</Text>
          <Text style={subtitleStyles}>Enter the mobile number registred in the bank</Text>
        </View>

        <View style={styles.mobileInp}>
            <Icons name="mobile" size={24} style={styles.mobileIcon} />

            <TextInput
                style={styles.mobileinput}
                placeholder="Enter your mobile number"
                placeholderTextColor="#1C2437"
            />
            <Text style={styles.mobileCaption}>Mobile number</Text>
        </View>
        </View>

        {/* bottom */}
        <View>
          <GreenBtn text='Next' onpress={nextClick}/>
          <Text style={{marginTop:10}}>By signing up, you agree to our <Text style={{fontWeight:"700"}}>Terms of Service</Text> and acknowledge that you have read our <Text style={{fontWeight:"700"}}>Privacy Policy</Text>.</Text>
        </View>

      </View>

    </View>
  );
}
