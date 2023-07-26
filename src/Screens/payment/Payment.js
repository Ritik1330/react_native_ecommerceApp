import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import colors from '../../styles/colors';
import RazorpayCheckout from 'react-native-razorpay';
import axios from 'axios';
import {PAYMENT_PROCCESS} from '../../confing/urls';
import imagePath from '../../constants/imagePath';
import {createOrderRequst} from '../../redux/Slice/orderSlice';
import {showMessage} from 'react-native-flash-message';

const Payment = () => {
  const [paymentProccess, setpaymentProccess] = useState(false);
  const {cartItems, orderInfo, shippingInfo} = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrise: orderInfo.subtotal,
    texPrise: orderInfo.tax,
    shippingPrise: orderInfo.shippingCharges,
    totalPrise: orderInfo.totalPrice,
  };

  const paymentSubmit = async () => {
    setpaymentProccess(true);
    const paymentData = {
      amount: Math.round(orderInfo.totalPrice),
    };

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const {data} = await axios.post(PAYMENT_PROCCESS, paymentData, config);

    var options = {
      description: 'Credits towards consultation',
      image:
        'https://res.cloudinary.com/dbacwthnv/image/upload/v1688812994/logo/fxumlknmpn2jti3ep2hh.png',
      currency: 'INR',
      key: 'rzp_test_hfSumcQYoN8tqo',
      amount: data.order.amount,
      order_id: data.order.id,
      name: 'Ecommerce',
      prefill: {
        email: 'ritik@gmail.com',
        contact: '9191919190',
        name: 'Razorpay Software',
      },
      theme: {color: colors.themeColor},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        order.pymentInfo = {
          id: data.razorpay_payment_id,
          status: 'success',
        };
        dispatch(createOrderRequst(order));
        showMessage({
          message: 'Your ourder sucess',
          type: 'info',
        });
        setpaymentProccess(false);
      })
      .catch(error => {
        showMessage({
          message: 'Your ourder faild',
          type: 'info',
        });
        setpaymentProccess(false);

        // // handle failure
        // console.log('error');
        // alert(`Error:| ${error.code} | ${error.description}`);
      });
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.amountlist}>
        <Text>Subtotal</Text>
        <Text>{orderInfo.totalPrice}</Text>
      </View>
      <View style={styles.amountlist}>
        <Text>Shipping</Text>
        <Text>{orderInfo.shippingCharges}</Text>
      </View>
      <View style={styles.amountlist}>
        <Text>Tax</Text>
        <Text>{orderInfo.tax}</Text>
      </View>
      <View style={styles.amountlist}>
        <Text>TotalPrice</Text>
        <Text>{orderInfo.totalPrice}</Text>
      </View>
      <TouchableOpacity
        disabled={paymentProccess}
        onPress={() => paymentSubmit()}
        style={styles.btn}>
        <Text>Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Payment;
const styles = StyleSheet.create({
  amountlist: {
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  btn: {
    backgroundColor: colors.themeColor,
    marginTop: '20%',
    width: '80%',
    height: '8%',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
