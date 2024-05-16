import React, { useRef } from 'react';
import { View, Text, FlatList, Animated, Image } from 'react-native';
import styles from './LayoutsStyle';

const data = [
  { id: 1, label:'Hala', img: require('../images/p1.png' )},
  { id: 2, label:'Ayman', img: require('../images/p2.png') },
  { id: 3, label:'Soha', img: require('../images/p3.png') },
  { id: 4, label:'Alex', img: require('../images/p4.png' )},
  { id: 5, label:'Mona', img: require('../images/Vector.png' )},
  { id: 6, label:'Ali', img: require('../images/p2.png' )},
  { id: 7, label:'Omar', img: require('../images/register.png' )},
  { id: 8, label:'Moussa', img: require('../images/vector4.png' )},
];

const Slider = () => {
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
            outputRange: [-19, -20, -15],
          });

          return (
            <Animated.View style={{ ...styles.sliderContainer, transform: [{ translateX }] }}>
              <View style={styles.sliderCardContainer}>
                <Image source={item.img} style={styles.sliderImage} />
                <Text style={styles.sliderLabel}>{item.label}</Text>
              </View>
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

export default Slider;
