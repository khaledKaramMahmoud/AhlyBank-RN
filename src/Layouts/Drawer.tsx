import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
// import HomePage from './HomePage';
import NavHome from '../Layouts/NavHome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from '../images/logo2.png';
import styles from '../components/Home/HomeStyling'
import Icons from 'react-native-vector-icons/FontAwesome';
import Icons2 from 'react-native-vector-icons/Entypo';
import person from '../images/person.png';
import { useNavigation } from '@react-navigation/native';

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

export function CustomDrawerContent(props) {
    const [selectedItem,setSelectedItem] = useState(null)
    const navigation = useNavigation()
    const drawerItems = [
      { id: 1, icon: 'file-text-o', label: 'Account Summary' },
      { id: 2, icon: 'certificate', label: 'Open Certificates & Deposits' },
      { id: 3, icon: 'credit-card', label: 'Payment Services' },
      { id: 4, icon: 'credit-card', label: 'Cards Services' },
      { id: 5, icon: 'tablet', label: 'Hard Token' },
      { id: 6, icon: 'superpowers', label: 'Offers' },
      { id: 7, icon: 'users', label: 'Customer Services' },
      { id: 8, icon: 'calculator', label: 'Calculators' },
      { id: 9, icon: 'moon-o', label: 'Dark Mode',extraIcon: 'toggle-off'  },
    ];
  
    const handlePress = (id) => {
      setSelectedItem(id);
    };
  
    return (
      <DrawerContentScrollView style={styles.drawer} {...props}>
        <View style={styles.drawerNavbar}>
          <Image source={Logo}/>
          <TouchableOpacity style={styles.drawerNavButton}>
              <Text style={styles.drawerNavButtonText}>Ar</Text>
          </TouchableOpacity>
        </View>
        {drawerItems.map((drawerItem) =>(
          <DrawerItem
            key={drawerItem.id}
            icon={()=>
              <TouchableOpacity style={[styles.drawerSideBtn,selectedItem === drawerItem.id?{backgroundColor:"#338e5e"}:{}]}>
                <Icons name={drawerItem.icon} size={15} color={selectedItem === drawerItem.id?"#fff":"#1B1B1B"} />
              </TouchableOpacity>
            }
            label={() => (
              <View style={styles.drawerlastLabel}>
                <Text style={[styles.drawerLabel, selectedItem === drawerItem.id ? { color: "#fff" } : {}]}>
                  {drawerItem.label}
                </Text>
                {drawerItem.extraIcon && (
                  <Icons name={drawerItem.extraIcon} size={30} color={selectedItem === drawerItem.id ? "#fff" : "#1B1B1B"} />
                )}
              </View>
            )}
            onPress={() => handlePress(drawerItem.id)}
            labelStyle={[styles.drawerLabel,selectedItem === drawerItem.id ? {color:"#fff"}:{}]}
            style={selectedItem === drawerItem.id ? styles.selectedItem : styles.drawerItem}
          />
        ))}
  
        <View style={styles.drawerLogoutCont}>
          <TouchableOpacity onPress={()=>navigation.navigate("Splash")} style={styles.drawerLogoutButton}>
                  <Icons name='power-off' size={15} color='#EB001B'  />
          </TouchableOpacity>
          <Text style={styles.drawerLogoutText}>Logout</Text>
        </View>
  
        <View style={styles.drawerFooter}>
        <View style={styles.drawerUser}>
              <View><Image source={person} /></View>
              <View>
                  <Text style={styles.drawerUserName}>Ahmed Sami</Text>
                  <Text style={styles.drawerUserPhone}>+20 101 131 5412</Text>
              </View>
          </View>
          <View style={styles.drawerUserChoice}><Icons2 name="dots-three-vertical" size={30}/></View>
        </View>
  
      </DrawerContentScrollView>
    );
  }