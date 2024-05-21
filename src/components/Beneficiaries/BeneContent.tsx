import React, { useState } from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import beneStyle from './BeneStyle'
import list1 from '../../images/l1.png';
import list2 from '../../images/l2.png';
import p1 from '../../images/p1.png';
import p2 from '../../images/p2.png';
import p3 from '../../images/p3.png';
import plus from '../../images/plusRounded.png';
import EmptyBene from './EmptyBene';
import styles from './BeneStyle';
import CardRow from '../../Layouts/CardRow';

export default function BeneContent({navigation}) {
  const [selectedView, setSelectedView] = useState('');
    const AddClick = () => {
        navigation.navigate("AddBene");
      };
      const navigateToBeneHistory = () => {
        navigation.navigate('BeneHistory');
      };
    return (
        <ScrollView>
          <View style={beneStyle.beneContainer}>
            <Text style={beneStyle.beneTitle}>Beneficiaries</Text>
            <View style={beneStyle.listViewCont}>
              <View style={beneStyle.listView}>
                <TouchableOpacity onPress={() => setSelectedView('view1')}>
                  <Image style={{backgroundColor:"green"}} source={list1}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedView('view2')}><Image source={list2}/></TouchableOpacity>
              </View>
              <TouchableOpacity onPress={AddClick} style={beneStyle.listView}>
                  <Image source={plus}/>
                  <Text style={beneStyle.listViewTxt}>Add</Text>
                </TouchableOpacity>
              </View>
          </View>

          <View style={beneStyle.viewContainer}>
          {selectedView === 'view1' && <View1 navigate={navigateToBeneHistory}/>}
          {selectedView === 'view2' && <View2 navigate={navigateToBeneHistory} />}
          {selectedView === '' && (
            <View style={beneStyle.EmptybeneContainer}>
              <EmptyBene n={AddClick} />
            </View>
          )}
          </View>
        </ScrollView>
      );
}

function View1({navigate}) {
  const data=[
    {img:p1,name:"Hala"},
    {img:p2,name:"Sam"},
    {img:p3,name:"Ali"},
    {img:p1,name:"Hala"},
    {img:p2,name:"Sam"},
    {img:p3,name:"Ali"},
    {img:p1,name:"Hala"},
    {img:p2,name:"Sam"},
    {img:p3,name:"Ali"},
    {img:p1,name:"Hala"},
    {img:p2,name:"Sam"},
    {img:p3,name:"Ali"},
  ]
  return (
    <ScrollView>
      <View style={styles.viewCont}>
        {
          data.map((item,index)=>(
            <TouchableOpacity onPress={navigate} key={index}>
              <View style={styles.view1Card}>
              <Image style={styles.view1Img} source={item.img}/>
              <Text>{item.name}</Text>
            </View>
            </TouchableOpacity>
          ))
        }
      </View>
    </ScrollView>
  );
}
function View2({ navigate }) {
  const data = [
    { img: p1, name: 'Jasmine Robert', phone: '+20 123 456 7890', money: "444,444.44" },
    { img: p2, name: 'Ahmad Sami', phone: '+20 123 456 7890', money: "444,444.44" },
    { img: p3, name: 'Mike Spectre', phone: '+20 123 456 7890', money: "444,444.44" },
  ];

  return (
      <ScrollView>
        {data.map((item, idx) => (
          <TouchableOpacity key={idx} onPress={() => navigate(item)}>
            <CardRow img={item.img} name={item.name} phone={item.phone} money={item.money} />
          </TouchableOpacity>
        ))}
      </ScrollView>
  );
}