import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');
export default function OrderCart({order, index}) {
  function formatDate(datestr) {
    var date = new Date(datestr);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return (
      date.getMonth() +
      1 +
      '/' +
      date.getDate() +
      '/' +
      date.getFullYear() +
      '  ' +
      strTime
    );
  }

  return (
    <View style={styles.order}>
      <View style={styles.id}>
        <Text style={styles.textId}>ID - {order?._id}</Text>
      </View>
      <View style={styles.orderInfo}>
        <Text style={{fontWeight: '900', color: 'black'}}>Address - </Text>
        <Text style={styles.orderInfobody}>
          {' '}
          {order.shippingInfo &&
            `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
        </Text>
      </View>
      <View style={styles.orderInfo}>
        <Text style={{fontWeight: '900', color: 'black'}}>Orderd On - </Text>
        <Text>{formatDate(order.createdAt)}</Text>
      </View>
      <View style={styles.orderInfo}>
        <Text style={{fontWeight: '900', color: 'black'}}>Price - </Text>
        <Text>₹ {order.itemsPrise}</Text>
      </View>
      <View style={styles.orderInfo}>
        <Text style={{fontWeight: '900', color: 'black'}}>Status - </Text>
        <Text>{order.orderStatus && order.orderStatus}</Text>
      </View>
      <View style={styles.orderInfo}>
        <Text style={{fontWeight: '900', color: 'black'}}>
          Payment Method -{' '}
        </Text>
        <Text>Online</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  order: {
    width: (width / 100) * 80,
    // height: (height / 100) * 33,
    maxHeight: (height / 100) * 100,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  id: {
    width: '100%',
    height: '15%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  textId: {
    color: 'white',
    fontSize: 15,
    fontWeight: '800',
  },
  orderInfo: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: '3%',
    marginHorizontal: '5%',
    width: '100%',
    // paddingHorizontal:"4%"
  },
  orderInfobody: {
    // backgroundColor:"red",
    width: '70%',
  },
});
