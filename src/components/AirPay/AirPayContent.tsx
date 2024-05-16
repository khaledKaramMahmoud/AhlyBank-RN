import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import SliderCard from '../../Layouts/SliderCard';
import styles from "./AirPayStyling"

export default function AirPayContent() {
  return (
    <ScrollView contentContainerStyle={styles.homeContainer}>
        <Text style={styles.airpayTitle}>Cards</Text>
        <SliderCard/>
    </ScrollView>
  );
}
