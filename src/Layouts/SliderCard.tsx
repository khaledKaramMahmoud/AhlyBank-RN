import React, { useRef } from 'react';
import { View, Text, FlatList, Animated, Image } from 'react-native';
// import styles from './LayoutsStyle';
import VisaCard from './VisaCard';
import greenBG from '../images/greenCard.png'
import redBG from '../images/redCard.png'
import { useDarkMode } from '../contexts/DarkModeContext';
import getStyles from './LayoutsStyle';

const data = [
  { id: 1,bgColor:greenBG, balance :'$125,381.15',number:6506,holder:'AHMAD SAMI AL-SAYED',expiringDate:'08/25',cvv:352},
  { id: 1,bgColor:redBG, balance :'$233,381.15',number:6506,holder:'Ali SAMI AL-SAYED',expiringDate:'08/25',cvv:552},
  { id: 1,bgColor:greenBG, balance :'$444,381.15',number:6506,holder:'Omar SAMI AL-SAYED',expiringDate:'08/25',cvv:352},
];

const SliderCard = () => {
  
  const { isDarkMode } = useDarkMode();
  const styles = getStyles(isDarkMode);
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.sliderContainer}>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id.toString()}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
        renderItem={({ item, index }) => {
          const inputRange = [(index - 1) * 200, index * 200, (index + 1) * 200];
          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [5, 0, -15],
          });

          return (
            <Animated.View style={{ ...styles.VisaSliderContainer, transform: [{ translateX }] }}>
               <VisaCard bgColor={item.bgColor} balance={item.balance} number={item.number} holder={item.holder} expiringDate={item.expiringDate} cvv={item.cvv} />
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

export default SliderCard;
