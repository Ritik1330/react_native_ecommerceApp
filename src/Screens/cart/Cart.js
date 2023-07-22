import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../Components/Header';
import styles from './styles';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import CartItem from '../../Components/CartItem';
import navigationStrings from '../../constants/navigationStrings';
import {useNavigation} from '@react-navigation/native';
import imagePath from '../../constants/imagePath';
import {useDispatch, useSelector} from 'react-redux';
import {
  removeToCart,
  addToCart,
  updateQuantity,
} from '../../redux/Slice/cartSlice';

const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  // const navigation = useNavigation()
  const [data, setdata] = useState(cartItems);
  const [indexs, setindexs] = useState();
  const {cartItems} = useSelector(state => state.cart);

  const openComponent = ind => {
    setindexs(ind);
  };
  const increaseQuantity1 = product => {
    let id = product.productId;
    let quantity = product.quantity;

    quantity = quantity + 1;
    if (product.stock <= product.quantity) {
      return;
    }

    dispatch(
      updateQuantity({
        id,
        quantity,
      }),
    );
  };
  const decreaseQuantity = product => {
    let id = product.productId;
    let quantity = product.quantity;

    quantity = quantity - 1;
    if (1 >= product.quantity) {
      return;
    }

    dispatch(
      updateQuantity({
        id,
        quantity,
      }),
    );
  };

  const productDelete = productId => {
    dispatch(removeToCart(productId));
  };

  return (
    <View style={{flex: 1}}>
      <Header icon={imagePath.delete} />
      {/* <View style={styles.container}></View> */}
      <FlatList
        data={cartItems}
        renderItem={({item, index}) => (
          <CartItem
            item={item}
            index={index}
            indexs={indexs}
            openComponentOpen={x => {
              openComponent(x);
            }}
            productDelete={id => {
              productDelete(id);
            }}
            increaseQuantity={product => {
              increaseQuantity1(product);
            }}
            decreaseQuantity={product => {
              decreaseQuantity(product);
            }}
          />
        )}
      />
      <View style={styles.total}>
        <Text>{cartItems.length} Items</Text>
        <Text>{`₹ ${cartItems.reduce(
          (acc, item) => acc + item.quantity * item.price,
          0,
        )}`}</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate(navigationStrings.SHIPPING_INFO)}
        style={styles.chackout}>
        <Text>Chackout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
