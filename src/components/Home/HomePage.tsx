import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import regImage from '../../images/register.png';
import option1 from '../../images/Vector.png';
import option2 from '../../images/Vector2.png';
import option3 from '../../images/Vector3.png';
import option4 from '../../images/vector4.png';
import Slider from '../../Layouts/Slider ';
import ClientsHistory from '../../Layouts/ClientsHistory';
import { useDarkMode } from '../../contexts/DarkModeContext';
import getStyles from './HomeStyling';

export default function HomePage({navigation}) {
  const { isDarkMode } = useDarkMode();
  const styles = getStyles(isDarkMode);
  const options = [
    {icon :option1,background:"#00C97426",label:"Accounts"},
    {icon :option2,background:"#00ADF826",label:"Cards"},
    {icon :option3,background:"#F6A72126",label:"Utilities"},
    {icon :option4,background:"#FF002E26",label:"History"},
  ]
  

  return (
    
    <View style={styles.homeCont}>
    <ScrollView style={styles.homeContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate("HomeCards")}  style={styles.balanceCard}>
            <View style={styles.balanceCardHeader}>
               <Text style={styles.balanceTxt}>Balance</Text>
               <Image style={styles.balanceRegister} source={regImage}/>
            </View>
            <Text style={styles.balanceValue}>$2,374,654.25</Text>
        </TouchableOpacity>

        <View>
          <View style={styles.options}>
            {options.map((op,idx)=>(
              <View key={idx} style={styles.optionsCont}>
                <TouchableOpacity style={[styles.option,{backgroundColor:op.background}]}>
                  <Image source={op.icon}/>
                </TouchableOpacity>
                <Text style={styles.optionTxt}>{op.label}</Text>
              </View>
            ))}
          </View>
        </View>

        <View>
          <View style={styles.sliderCont}>
            <Text style={styles.sliderSendMoney}>Send money</Text>
            <Text>View All</Text>
          </View>
          <Slider/>
        </View>

        <View>
            <View style={styles.sliderCont}>
              <Text style={styles.sliderSendMoney}>History</Text>
              <Text>View All</Text>
            </View>
            <ClientsHistory/>
          </View>
    </ScrollView>
    </View>
  );
}
