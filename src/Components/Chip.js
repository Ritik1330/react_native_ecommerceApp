import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import colors from '../styles/colors';
import commonStyles from '../../aa/src/styles/commonStyles';

const Chip = () => {
  return (
    <View style={[styles.chips,commonStyles.shadowStyle]}>
      <Text style={styles.text}>chap</Text>
    </View>
  );
};

export default Chip;

const styles = StyleSheet.create({
  chips: {
    alignSelf: 'flex-start',
    margin: responsiveWidth(1),
    paddingHorizontal: responsiveWidth(2),
    height: responsiveHeight(3),
    borderWidth: 2,
    borderColor:colors.borderColorlight,
    borderRadius: responsiveHeight(3 / 2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    margin: 0,
    padding: 0,
  },
});
