import React, { useState, useEffect } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import DrawerComponent from '../../Layouts/Drawer';
import CardRow from '../../Layouts/CardRow';
import nohistory from '../../images/nohistory.png';
// import styles from './BeneStyle';
import { useDarkMode } from '../../contexts/DarkModeContext';
import getStyles from './BeneStyle';

export default function BeneHistory({ route }) {
  const { item } = route.params; // Get the passed beneficiary details
  return (
    <DrawerComponent Component={() => <History beneficiary={item} />} />
  );
}

function History({ beneficiary }) {
  const { isDarkMode } = useDarkMode();
  const styles = getStyles(isDarkMode);
  const [selectedView, setSelectedView] = useState('');
  const historyData = [
    { label: "Flat Rent", date: '15-12-2021', amount: "892.48" },
    { label: "House Fixes", date: '15-12-2021', amount: "892.48" },
    { label: "New Laptop", date: '08-04-2021', amount: "892.48" },
  ];

  useEffect(() => {
    if (historyData.length === 0) {
      setSelectedView('noHistory');
    } else {
      setSelectedView('history');
    }
  }, [historyData]);

  return (
    <ScrollView>
      <View style={styles.beneHistoryCont}>
        <CardRow img={{ uri: beneficiary.img }} name={beneficiary.name} money={beneficiary.money} phone={beneficiary.phone} />
        <Text style={styles.beneHistoryTitle}>Transactions History</Text>
        {selectedView === 'noHistory' ? (
          <View style={styles.benenoHistory}>
            <Image source={nohistory} />
            <Text style={styles.beneHistoryNoHistory}>No History</Text>
            <Text style={styles.beneHistoryDesc}>Not a single transaction was made to this account</Text>
          </View>
        ) : (
          <View>
            {historyData.map((data, index) => (
              <View style={styles.beneHistorycard} key={index}>
                <View>
                  <Text style={styles.beneHistoryname}>{data.label}</Text>
                  <Text>{data.date}</Text>
                </View>
                <Text>${data.amount}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
}
