import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import HomePage from './HomePage';
import NavHome from '../Layouts/NavHome';
import { CustomDrawerContent } from './CustomDrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerComponent({ Component,navigate }) {
  return (
    <Drawer.Navigator
      screenOptions={{ 
        headerTransparent: true,
        drawerStyle: {
          borderTopRightRadius: 40,
          borderBottomRightRadius: 40,
          width: 330,
        },
      }}
      drawerContent={props => (
        <CustomDrawerContent {...props} />
      )}
    >
      <Drawer.Screen
        name="Home title"
        options={{
          headerTitle: '',
          headerRight: () => <NavHome />,
        }}
      >
        {props => (
          <Component {...props} />
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

