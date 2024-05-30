import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NavHome from '../Layouts/NavHome';
import { CustomDrawerContent } from './CustomDrawerContent';
import { useDarkMode } from '../contexts/DarkModeContext';
import GlobalStyles from '../GlobalStyles';

const Drawer = createDrawerNavigator();

export default function DrawerComponent({ Component,navigate }) {
  const { isDarkMode } = useDarkMode();

  return (
    <Drawer.Navigator
      screenOptions={{ 
        headerTransparent: true,
        headerTintColor: isDarkMode?GlobalStyles.colors.dark.black: GlobalStyles.colors.black,
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

