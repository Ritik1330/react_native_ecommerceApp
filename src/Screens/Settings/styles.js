import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import colors from '../../styles/colors';
const {width, height} = Dimensions.get('window');

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  container_1: {
    flex: 1,
    backgroundColor: 'pink',
  },
  container_2: {
    flex: 1.5,
    // backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },

  comanBtn: {
    backgroundColor: colors.white,
    width: (width / 100) * 45,
    height: height / 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: (width / 100) * 2.5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  logoutBtn: {
    backgroundColor: colors.themeColor,
    width: width / 1.1,
    height: height / 15,
    alignSelf: 'center',
    borderRadius: height / 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    // position: 'absolute',
    // bottom: '2%',
  },
});
