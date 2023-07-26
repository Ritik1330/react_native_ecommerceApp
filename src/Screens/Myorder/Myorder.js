import {View, Text, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles.js';
import Header from '../../Components/Header.js';
import OrderCart from '../../Components/OrderCart.js';
import {useDispatch, useSelector} from 'react-redux';
import {myOrdersRequst} from '../../redux/Slice/orderSlice.js';

export default function Myorder() {
  const {orders} = useSelector(state => state.order);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(myOrdersRequst());
  }, [dispatch]);

  return (
    <View style={{flex: 1}}>
      <Header />
      <View style={styles.container}>
        <View style={styles.orderHead}>
          <Text style={styles.orderHeadLable}>Orders</Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={orders}
          renderItem={({item, index}) => (
            <OrderCart order={item} index={index} />
          )}
        />

        {/* <View style={styles.order}>
            
        </View> */}
      </View>
    </View>
  );
}
