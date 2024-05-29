import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import GlobalStyles from '../GlobalStyles';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 700);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../images/splash.png')} style={styles.logo} />
      <View style={styles.logo2Container}>
        <Image source={require('../images/logo2.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.bgLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 119,
    height: 136,
  },
  logo2Container: {
    position: 'absolute',
    bottom: 52,
    alignItems: 'center',
  },
});
