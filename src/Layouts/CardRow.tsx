import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './LayoutsStyle';
import call from '../images/call.png';
import moneyIcon from '../images/money.png';

export default function CardRow({img,name,phone,money}) {
  return (
    <View style={styles.View2Row}>
          <View><Image source={img}/></View>
          <View>
            <Text style={styles.View2name}>{name}</Text>
            <View style={styles.View2data}>
            <Image source={call}/>
            <Text>{phone}</Text>
            </View>
            <View style={styles.View2data}>
            <Image source={moneyIcon}/>
            <Text>{money}</Text>
            </View>
          </View>
        </View>
  );
}
