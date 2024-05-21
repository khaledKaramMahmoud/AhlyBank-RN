import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerComponent from '../../Layouts/Drawer';
import AirPayContent from './AirPayContent';


export default function AirPay() {
  return (
    <DrawerComponent Component={AirPayContent}/>
  );
}
