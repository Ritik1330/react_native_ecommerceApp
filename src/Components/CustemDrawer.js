import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import imagePath from '../constants/imagePath';
import {ImageBackground, Image} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import colors from '../styles/colors';

const CustemDrawer = props => {
  return (
    <DrawerContentScrollView>
      {/* <View> */}
      <ImageBackground style={styles.bg} source={imagePath.bg}>
        <Image style={styles.userImg} source={imagePath.profile} />
      </ImageBackground>
      {/* </View> */}
      <View style={styles.DrawerListRaper}>
     
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  bg: {
    height: responsiveHeight(25),
    marginTop: -responsiveHeight(1),
    alignItems: 'center',
  },
  userImg: {
    width: responsiveHeight(20),
    height: responsiveHeight(20),
    position: 'absolute',
    bottom: -responsiveHeight(20/ 2),
    borderRadius: responsiveHeight(25 / 2),
    borderWidth: 6,
    borderColor:colors.white
  },
  DrawerListRaper:{
marginTop:responsiveHeight(10)
  }
});

export default CustemDrawer;
