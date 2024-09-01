import { ImageSliderType } from '@/data/SliderData';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import SliderItem from './SliderItem';

type SliderProps = {
  itemList: ImageSliderType[];
};

const Slider = ({ itemList }: SliderProps) => {
  return (
    <View>
      <FlatList
        data={itemList}
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
