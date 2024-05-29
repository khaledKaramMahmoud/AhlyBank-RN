import React, { useState, useContext } from 'react';
import { Alert, FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import NavAuth from '../../Layouts/NavAuth';
import logo from '../../images/logo2.png';
import styles from './BeneStyle';
import bell from '../../images/bell.png';
import camera from '../../images/cam.png';
import { launchImageLibrary } from 'react-native-image-picker';
import GlobalStyles from '../../GlobalStyles';
import Icons from 'react-native-vector-icons/FontAwesome';
import GreenBtn from '../../Inputs/GreenBtn';
import { BeneficiariesContext } from '../../contexts/BeneficiariesContext';
import { useDarkMode } from '../../contexts/DarkModeContext';
import getStyles from './BeneStyle';

export default function AddBene({ navigation }) {
  const { isDarkMode } = useDarkMode();
  const styles = getStyles(isDarkMode);

  const { addBeneficiary } = useContext(BeneficiariesContext);
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
        const imageUri = response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };

  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
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

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleAddBeneficiary = () => {
    if (!first || !last || !accountNum || !phNum || !email || !selectedImage) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    if (phNum.length !== 11 || !/^\d+$/.test(phNum)) {
      Alert.alert('Error', 'Phone number must be 11 digits and contain only numbers');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Error', 'Invalid email format');
      return;
    }

    const newBeneficiary = {
      img: selectedImage,
      name: `${first} ${last}`,
      phone: phNum,
      money: accountNum,
    };
    addBeneficiary(newBeneficiary);
    navigation.navigate('BeneContent');
  };

  return (
    <ScrollView style={styles.addContainer}>
      <View>
        <NavAuth btnTxt={'<'} src={logo} onPress={() => navigation.navigate('BeneContent')} />
        <TouchableOpacity style={styles.addnotification}>
          <Image source={bell} />
        </TouchableOpacity>
      </View>

      <View style={styles.addImgCont}>
        <TouchableOpacity style={styles.addImg} onPress={openImagePicker}>
          {selectedImage ? (
            <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
          ) : (
            <Image source={camera} />
          )}
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
            onChangeText={setLast}
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
          <Icons name={dropdownVisible ? 'angle-up' : 'angle-down'} size={18} color="#B7B7B7" />
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

      <View style={styles.btnCont}>
        <GreenBtn onpress={handleAddBeneficiary} text={'Add Beneficiary'} />
      </View>
    </ScrollView>
  );
}
