import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
const {height, width} = Dimensions.get('window');
const screen = Dimensions.get('screen');
import {
  scale,
  verticalScale,
  textScale,
  moderateScale,
  moderateVerticalScale,
} from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
    // backgroundColor: white,
  },

  buttonRect: {
    // backgroundColor:"pink",
    alignItems: 'center',
    marginTop: verticalScale(40),
  },
});

export default styles;
