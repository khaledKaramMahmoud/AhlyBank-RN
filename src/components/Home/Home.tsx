import React from 'react';import 
{ createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeCards from './HomeCards';
import HomePage from './HomePage';
import DrawerComponent from '../../Layouts/Drawer';

const Stack = createNativeStackNavigator();

export default function Home() {
  return (
    <DrawerComponent Component={HomeStack}/>
  );
}
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }}/>
      <Stack.Screen name="HomeCards" component={HomeCards} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}



