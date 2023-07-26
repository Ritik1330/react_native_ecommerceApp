import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'pink',
    width: '80%',
    alignSelf: 'center',
  },
  orderHead: {
    backgroundColor: 'black',
    height: '6%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:"5%"
  },
  orderHeadLable:{
    color:"white",
    fontSize:20,
    fontWeight:"600",
  },
  order:{
    backgroundColor:"red"
  }
});
