import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import imagePath from '../constants/imagePath';
import {useNavigation} from '@react-navigation/native';
import navigationStrings from '../constants/navigationStrings';
import {StyleSheet} from 'react-native';
const {default: colors} = require('../../styles/colors');
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {removeToCartAll} from '../redux/Slice/cartSlice';
import { useDispatch } from 'react-redux';
const Header = ({icon}) => {
  const dispatch =useDispatch()
  const [img, setimg] = useState(imagePath.cart1);

  const navigation = useNavigation();
  const navhendaler = () => {
    if (icon == 16) {
      dispatch(removeToCartAll())
      // console.log('delete');
    } else {
    }
    navigation.navigate(navigationStrings.CART);
  };
  useEffect(() => {
    if (icon == 16) {
      setimg(imagePath.delete);
    }
  });
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.headerImage} source={imagePath.back} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navhendaler()}>
        <Image style={[styles.headerImage, styles.search]} source={img} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    // backgroundColor: 'pink',
    height: responsiveHeight(8),
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(5),
    alignItems: 'center',
  },
  headerImage: {
    width: responsiveWidth(6),
    height: responsiveHeight(6),
    resizeMode: 'contain',
  },
});
