import React from 'react';
import { ScrollView, Text } from 'react-native';
import DrawerComponent from '../../Layouts/Drawer';

export default function BeneHistory() {
  return (
    <DrawerComponent Component={History}/>
  );
}

function History(){
  return(
    <ScrollView>
      <Text>Xc</Text>
    </ScrollView>
  )
}