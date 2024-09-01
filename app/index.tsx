import Slider from '@/components/Slider';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Page = () => {
  return (
    <View style={styles.container}>
      <Slider />
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
