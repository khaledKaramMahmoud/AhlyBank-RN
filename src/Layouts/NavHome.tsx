import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import person from '../images/person.png';
import bell from '../images/bell.png';
import styles from './LayoutsStyle';

export default function NavHome() {
    const navBtn =styles.navButton
    const homeNavBtn =styles.homeNavBtn
  return (
    <View style={styles.homeNav}>
        <View style={styles.homeNavLeft}>
            <View><Image source={person} /></View>
            <View>
                <Text>Good morning</Text>
                <Text style={styles.homeNavName}>Ahmed</Text>
            </View>
        </View>
        <View>
            <TouchableOpacity style={[navBtn,homeNavBtn]}>
                <View><Image source={bell} /></View>
            </TouchableOpacity>
        </View>
    </View>
  );
}
