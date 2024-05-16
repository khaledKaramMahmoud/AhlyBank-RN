import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './ButtonsStyle';
import Icons from 'react-native-vector-icons/Entypo';
import GlobalStyles from '../GlobalStyles';

export default function PassInput({text,txtStyle={},btnStyle={}}) {
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

  return (
    <View style={[styles.passInp,btnStyle]}>
        <Icons name="lock" size={24} color={GlobalStyles.colors.grey} style={styles.lockIcon} />
        <TextInput
            style={styles.passinput}
            placeholder="Enter your password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.eyeIcon} onPress={toggleShowPassword}>
            <Icons name={showPassword ? 'eye' : 'eye-with-line'} size={24} color={GlobalStyles.colors.grey} />
        </TouchableOpacity>
        <Text style={[styles.passCaption,txtStyle]}>{text}</Text>
    </View>
  );
}
