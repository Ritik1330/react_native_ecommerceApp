import {Dimensions, StatusBar} from 'react-native';
const {width, height} = Dimensions.get('window');
import commonStyles from '../../styles/commonStyles';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';

import React from 'react';
import styles from './styles';
import {
  Image,
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
const Login = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.logincontainer}>
          <Text style={styles.hedingFont}>Sign up</Text>
          <View style={styles.inputparent}>
            <View style={styles.inputparent1}>
              <Image style={styles.inputImage} source={imagePath.user} />
              <TextInput
                style={styles.input}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="name"
              />
            </View>
            <View style={styles.inputparent1}>
              <Image style={styles.inputImage} source={imagePath.email} />
              <TextInput
                style={styles.input}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="Email"
              />
            </View>
            <View style={styles.inputparent1}>
              <Image source={imagePath.lock} style={styles.inputImage} />
              <TextInput
                style={styles.input}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="Password"
              />
            </View>
          </View>

          <TouchableOpacity>
            <View style={styles.buttonRect}>
              <View style={commonStyles.buttonRect}>
                <Text>Sign up</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.goBack()}>
            <View style={styles.buttonRect}>
              <Text>have an account? Sign in </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
