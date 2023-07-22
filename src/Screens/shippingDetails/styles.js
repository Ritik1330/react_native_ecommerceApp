import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../styles/colors';

export default styles = StyleSheet.create({
    textinput:{
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
  dropdawn:{
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
    // backgroundColor:"pink"
  },
  submit:{
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
  }
});
