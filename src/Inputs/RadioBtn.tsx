import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './ButtonsStyle';
import GlobalStyles from '../GlobalStyles';

export default function RadioBtn({label}) {
    const [radio, setRadio] = useState<boolean>(false);

    const toggleRememberMe = () => {
        setRadio(!radio);
    };

  return (
    <View style={styles.radioButtonsCont}>
        <TouchableOpacity style={styles.radioContainer} onPress={toggleRememberMe}>
        <View style={[styles.radioBtn, radio ? { backgroundColor: GlobalStyles.colors.green } : '']}></View>

            <Text style={styles.radioLabel}>{label}</Text>
        </TouchableOpacity>
    </View>
  );
}
