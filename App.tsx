import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/components/Form/Login/Login';
import Signup from './src/components/Form/Signup/Signup';
import ConfirmCode from './src/components/Form/Signup/ConfirmCode';
import SignupPass from './src/components/Form/Signup/SignupPass';
import FinishSignup from './src/components/Form/Signup/FinishSignup';
import Home from './src/components/Home/Home';
import Icons from 'react-native-vector-icons/FontAwesome';
import Transfer from './src/components/Transfer/Transfer';
import HomeCards from './src/components/Home/HomeCards';
import Beneficiaries from './src/components/Beneficiaries/Beneficiaries';
import Map from './src/components/Map/Map';
import AirPay from './src/components/AirPay/AirPay';
import TransferConfirmCode from './src/components/Transfer/TransferConfirmCode';
import AddBene from './src/components/Beneficiaries/AddBene';
import BeneHistory from './src/components/Beneficiaries/BeneHistory';
import SplashScreen from './src/components/SplashScreen';
import { DarkModeProvider } from './src/contexts/DarkModeContext';
import { Text, View } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <DarkModeProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="ConfirmCode" component={ConfirmCode} options={{ headerShown: false }} />
        <Stack.Screen name="SignupPass" component={SignupPass} options={{ headerShown: false }} />
        <Stack.Screen name="FinishSignup" component={FinishSignup} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreens} options={{ headerShown: false }} />
        <Stack.Screen name="HomeCards" component={HomeCards} options={{ headerShown: false }} />
        <Stack.Screen name="Transfer" component={Transfer} options={{ headerShown: false }} />
        <Stack.Screen name="TransferConfirmCode" component={TransferConfirmCode} options={{ headerShown: false }} />
        <Stack.Screen name="AddBene" component={AddBene} options={{ headerShown: false }} />
        <Stack.Screen name="BeneHistory" component={BeneHistory} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </DarkModeProvider>
  );
}

function CustomTabIcon({ name, focused }) {
  return (
    <Icons
      name={name}
      color={focused ? '#fff' : '#B7B7B7'}
      size={30}
      style={{ borderRadius: focused ? 10 : 0 }}
    />
  );
}

function HomeScreens({ route }) {
  const routeName = getFocusedRouteNameFromRoute(route);
  const isHomeFocused = routeName === 'HomeTab';
  const isTransferFocused = routeName === 'TransferTab';
  const isBeneFocused = routeName === 'BeneficiariesTab' || routeName === 'BeneHistory';
  const isATMsFocused = routeName === 'ATMsTab';
  const isAirpayFocused = routeName === 'AirPayTab';

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveBackgroundColor: '#007236',
        tabBarStyle: [{ display: 'flex' }, null],
        tabBarLabelStyle: {color: route.name === routeName ? '#fff' : '#B7B7B7' },
        tabBarItemStyle: { marginHorizontal: 9, borderRadius: 7 },
        tabBarIcon: ({ focused }) => (
          <CustomTabIcon
            name={
              route.name === 'HomeTab' ? 'home' :
              route.name === 'TransferTab' ? 'send' :
              route.name === 'BeneficiariesTab' ? 'users' :
              route.name === 'ATMsTab' ? 'map-marker' :
              route.name === 'AirPayTab' ? 'hand-peace-o' : ''
            }
            focused={focused}
          />
        ),
        tabBarLabel: ({ focused }) => (
          <Text style={{ color: focused ? '#fff' : '#B7B7B7', fontSize: 13,height:'35%' }}>
            {route.name === 'HomeTab' ? 'Home' :
            route.name === 'TransferTab' ? 'Transfer' :
            route.name === 'BeneficiariesTab' ? 'Beneficiaries' :
            route.name === 'ATMsTab' ? 'ATMs' :
            route.name === 'AirPayTab' ? 'Air Pay' : ''}
          </Text>
        ),
        headerShown: false
      })}
    >
      <Tab.Screen name="HomeTab" component={Home} />
      <Tab.Screen name="TransferTab" component={Transfer} />
      <Tab.Screen name="BeneficiariesTab" component={Beneficiaries} />
      <Tab.Screen name="ATMsTab" component={Map} />
      <Tab.Screen name="AirPayTab" component={AirPay} />
    </Tab.Navigator>
  );
}
