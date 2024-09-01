import { ImageSliderType } from '@/data/SliderData';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

type PaginationProps = {
  items: ImageSliderType[];
  paginationIndex: number;
  scrollX: SharedValue<number>;
};

const { width } = Dimensions.get('screen');

const Pagination = ({ items, paginationIndex, scrollX }: PaginationProps) => {
  return (
    <View style={styles.container}>
      {items.map((_, index) => {
        const pgAnimatedStyle = useAnimatedStyle(() => {
          const dotWidth = interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [8, 20, 8],
            Extrapolation.CLAMP
          );
          return {
            width: dotWidth,
          };
        });
        return (
          <Animated.View
            key={index}
            style={[
              styles.dot,
              pgAnimatedStyle,
              { backgroundColor: paginationIndex === index ? '#222' : '#aaa' },
            ]}
          ></Animated.View>
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    backgroundColor: '#aaa',
    height: 8,
    width: 8,
    marginHorizontal: 2,
    borderRadius: 50,
  },
});
