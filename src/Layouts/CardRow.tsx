import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './LayoutsStyle';
import call from '../images/call.png';
import moneyIcon from '../images/money.png';
import { useDarkMode } from '../contexts/DarkModeContext';
import getStyles from './LayoutsStyle';

export default function CardRow({img,name,phone,money}) {
  
  const { isDarkMode } = useDarkMode();
  const styles = getStyles(isDarkMode);
  
  return (
    <View style={styles.View2Row}>
           <View><Image style={styles.View2nameImg} source={img}/></View>
          <View>
            <Text style={styles.View2name}>{name}</Text>
            <View style={styles.View2data}>
            <Image source={call}/>
            <Text style={styles.View2txt}>+{phone}</Text>
            </View>
            <View style={styles.View2data}>
            <Image source={moneyIcon}/>
            <Text style={styles.View2txt}>${money}</Text>
            </View>
          </View>
        </View>
  );
}
