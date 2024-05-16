import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './HomeStyling';
import SliderCard from '../../Layouts/SliderCard';
import ClientsHistory from '../../Layouts/ClientsHistory';


export default function HomeCards() {
  const historystyle = [styles.cardsTitle, styles.historyTitle]
    return (
      <ScrollView style={styles.homeContainer}>
        <Text style={styles.cardsTitle}>Cards</Text>
        <SliderCard/>
        <Text style={historystyle}>History</Text>
        <ClientsHistory/>
    </ScrollView>
    );
}

