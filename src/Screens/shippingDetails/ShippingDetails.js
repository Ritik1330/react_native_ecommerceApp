import {View, Text, TextInput, TouchableOpacity, Image, ScrollView, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Country, State} from 'country-state-city';
import SelectDropdown from 'react-native-select-dropdown';
import Header from '../../Components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {saveShippingInfo} from '../../redux/Slice/cartSlice';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import { SafeAreaView } from 'react-native';
import navigationStrings from '../../constants/navigationStrings';
export default function ShippingDetails({navigation}) {
  const dispatch = useDispatch();
  const {shippingInfo} = useSelector(state => state.cart);

  const [address, setAddress] = useState(shippingInfo?.address);
  const [city, setCity] = useState(shippingInfo?.city);
  const [state, setState] = useState(shippingInfo?.state);
  const [country, setCountry] = useState(shippingInfo?.country);
  const [pinCode, setPinCode] = useState(shippingInfo?.pinCode);
  const [phoneNo, setPhoneNo] = useState(shippingInfo?.phoneNo);
  //dropdawn
  // const [ctr, setctr] = useState([]);

  const countries = {name: [], isoCode: []};
  const states = [];
  const shippingSubmit = e => {
    e.preventDefault();

    if (phoneNo?.length < 10 || phoneNo?.length > 10) {
      showMessage({
        message: 'Phone Number should be 10 digits Long',
        type: 'info',
      });

      return;
    }
    dispatch(
      saveShippingInfo({address, city, state, country, pinCode, phoneNo}),
    );
    showMessage({
      message: 'Shipping Details Saved',
      type: 'info',
    });
    navigation.navigate(navigationStrings.CONFARM)
  };

  const handleTextLayout = () => {
    return 'ritik';
  };
  useEffect(() => {
    // console.log(country);
    // console.log(Country.getAllCountries())
    // console.log(State.getAllStates(country));
    // console.log(State && country && State.getStatesOfCountry(country));
  });
  return (
 
    <View style={{ backgroundColor: '#fff',flex:1,}}>
      <Header />
      {/* <ScrollView
       showsVerticalScrollIndicator={false}
       showsHorizontalScrollIndicator={false}
      > */}
      <View
        style={{
          height: '6%',
          backgroundColor: '#000',
          width: '80%',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, color: '#fff'}}>Shipping Details</Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#000',
          width: '80%',
          alignSelf: 'center',
          marginTop: '4%',
          marginBottom: '8%',
        }}>
        <TextInput
          style={styles.textinput}
          onChangeText={setAddress}
          value={address}
          placeholder="address"
        />
        <TextInput
          style={styles.textinput}
          onChangeText={setCity}
          value={city}
          placeholder="city"
        />
        <TextInput
          style={styles.textinput}
          onChangeText={setPinCode}
          value={pinCode}
          placeholder="Pin code"
        />
        <TextInput
          style={styles.textinput}
          onChangeText={setPhoneNo}
          value={phoneNo}
          placeholder="Phone Number"
        />

        <SelectDropdown
          buttonStyle={styles.customDropDownBtn}
          renderCustomizedButtonChild={(selectedItem, index) => {
            return (
              <View style={styles.customDropDownBtnView}>
                <Text style={styles.link} numberOfLines={1}>
                  {country ? country : 'Choose Country'}
                </Text>
                <Image
                  source={imagePath.drop_dawn}
                  style={styles.IconcustomDropDownBtnView}
                />
              </View>
            );
          }}
          dropdownStyle={styles.dropdawn}
          {...(Country &&
            Country.getAllCountries().map(element => {
              countries.name.push(element.name);
              countries.isoCode.push(element.isoCode);
            }))}
          data={countries.name}
          defaultButtonText="slect country"
          defaultValue={country}
          onSelect={(selectedItem, index) => {
            setCountry(countries.isoCode[index]);
            // console.log(countries.isoCode[index])
            // console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // setCountry(selectedItem);
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // setCountry(item);

            return item;
          }}
        />
        {country && (
          <SelectDropdown
            buttonStyle={styles.customDropDownBtn}
            renderCustomizedButtonChild={(selectedItem, index) => {
              return (
                <View style={styles.customDropDownBtnView}>
                  <Text style={styles.link} numberOfLines={1}>
                    {state ? state : 'Choose State...'}
                  </Text>
                  <Image
                    source={imagePath.drop_dawn}
                    style={styles.IconcustomDropDownBtnView}
                  />
                </View>
              );
            }}
            dropdownStyle={styles.dropdawn}
            {...(State &&
              State.getStatesOfCountry(country).map(element => {
                // console.log(element);
                states.push(element.name);
              }))}
            data={states}
            defaultButtonText="slect country"
            defaultValue={country}
            onSelect={(selectedItem, index) => {
              setState(selectedItem);
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // setState(selectedItem);
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // setState(item);

              return item;
            }}
          />
        )}

        <TouchableOpacity onPress={shippingSubmit} style={styles.submit}>
          <Text>Continue</Text>
        </TouchableOpacity>
      </View>
      {/* </ScrollView> */}
    </View>
 

  );
}
