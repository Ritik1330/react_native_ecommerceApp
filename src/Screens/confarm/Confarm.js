import {
  Image,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {Component} from 'react';
import Header from '../../Components/Header';
import styles from './styles.js';
import {useDispatch, useSelector} from 'react-redux';
import {orderInfo,updateQuantity} from '../../redux/Slice/cartSlice';
import navigationStrings from '../../constants/navigationStrings';

export default function Confarm({navigation}) {
  const dispatch = useDispatch();
  const {cartItems} = useSelector(state => state.cart);
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0,
  );

  const shippingCharges = subtotal > 1000 ? 0 : 200;
  const tax = Math.round(subtotal * 0.18);

  const totalPrice = subtotal + tax + shippingCharges;
  const proceedToPayment = () => {
    const data = {
      subtotal,
      shippingCharges,
      tax,
      totalPrice,
    };
    dispatch(orderInfo(data));

    dispatch(orderInfo(data));

    navigation.navigate(navigationStrings.PAYMENT_ORDER)
    // history("/login?redirect=/process/payment");
    // history("/process/payment");
  };
  return (
    <View
      style={{
        flex: 1,
        width: Dimensions.get('window').width,
        // height: Dimensions.get('window').height,
      }}>
      <Header />
      <View style={{flex: 1, width: '80%', alignSelf: 'center'}}>
        <View style={styles.container1}>
          <Text style={styles.heading}>Confarm</Text>
          <Text style={[styles.heading, styles.heading1]}>Order</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            // style={{flex: 1, width: 200, height: 200, backgroundColor: 'PINK'}}
            data={cartItems}
            renderItem={({item, index}) => (
              <View style={styles.order}>
                <Image
                  style={styles.img}
                  source={{
                    uri: item.image,
                  }}
                />
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.ProductPrice}>
                  {item.quantity}*{item.price}
                </Text>
              </View>
            )}
          />

          {/* <View style={styles.order}>
              <Image
                style={styles.img}
                source={{
                  uri: 'https://res.cloudinary.com/dbacwthnv/image/upload/v1688812994/products/bignedmfrq6b4cwfynck.png',
                }}
              />
              <Text style={styles.productName}>Nike</Text>
              <Text style={styles.ProductPrice}>2 * 1000</Text>
            </View>
           */}
        </View>
        <View style={styles.container2}>
          <View style={styles.amauntContainerParent}>
            <View style={styles.amauntContainer}>
              <Text>Subtotal</Text>
              <Text>{`₹ ${subtotal}`}</Text>
            </View>
            <View style={styles.amauntContainer}>
              <Text>Shipping</Text>
              <Text>₹ {shippingCharges}</Text>
            </View>
            <View style={styles.amauntContainer}>
              <Text>Tax</Text>
              <Text>₹ {tax}</Text>
            </View>
            <View style={styles.amauntContainer}>
              <Text>Total</Text>
              <Text>₹ {totalPrice}</Text>
            </View>
            <TouchableOpacity
              onPress={() => proceedToPayment()}
              style={styles.PyBtn}>
              <Text>Payment</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
