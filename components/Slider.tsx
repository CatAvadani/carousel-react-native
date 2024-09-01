import { ImageSlider } from '@/data/SliderData';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import SliderItem from './SliderItem';

const Slider = () => {
  return (
    <View>
      <FlatList
        data={ImageSlider}
        renderItem={({ item, index }) => (
          <SliderItem item={item} index={index} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({});
