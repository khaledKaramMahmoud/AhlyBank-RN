import React from 'react';
import empty from '../../images/emptyBene.png'
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import plus from '../../images/lightPlus.png';
import { useDarkMode } from '../../contexts/DarkModeContext';
import getStyles from './BeneStyle';

export default function EmptyBene({n}) {
  
  const { isDarkMode } = useDarkMode();
  const styles = getStyles(isDarkMode);
  return (
    <View style={styles.emptyBene}>
      <Image source={empty}/>
      <Text style={styles.emptyBeneTxt}>No Beneficiaries</Text>
      <Text style={styles.emptyBeneDesc}>You don’t have beneficiaries, add some so you can send money</Text>
      <TouchableOpacity onPress={n} style={[styles.listView,styles.GreenlistView]}>
        <Image source={plus}/>
        <Text style={[styles.listViewTxt,styles.GreenlistViewTxt]}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}
