import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import styles from './SignupStyles';
import NavAuth from '../../../Layouts/NavAuth';
import logo from '../../../images/logo.png';
import GlobalStyles from '../../../GlobalStyles';
import GreenBtn from '../../../Inputs/GreenBtn';

export default function FinishSignup({navigation}) {
    const titleStyles = [GlobalStyles.fonts.h4, styles.finishTitle];
    const subtitleStyles = [GlobalStyles.fonts.h6, styles.finishTitle];

    return (
        <View style={styles.finishBackground}>
            <View style={styles.finishLogo}>
                <NavAuth src={logo}/>
            </View>
            <ImageBackground
                style={styles.finishImgBackground}
                source={require('../../../images/finishSignup.png')}
                resizeMode="cover"
            >
                <View style={styles.finishData}>
                    <View>
                        <View style={styles.finishTitleCont}>
                            <Text style={titleStyles}>Congratulations</Text>
                            <Text style={subtitleStyles}>You have successfully registered in NBE online banking service</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={styles.finishBtn}>
                        <Text style={styles.finishBtnTxt}>Finish</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
                
        </View>
    );
}
