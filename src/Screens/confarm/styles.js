import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import colors from '../../styles/colors';
const {width, height} = Dimensions.get('window');
export default styles = StyleSheet.create({
  container1: {
    flex: 2,
    // backgroundColor: 'pink',
  },
  container2: {
    flex: .8,
    // backgroundColor:"pink"

  },
  heading: {
    color: 'black',
    fontWeight: '600',
    fontSize: 20,
  },
  heading1: {
    fontWeight: '800',
    marginBottom: '10%',
  },
  order: {
    marginTop: '1%',
    height: height/100*15,

    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:"red"
  },
  img: {
    width: '33%',
    height: '90%',
    resizeMode: 'contain',
    marginLeft: 0,
    paddingLeft: 0,
  },
  productName: {
    width: '33%',
    // height: '90%',
    textAlign: 'center',
  },
  ProductPrice: {
    width: '33%',
    textAlign: 'right',
    // height: '90%',
  },
  //bootem tootal
  amauntContainerParent: {
    position: 'absolute',
    bottom: '2%',
    width: '100%',
    height: 'auto',
    // backgroundColor: 'blue',
  },
  amauntContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  PyBtn: {
    width: '95%',
    height: height / 15,
    borderRadius: 40,
    marginVertical: '5%',
    backgroundColor: colors.themeColor,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
