import { ImageSliderType } from '@/data/SliderData';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

type SliderItemProps = {
  item: ImageSliderType;
  index: number;
};

const { width } = Dimensions.get('screen');

const SliderItem = ({ item, index }: SliderItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={{ width: 300, height: 500 }} />
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00021d',
    gap: 20,
    width: width,
  },
  text: {
    color: 'white',
  },
});
