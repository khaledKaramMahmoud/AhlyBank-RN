import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './ButtonsStyle';
import GlobalStyles from '../GlobalStyles';

export default function RadioBtn({ label, active }) {
  return (
    <View style={styles.radioButtonsCont}>
      <TouchableOpacity style={styles.radioContainer}>
        <View style={[styles.radioBtn, active ? { backgroundColor: GlobalStyles.colors.green } : {}]}></View>
        <Text style={styles.radioLabel}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}
