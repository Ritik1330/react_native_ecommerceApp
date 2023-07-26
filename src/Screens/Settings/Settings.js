import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import navigationStrings from '../../constants/navigationStrings';

export default function Settings({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.container_1}></View>
      <View style={styles.container_2}>
        <TouchableOpacity
          onPress={() => navigation.navigate(navigationStrings.MY_ORDERS)}
          style={styles.comanBtn}>
          <Text>My Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.comanBtn}>
          <Text>My Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.comanBtn}>
          <Text>My Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.comanBtn}>
          <Text>My Order</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.logoutBtn}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
