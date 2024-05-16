import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native'; // Import getFocusedRouteNameFromRoute
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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="ConfirmCode" component={ConfirmCode} options={{ headerShown: false }} />
        <Stack.Screen name="SignupPass" component={SignupPass} options={{ headerShown: false }} />
        <Stack.Screen name="FinishSignup" component={FinishSignup} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreens} options={{ headerShown: false }} />
        <Stack.Screen name="HomeCards" component={HomeCards} options={{ headerShown: false }} />
        <Stack.Screen name="Transfer" component={Transfer} options={{ headerShown: false }} />
        <Stack.Screen name="TransferConfirmCode" component={TransferConfirmCode} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function CustomTabIcon({ name, focused }) {
  return (
    <Icons
      name={name}
      color={focused ? '#fff' : '#B7B7B7'}
      size={30}
    />
  );
}

function HomeScreens({ route }) {
  const routeName = getFocusedRouteNameFromRoute(route);
  const isHomeFocused = routeName === 'Home';
  const isTransferFocused = routeName === 'Transfer';

  return (
    <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: '#007236',
    }}
  >
      <Tab.Screen
        name="Home"
        component={Home }
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon name="home" focused={focused} />
          ),
          tabBarLabelStyle: { color: isHomeFocused ? '#fff' : '#B7B7B7' },
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
          tabBarLabelStyle: { color: isTransferFocused ? '#fff' : '#B7B7B7' },
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
          tabBarLabelStyle: { color: isTransferFocused ? '#fff' : '#B7B7B7' },
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Air Pay"
        component={AirPay}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon name="map-marker" focused={focused} />
          ),
          tabBarLabelStyle: { color: isTransferFocused ? '#fff' : '#B7B7B7' },
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}


