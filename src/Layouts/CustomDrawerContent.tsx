import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Logo from '../images/logo2.png';
import person from '../images/person.png';
import { useNavigation } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/FontAwesome';
import Icons2 from 'react-native-vector-icons/Entypo';
import getStyles from '../components/Home/HomeStyling';
import { useDarkMode } from '../contexts/DarkModeContext';

export const CustomDrawerContent = (props) => {
    
    const { toggleDarkMode, isDarkMode } = useDarkMode();
    const styles = getStyles(isDarkMode);
    
    const [selectedItem, setSelectedItem] = useState(null);
    const navigation = useNavigation();
    

    const drawerItems = [
        { id: 1, icon: 'file-text-o', label: 'Account Summary' },
        { id: 2, icon: 'certificate', label: 'Open Certificates & Deposits' },
        { id: 3, icon: 'credit-card', label: 'Payment Services' },
        { id: 4, icon: 'credit-card', label: 'Cards Services' },
        { id: 5, icon: 'tablet', label: 'Hard Token' },
        { id: 6, icon: 'superpowers', label: 'Offers' },
        { id: 7, icon: 'users', label: 'Customer Services' },
        { id: 8, icon: 'calculator', label: 'Calculators' },
        { id: 9, icon: 'moon-o', label: 'Dark Mode', extraIcon: isDarkMode ? 'toggle-on' : 'toggle-off' }
    ];

    const handlePress = (id) => {
        if (id === 9) {
          toggleDarkMode();
        }
        setSelectedItem(id);
      };

    return (
        <DrawerContentScrollView style={styles.drawer} {...props}>
            <View style={styles.drawerNavbar}>
                <Image source={Logo} />
                <TouchableOpacity style={styles.drawerNavButton}>
                    <Text style={styles.drawerNavButtonText}>Ar</Text>
                </TouchableOpacity>
            </View>
            {drawerItems.map((drawerItem) => (
                <DrawerItem
                    key={drawerItem.id}
                    icon={() =>
                        <TouchableOpacity style={[styles.drawerSideBtn, selectedItem === drawerItem.id ? { backgroundColor: styles.selectedItem.backgroundColor } : {}]}>
                            <Icons name={drawerItem.icon} size={15} color={selectedItem === drawerItem.id ? "#fff" : styles.drawerLabel.color} />
                        </TouchableOpacity>
                    }
                    label={() => (
                        <View style={styles.drawerlastLabel}>
                            <Text style={[styles.drawerLabel, { color: selectedItem === drawerItem.id ? "#fff" : styles.drawerLabel.color }]}>
                                {drawerItem.label}
                            </Text>
                            {drawerItem.extraIcon && (
                                <Icons name={drawerItem.extraIcon} size={30} color={selectedItem === drawerItem.id ? "#fff" : styles.drawerLabel.color} />
                            )}
                        </View>
                    )}
                    onPress={() => handlePress(drawerItem.id)}
                    labelStyle={[styles.drawerLabel, { color: selectedItem === drawerItem.id ? "#fff" : styles.drawerLabel.color }]}
                    style={selectedItem === drawerItem.id ? styles.selectedItem : styles.drawerItem}
                />
            ))}

            <View style={styles.drawerLogoutCont}>
                <TouchableOpacity onPress={() => navigation.navigate("Splash")} style={styles.drawerLogoutButton}>
                    <Icons name='power-off' size={15} color={styles.drawerLogoutText.color} />
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
                <View style={styles.drawerUserChoice}><Icons2 name="dots-three-vertical" size={30} color={styles.drawerLabel.color} /></View>
            </View>
        </DrawerContentScrollView>
    );
}
