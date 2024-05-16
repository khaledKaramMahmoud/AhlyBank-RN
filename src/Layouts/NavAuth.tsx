import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './LayoutsStyle';

export default function NavAuth({src,btnStyle = {},btnTxt,btnTxtStyle={},onPress }) {
  return (
    <View style={styles.nav}>
        <TouchableOpacity onPress={onPress} style={[styles.navButton,btnStyle]}>
            <Text style={[styles.navButtonText,btnTxtStyle]}>{btnTxt}</Text>
        </TouchableOpacity>
        <Image source={src} />
    </View>
  );
}
