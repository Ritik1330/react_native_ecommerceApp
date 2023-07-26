import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Country, State} from 'country-state-city';
import SelectDropdown from 'react-native-select-dropdown';
import Header from '../../Components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {saveShippingInfo} from '../../redux/Slice/cartSlice';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import {SafeAreaView} from 'react-native';
import navigationStrings from '../../constants/navigationStrings';
export default function CreateProduct({navigation}) {
  const dispatch = useDispatch();
  const {shippingInfo} = useSelector(state => state.cart);


  const [name, setname] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [Stock, setStock] = useState(0);
  const [category, setCategory] = useState('');

  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  //dropdawn
  // const [ctr, setctr] = useState([]);

  const categorys = ['laptop', 'other'];
  const states = [];
  const shippingSubmit = e => {
    e.preventDefault();

    if (Stock < 1 ) {
      showMessage({
        message: 'Stock Shude be gereter then 1',
        type: 'info',
      });

      return;
    }

    showMessage({
      message: 'Shipping Details Saved',
      type: 'info',
    });
    // navigation.navigate(navigationStrings.CONFARM);
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
    <View style={{backgroundColor: '#fff', flex: 1}}>
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
        <Text style={{fontSize: 20, color: '#fff'}}>Create Product</Text>
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
          onChangeText={setname}
          value={name}
          placeholder="name"
        />
        <TextInput
          style={styles.textinput}
          onChangeText={setPrice}
          value={price}
          placeholder="price"
        />
        <TextInput
          style={styles.textinput}
          onChangeText={setDescription}
          value={description}
          placeholder="Product description"
        />
        <TextInput
          style={styles.textinput}
          onChangeText={setStock}
          value={Stock}
          placeholder="stock"
        />

        <SelectDropdown
          buttonStyle={styles.customDropDownBtn}
          renderCustomizedButtonChild={(selectedItem, index) => {
            return (
              <View style={styles.customDropDownBtnView}>
                <Text style={styles.link} numberOfLines={1}>
                  {category ? category : 'Choose categary'}
                </Text>
                <Image
                  source={imagePath.drop_dawn}
                  style={styles.IconcustomDropDownBtnView}
                />
              </View>
            );
          }}
          dropdownStyle={styles.dropdawn}
          data={categorys}
          defaultButtonText="slect country"
          // defaultValue={country}
          onSelect={(selectedItem, index) => {
            setCategory(countries.isoCode[index]);
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
        <View style={styles.imagecontainer}>
          <Image
            style={styles.productImage}
            source={{
              uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
            }}
          />
          <Image
            style={styles.productImage}
            source={{
              uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
            }}
          />
          <Image
            style={styles.productImage}
            source={{
              uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
            }}
          />
        </View>

        <TouchableOpacity onPress={shippingSubmit} style={styles.submit}>
          <Text>Continue</Text>
        </TouchableOpacity>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}
