import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './ButtonsStyle';
import Icons from 'react-native-vector-icons/Entypo';
import GlobalStyles from '../GlobalStyles';

export default function PassInput({ text, txtStyle = {}, btnStyle = {}, onPasswordChange, warning }) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const changePassword = (x) => {
    setPassword(x);
    onPasswordChange(x);  // Pass the new password value to the parent
  };

  return (
    <View>
        <View style={[styles.passInp, btnStyle,warning?styles.warningCase:{}]}>
      <Icons name="lock" size={24} color={GlobalStyles.colors.grey} style={styles.lockIcon} />
      <TextInput
        style={styles.passinput}
        placeholder="Enter your password"
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={changePassword}
      />
      <TouchableOpacity style={styles.eyeIcon} onPress={toggleShowPassword}>
        <Icons name={showPassword ? 'eye' : 'eye-with-line'} size={24} color={GlobalStyles.colors.grey} />
      </TouchableOpacity>
      <Text style={[styles.passCaption, txtStyle]}>{text}</Text>
    </View>
      {warning && <Text style={styles.warning}>{warning}</Text>}
    </View>
  );
}
