import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import client1 from '../images/carrefour.png';
import client2 from '../images/jumia.png';
import client3 from '../images/amazon.png';
import hala from '../images/p1.png';
import { useDarkMode } from '../contexts/DarkModeContext';
import getStyles from './LayoutsStyle';

export default function ClientsHistory() {
  const { isDarkMode } = useDarkMode();
  const styles = getStyles(isDarkMode);
    const clients = [
        {icon :client1,title:"Carrefour",date:"5-12-2022",money:"$220.16"},
        {icon :client2,title:"Jumia",date:"5-12-2022",money:"$300.16"},
        {icon :client3,title:"Amazon",date:"5-12-2022",money:"$400.25"},
        {icon :hala,title:"Hala Seliman",date:"5-12-2022",money:"$120.33"},
        {icon :client1,title:"Carrefour",date:"5-12-2022",money:"$220.16"},
        {icon :client2,title:"Jumia",date:"5-12-2022",money:"$300.16"},
        {icon :client3,title:"Amazon",date:"5-12-2022",money:"$400.25"},
        {icon :hala,title:"Hala Seliman",date:"5-12-2022",money:"$120.33"},
      ]

  return (
        <>
        {clients.map((client,idx)=>(
            <View key={idx} style={styles.historyCont}>
            <View style={styles.historyLeftSide}>
                <View>
                  <TouchableOpacity style={[styles.clientLogo]}>
                    <Image source={client.icon}/>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.clientName}>{client.title}</Text>
                  <Text style={styles.clientHistory}>{client.date}</Text>
                </View>
              </View>
              <View>
                 <Text style={styles.historyAmount}>{client.money}</Text>
              </View>
              
            </View>
          ))}
        </>
  );
}
