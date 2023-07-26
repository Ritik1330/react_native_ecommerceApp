import {ActivityIndicator, Dimensions, StatusBar} from 'react-native';
const {width, height} = Dimensions.get('window');
import commonStyles from '../../styles/commonStyles';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import {logoutRequest} from '../../redux/Slice/userSlice';
import React, {useEffect, useState} from 'react';
import styles from './styles.js';
import {Image, View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const SignOut = ({navigation}) => {
  const dispatch = useDispatch();

  const loginSubmit = e => {
    dispatch(logoutRequest());
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => loginSubmit()}>
        <View style={styles.buttonRect}>
          <View style={commonStyles.buttonRect}>
            <Text>Sign out</Text>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignOut;
