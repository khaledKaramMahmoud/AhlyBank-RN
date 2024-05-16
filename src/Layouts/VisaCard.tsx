import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import styles from './LayoutsStyle';
import visaLogo from "../images/visa.png"
import visaIco1 from "../images/v.png"
import visaIco2 from "../images/vicaSound.png"

export default function VisaCard({bgColor,balance,number,holder,expiringDate,cvv}) {
  return (
    <View>
    <ImageBackground
            source={bgColor}
            resizeMode="cover"
        >
            <Image style={styles.visaLogo} source={visaLogo}/>
            <Text style={styles.visaBalance}>{balance}</Text>

            <View style={styles.visaSection}>
              <Text style={styles.visaNumber}>****   ****   ****   {number}</Text>
              <View style={styles.visaIcons}>
                <Image style={styles.visaIcon1} source={visaIco1}/>
                <Image source={visaIco2}/>
              </View>
            </View>

            <View style={styles.visaDetails}>
              <View>
                <Text style={styles.visaTitle}>CARD HOLDER</Text>
                <Text style={styles.visaData}>{holder}</Text>
              </View>
              <View>
                <Text style={styles.visaTitle}>EXPIRES</Text>
                <Text style={styles.visaData}>{expiringDate}</Text>
              </View>
              <View>
                <Text style={styles.visaTitle}>CVV</Text>
                <Text style={styles.visaData}>{cvv}</Text>
              </View>
            </View>
        </ImageBackground>
      
    </View>
  );
}
