import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './ButtonsStyle';

export default function GreenBtn({text,onpress}) {
  return (
    <>
        <TouchableOpacity onPress={onpress} style={styles.greenBtn}>
            <Text style={styles.greenBtnTxt}>{text}</Text>
        </TouchableOpacity>
        
    </>
  );
}
