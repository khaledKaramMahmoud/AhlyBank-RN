// Beneficiaries.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerComponent from '../../Layouts/Drawer';
import BeneContent from './BeneContent';
import AddBene from './AddBene';
import BeneHistory from './BeneHistory';
import { BeneficiariesProvider } from '../../contexts/BeneficiariesContext';

const Stack = createNativeStackNavigator();

export default function Beneficiaries() {
  return (
    <BeneficiariesProvider>
      <Stack.Navigator>
        <Stack.Screen name="BeneContent" component={BeneContentScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddBene" component={AddBene} options={{ headerShown: false }} />
        <Stack.Screen name="BeneHistory" component={BeneHistory} options={{ headerShown: false }} />
      </Stack.Navigator>
    </BeneficiariesProvider>
  );
}

function BeneContentScreen() {
  return (
    <DrawerComponent Component={BeneContent} />
  );
}
