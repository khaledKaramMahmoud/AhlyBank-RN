import React, { useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import NavAuth from '../../Layouts/NavAuth';
import Icons from 'react-native-vector-icons/FontAwesome';
import logo from '../../images/logo2.png'
import GlobalStyles from '../../GlobalStyles';
import GreenBtn from '../../Inputs/GreenBtn';
import { useDarkMode } from '../../contexts/DarkModeContext';
import getStyles from './TransferStyle';

export default function Transfer({navigation}) {
  const { isDarkMode } = useDarkMode();
  const styles = getStyles(isDarkMode);

  const [transReason, setTransReason] = useState('');

  const backClick = () => {
    navigation.navigate("Home");
  };
  const nextClick = () => {
    navigation.navigate("TransferConfirmCode");
  };
  return (
      <View style={styles.parent}>
        <ScrollView  contentContainerStyle={styles.container}>
          {/* top */}
          <View>
            <NavAuth btnTxt={'<'} src={logo} onPress={backClick}/>
            <Text style={styles.transTitle}>Transfer</Text>
            <View style={styles.transOptionCont}>
                <View>
                  <Text style={styles.transOption}>Type of transfer</Text>
                  <Text style={styles.transOptionDesc}>Between your accounts</Text>
                </View>
              <Icons name="angle-down" size={18} color='#B7B7B7' />
            </View>
            <View style={styles.transOptionCont}>
                <View>
                  <Text style={styles.transOption}>Transfer from</Text>
                  <Text style={styles.transOptionDesc}>042-653214521245   -   $2,145,5874.25</Text>
                </View>
              <Icons name="angle-down" size={18} color='#B7B7B7' />
            </View>
            <View style={styles.transOptionCont}>
                <View>
                  <Text style={styles.transOption}>Transfer to</Text>
                  <Text style={styles.transOptionDesc}>056-32154875423   -   $1,523.48</Text>
                </View>
              <Icons name="angle-down" size={18} color='#B7B7B7' />
            </View>
            <View style={[styles.transOptionCont,{borderColor:GlobalStyles.colors.green}]}>
                <View>
                  <Text style={[styles.transOption,{color:GlobalStyles.colors.green}]}>Amount to transfer</Text>
                  <Text style={styles.transOptionDesc}>$6,580.00</Text>
                </View>
            </View>
            <View style={styles.transOptionCont}>
            <TextInput
                style={styles.TransReasonInp}
                onChangeText={setTransReason}
                value={transReason}
                placeholder="Reason of transfer"
                placeholderTextColor={'#B7B7B7'}
              />
            </View>
          </View>
          {/* bottom */}
          <View>
            <GreenBtn text='Transfer' onpress={nextClick}/>
          </View>
        </ScrollView>  
      </View>
  );
}
