import {ActivityIndicator, Dimensions, StatusBar} from 'react-native';
const {width, height} = Dimensions.get('window');
import commonStyles from '../../styles/commonStyles';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import {loginRequst} from '../../redux/Slice/userSlice';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {
  Image,
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const {loading,isAuthecated} = useSelector(state => state.user);

  const loginSubmit = e => {
    dispatch(loginRequst({email, password}));
  };

  // useEffect(() => {
    // console.log(loading);
    // console.log(isAuthecated);
    // console.log("password");
  // }, [email, password]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.logincontainer}>
            <Text style={styles.hedingFont}>Sign in</Text>
            <View style={styles.inputparent}>
              <View style={styles.inputparent1}>
                <Image style={styles.inputImage} source={imagePath.email} />
                <TextInput
                  style={styles.input}
                  onChangeText={e => setemail(e)}
                  value={email}
                  placeholder="Email"
                />
              </View>
              <View style={styles.inputparent1}>
                <Image source={imagePath.lock} style={styles.inputImage} />
                <TextInput
                  style={styles.input}
                  onChangeText={setpassword}
                  value={password}
                  placeholder="Password"
                />
              </View>
            </View>
            <TouchableOpacity>
              <View>
                <Text style={styles.forgate}>Forgate Password?</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => loginSubmit()}>
              <View style={styles.buttonRect}>
                <View style={commonStyles.buttonRect}>
                  <Text>Sign in</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(navigationStrings.SIGN_UP)}>
              <View style={styles.buttonRect}>
                <Text>Don't have an account </Text>
              </View>
            </TouchableOpacity>

            <View style={styles.buttonRect}>
              <Text>-------or-------</Text>
            </View>
            <View style={styles.orlogin}>
              <Image style={styles.orloginImage} source={imagePath.google} />
              <Image style={styles.orloginImage} source={imagePath.facebook} />
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Login;
