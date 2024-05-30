import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import GlobalStyles from '../GlobalStyles';
import { useDarkMode } from '../contexts/DarkModeContext';

export default function SplashScreen({ navigation }) {
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 700);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={[styles.container,{backgroundColor: !isDarkMode? GlobalStyles.colors.bgLight:GlobalStyles.colors.dark.bgLight}]}>
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
