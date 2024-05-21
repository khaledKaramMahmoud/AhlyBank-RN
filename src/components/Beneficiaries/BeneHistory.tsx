import React, { useState, useEffect } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import DrawerComponent from '../../Layouts/Drawer';
import CardRow from '../../Layouts/CardRow';
import p from '../../images/person.png';
import nohistory from '../../images/nohistory.png';
import styles from './BeneStyle';

export default function BeneHistory() {
  return (
    <DrawerComponent Component={History}/>
  );
}

function History(){
  const [selectedView, setSelectedView] = useState('');
  const historyData = [
    {label:"Flat Rent",date:'15-12-2021',amount:"892,48.0"},
    {label:"House Fixes",date:'15-12-2021',amount:"892,48.0"},
    {label:"New Laptop",date:'08-04-2021',amount:"892,48.0"},
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
        <CardRow img={p} name={'Ahmed Sami'} money={'333,250,25'} phone={'01010101010'} />
        <Text style={styles.beneHistoryTitle}>Transactions History</Text>
        {selectedView === 'noHistory' ? (
          <View style={styles.benenoHistory}>
            <Image source={nohistory} />
            <Text style={styles.beneHistoryNoHistory}>No History</Text>
            <Text style={styles.beneHistoryDesc}>Not a single transaction was made to this account</Text>
          </View>
        ) : (
          <View>
            {historyData.map((data) =>(
              <View style={styles.beneHistorycard}>
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
  )
}
