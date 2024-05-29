import React, { useContext, useState, useEffect } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, Alert } from 'react-native';
import list1 from '../../images/l1.png';
import list2 from '../../images/l2.png';
import plus from '../../images/plusRounded.png';
import EmptyBene from './EmptyBene';
// import styles from './BeneStyle';
import CardRow from '../../Layouts/CardRow';
import { BeneficiariesContext } from '../../contexts/BeneficiariesContext';
import { useDarkMode } from '../../contexts/DarkModeContext';
import getStyles from './BeneStyle';

export default function BeneContent({ navigation }) {
  const { isDarkMode } = useDarkMode();
  const beneStyle = getStyles(isDarkMode);

  const { beneficiaries } = useContext(BeneficiariesContext);
  const [selectedView, setSelectedView] = useState('');

  useEffect(() => {
    if (beneficiaries.length > 0) {
      setSelectedView('view1');
    }
  }, [beneficiaries]);

  const AddClick = () => {
    navigation.navigate('AddBene');
  };

  const navigateToBeneHistory = (item) => {
    navigation.navigate('BeneHistory', { item });
  };

  const handleViewSelection = (view) => {
    if (beneficiaries.length === 0) {
      Alert.alert('No Beneficiaries', 'Please add beneficiaries before viewing them.');
    } else {
      setSelectedView(view);
    }
  };

  return (
    <ScrollView>
      <View style={beneStyle.beneContainer}>
        <Text style={beneStyle.beneTitle}>Beneficiaries</Text>
        <View style={beneStyle.listViewCont}>
          <View style={beneStyle.listView}>
            <TouchableOpacity onPress={() => handleViewSelection('view1')}>
              <Image style={{ backgroundColor: 'green' }} source={list1} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleViewSelection('view2')}>
              <Image source={list2} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={AddClick} style={beneStyle.listView}>
            <Image source={plus} />
            <Text style={beneStyle.listViewTxt}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={beneStyle.viewContainer}>
        {selectedView === 'view1' && <View1 navigate={navigateToBeneHistory} beneficiaries={beneficiaries} />}
        {selectedView === 'view2' && <View2 navigate={navigateToBeneHistory} beneficiaries={beneficiaries} />}
        {selectedView === '' && (
          <View style={beneStyle.EmptybeneContainer}>
            <EmptyBene n={AddClick} />
          </View>
        )}
      </View>
    </ScrollView>
  );
}

function View1({ navigate, beneficiaries }) {
  
  const { isDarkMode } = useDarkMode();
  const styles = getStyles(isDarkMode);
  return (
    <ScrollView>
      <View style={styles.viewCont}>
        {beneficiaries.map((item, index) => (
          <TouchableOpacity onPress={() => navigate(item)} key={index}>
            <View style={styles.view1Card}>
              <Image style={styles.view1Img} source={{ uri: item.img }} />
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

function View2({ navigate, beneficiaries }) {
  return (
    <ScrollView>
      {beneficiaries.map((item, idx) => (
        <TouchableOpacity key={idx} onPress={() => navigate(item)}>
          <CardRow img={{ uri: item.img }} name={item.name} phone={item.phone} money={item.money} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
