import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
// import styles from './HomeStyling';
import SliderCard from '../../Layouts/SliderCard';
import ClientsHistory from '../../Layouts/ClientsHistory';
import { useDarkMode } from '../../contexts/DarkModeContext';
import getStyles from './HomeStyling';


export default function HomeCards() {
  const { isDarkMode } = useDarkMode();
  const styles = getStyles(isDarkMode);
  const historystyle = [styles.cardsTitle, styles.historyTitle]
    return (
      <View style={styles.homeCont}>
      <ScrollView style={styles.homeContainer}>
        <Text style={styles.cardsTitle}>Cards</Text>
        <SliderCard/>
        <Text style={historystyle}>History</Text>
        <ClientsHistory/>
    </ScrollView>
    </View>
    );
}

