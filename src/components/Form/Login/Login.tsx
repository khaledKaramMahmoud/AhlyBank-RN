import React, { useState } from 'react';
import { TouchableOpacity, TextInput, Text, View, Image, ImageBackground, ScrollView } from 'react-native';
import styles from './LoginStyle';
import Icons from 'react-native-vector-icons/Entypo';
import GreenBtn from '../../../Inputs/GreenBtn';
import PassInput from '../../../Inputs/PassInput';
import NavAuth from '../../../Layouts/NavAuth';
import logo from '../../../images/logo.png';
import { useDarkMode } from '../../../contexts/DarkModeContext';
import getStyles from './LoginStyle';
export default function Login({navigation}) {
    const {isDarkMode } = useDarkMode();
    const styles = getStyles(isDarkMode);

    const [rememberMe, setRememberMe] = useState<boolean>(false);
    
    const toggleRememberMe = () => {
        setRememberMe(!rememberMe);
    };

    const customNavButton = (
        <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>AR</Text>
        </TouchableOpacity>
      );

      const [password, setPassword] = useState('');
      const handlePasswordChange = (newPassword) => {
        setPassword(newPassword);
      };

    return (
        <ScrollView>
            <ImageBackground
            style={styles.parent}
            source={require('../../../images/loginBg.png')}
            resizeMode="cover"
        >

            <View style={styles.container}>
                <NavAuth btnTxt={'AR'} btnStyle={styles.navButton} btnTxtStyle={styles.navButtonText} src={logo}/>
                <View style={styles.headerTxtCont}>
                    <Text style={styles.headerTxt}>Welcome to{'\n'}The National Bank{'\n'}of Egypt</Text>
                </View>
                {/* <FontAwesomeIcon icon={faArrowsTurnToDots} size={50} /> */}
                <View>
                    <View style={styles.userInp}>
                        <Text style={styles.userInpAt}>@</Text>
                        <TextInput
                            style={styles.userinput}
                            placeholder="Enter your username"
                            placeholderTextColor="#fff"
                        />
                        <Text style={styles.userNameCaption}>Username</Text>
                    </View>

                    <PassInput onPasswordChange={handlePasswordChange} text={'Password'}/>

                    <View style={styles.checkCont}>
                        <TouchableOpacity style={styles.checkboxContainer} onPress={toggleRememberMe}>
                            <View style={[styles.checkbox]}>
                                {rememberMe && <Icons name="check" style={styles.checkIcon} />}
                            </View>
                            <Text style={styles.checkLabel}>Remember Me</Text>
                        </TouchableOpacity>

                        <Text style={styles.forgetLabel}>Forgot password?</Text>
                    </View>

                    <View style={styles.loginBtnCont}>
                        <View style={styles.loginBtn}><GreenBtn onpress={()=>navigation.navigate("Home")} text="Log In"/></View>
                        <Image source={require('../../../images/register.png')} />
                    </View>

                    <View style={styles.redirectLinkCont}>
                        <Text style={styles.redirectLink}>Don’t have an account? </Text>
                        <TouchableOpacity onPress={()=>navigation.navigate("Signup")}><Text style={styles.signUpLink}>Sign up</Text></TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerLinks}>Contact Us  <Text style={styles.footerDash}>-</Text>  FAQs  <Text style={styles.footerDash}>-</Text>  Help</Text>
                <Text style={styles.copyRight}>Copyright © NBE 2021 All Rights Reserved - National Bank of Egypt</Text>
            </View>
        </ImageBackground>
        </ScrollView>
    );
}
