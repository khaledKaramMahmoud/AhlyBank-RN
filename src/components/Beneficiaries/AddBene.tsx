import React, { useState } from 'react';
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import NavAuth from '../../Layouts/NavAuth';
import logo from '../../images/logo2.png'
import styles from './BeneStyle';
import bell from '../../images/bell.png'
import camera from '../../images/cam.png'
import {launchImageLibrary} from 'react-native-image-picker';
import GlobalStyles from '../../GlobalStyles';
import Icons from 'react-native-vector-icons/FontAwesome';
import GreenBtn from '../../Inputs/GreenBtn';

export default function AddBene({navigation}) {  
    const [selectedImage, setSelectedImage] = useState(null);
    const openImagePicker = () => {
      const options = {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 2000,
        maxWidth: 2000,
      };
  
      launchImageLibrary(options, (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('Image picker error: ', response.error);
        } else {
          let imageUri = response.uri || response.assets?.[0]?.uri;
          setSelectedImage(imageUri);
        }
      });
    };

    const [first, setFirst] = useState('');
    const [last, setlast] = useState('');
    const [accountNum, setAccountNum] = useState('');
    const [phNum, setPhNum] = useState('');
    const [email, setEmail] = useState('');
    
    const options = [
      { id: '1', label: '043 - Water Way Mall' },
      { id: '2', label: '044 - City Center' },
      { id: '3', label: '045 - Old Town' },
    ];
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [dropdownVisible, setDropdownVisible] = useState(false);
  
    const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
    };
  
    const selectOption = (option) => {
      setSelectedOption(option);
      setDropdownVisible(false);
    };

  return (
    <ScrollView style={styles.addContainer}>
        <View>
         <NavAuth btnTxt={'<'} src={logo} onPress={()=>navigation.navigate('BeneContent')}/>
         <TouchableOpacity style={styles.addnotification}>
            <Image source={bell}/>
        </TouchableOpacity>
        </View>

        <View style={styles.addImgCont}>
        <TouchableOpacity style={styles.addImg} onPress={openImagePicker}>
            <Image source={camera} />
        </TouchableOpacity>
        </View>

        <View style={styles.nameInps}>
        <View>
        <TextInput
          style={styles.firstNameInp}
          placeholder="Type here"
          onChangeText={setFirst}
          value={first}
          placeholderTextColor={GlobalStyles.colors.black}
        />
        <Text style={styles.inpLabel}>First name</Text>
        </View>
        <View>
        <TextInput
          style={styles.firstNameInp}
          placeholder="Type here"
          onChangeText={setlast}
          value={last}
          placeholderTextColor={GlobalStyles.colors.black}
        />
        <Text style={styles.inpLabel}>Last name</Text>
        </View>
        </View>

        <View>
      <TouchableOpacity style={styles.selectCont} onPress={toggleDropdown}>
        <View>
          <Text style={styles.selectOption}>Bank branch</Text>
          <Text style={styles.selectDesc}>{selectedOption.label}</Text>
        </View>
        <Icons name={dropdownVisible ? "angle-up" : "angle-down"} size={18} color='#B7B7B7' />
      </TouchableOpacity>
      
      {dropdownVisible && (
        <View style={styles.dropdown}>
          <FlatList
            data={options}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.option} onPress={() => selectOption(item)}>
                <Text style={styles.optionText}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>

        <View style={styles.AccountnumInp}>
            <TextInput
                style={styles.AddnumInp}
                onChangeText={setAccountNum}
                value={accountNum}
                placeholder="Enter number"
                placeholderTextColor={'#B7B7B7'}
              />
              <Text style={styles.inpLabel}>Account number </Text>
            </View>

        <View style={styles.AccountnumInp}>
            <TextInput
                style={styles.AddnumInp}
                onChangeText={setPhNum}
                value={phNum}
                placeholder="Enter number"
                placeholderTextColor={'#B7B7B7'}
              />
              <Text style={styles.inpLabel}>Phone number</Text>
            </View>

        <View style={styles.AccountnumInp}>
            <TextInput
                style={styles.AddnumInp}
                onChangeText={setEmail}
                value={email}
                placeholder="Enter Email"
                placeholderTextColor={'#B7B7B7'}
              />
              <Text style={styles.inpLabel}>Email</Text>
            </View>
            <View style={styles.btnCont}><GreenBtn onpress={()=>navigation.navigate('BeneContent')} text={'Add Beneficiar'}/></View>
    </ScrollView>
  );
}
