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
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
    // backgroundColor: white,
  },
  logincontainer: {
    // backgroundColor: 'red',
    width: width - 100,
    height: height / 1.6,
    // marginLeft:100,
    // flex: 1,
    // flexWrap: 'wrap',
    // flexDirection: 'row',
    // width: 150,
    // backgroundColor: 'white',
  },
  hedingFont: {
    fontSize: textScale(25),
    color: colors.textGrey,
    // fontFamily: fontFamily.medium,
  },

  inputparent: {
    alignItems: 'center',
    marginTop: verticalScale(40),
  },
  inputparent1: {
    flexDirection: 'row',
    marginVertical: verticalScale(15),
  },
  input: {
    // flexDirection: 'row',
    // backgroundColor: 'green',
    width: '90%',
    paddingLeft: scale(35),
    paddingBottom: verticalScale(6),
    borderBottomColor: colors.blackOpacity43,
    borderBottomWidth: 1,
    // borderRadius:50
  },
  inputImage: {
    width: scale(30),
    height: verticalScale(25),
    position: 'absolute',
    bottom: verticalScale(10),
    left: scale(-5),
    zIndex: 1,
    tintColor: colors.blackOpacity43,
    aspectRatio: 1,
    resizeMode: 'contain',
    // position:"relative"
  },
  forgate: {
    // backgroundColor:"pink",
    textAlign: 'right',
    marginRight: scale(15),
    marginTop: verticalScale(5),
  },
  forgate: {
    // backgroundColor:"pink",
    textAlign: 'right',
    marginRight: scale(15),
    marginTop: verticalScale(5),
  },
  buttonRect: {
    // backgroundColor:"pink",
    alignItems: 'center',
    marginTop: verticalScale(40),
  },
  orlogin: {
    width: '100%',
    marginTop:25,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  orloginImage: {
    width: scale(75),
    // height: verticalScale(75),
    aspectRatio: 1,
    resizeMode: 'contain',
 
  },
});

export default styles;
