import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import colors from '../../styles/colors';
const {width, height} = Dimensions.get('window');
export default styles = StyleSheet.create({
  textinput: {
    height: '10%',
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',

    borderWidth: 1,
    marginTop: '8%',
    borderRadius: 5,
    paddingLeft: 10,
  },
  customDropDownBtn: {
    height: '10%',
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',

    borderWidth: 1,
    marginTop: '8%',
    borderRadius: 5,
    paddingLeft: 10,
  },
  customDropDownBtnView: {
    // backgroundColor: 'pink',
    // alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  link: {
    marginLeft: '2%',
    color: 'black',
  },
  IconcustomDropDownBtnView: {
    resizeMode: 'contain',
    width: 20,
    marginRight: '6%',
  },
  dropdawn: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
    // backgroundColor:"pink"
  },
  imagecontainer: {
    backgroundColor: 'red',
    height: '15%',

    width: '90%',
    alignSelf: 'center',

    borderWidth: 1,
    marginTop: '1%',
    borderRadius: 5,
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  productImage: {
    width: '30%',
    height: '90%',
    margin: '1%',
    resizeMode: 'contain',
  },
  submit: {
    height: '10%',
    backgroundColor: colors.themeColor,
    width: '90%',
    alignSelf: 'center',

    borderWidth: 1,
    marginTop: '8%',
    borderRadius: 100,
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '1%',
  },
});
