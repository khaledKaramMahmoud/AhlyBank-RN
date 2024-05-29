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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
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
  const isHomeFocused = routeName === 'Home';
  const isTransferFocused = routeName === 'Transfer';
  const isBeneFocused = routeName === 'Beneficiaries' || routeName === 'BeneHistory';
  const isATMsFocused = routeName === 'ATMs';
  const isAirpayFocused = routeName === 'Air Pay';

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: '#007236', 
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon name="home" focused={focused} />
          ),
          tabBarLabelStyle: { color: isHomeFocused ? '#fff' : '#B7B7B7' },
          tabBarItemStyle: { marginHorizontal: 9, borderRadius: 7 },
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Transfer"
        component={Transfer}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon name="send" focused={focused} />
          ),
          tabBarLabelStyle: { color: isTransferFocused ? '#fff' : '#B7B7B7' },
          tabBarItemStyle: { marginHorizontal: 9, borderRadius: 7 },
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Beneficiaries"
        component={Beneficiaries}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon name="users" focused={focused} />
          ),
          tabBarLabelStyle: { color: isBeneFocused ? '#fff' : '#B7B7B7' },
          tabBarItemStyle: { marginHorizontal: 9, borderRadius: 7 },
          headerShown: false
        }}
      />
      <Tab.Screen
        name="ATMs"
        component={Map}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon name="map-marker" focused={focused} />
          ),
          tabBarLabelStyle: { color: isATMsFocused ? '#fff' : '#B7B7B7' },
          tabBarItemStyle: { marginHorizontal: 9, borderRadius: 7 },
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Air Pay"
        component={AirPay}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon name="hand-peace-o" focused={focused} />
          ),
          tabBarLabelStyle: { color: isAirpayFocused ? '#fff' : '#B7B7B7' },
          tabBarItemStyle: { marginHorizontal: 9, borderRadius: 7 },
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}