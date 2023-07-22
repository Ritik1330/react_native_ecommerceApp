import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Swipeable} from 'react-native-gesture-handler';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {addToCart} from '../redux/Slice/cartSlice';

const {width, height} = Dimensions.get('window');
const CartItem = ({
  item,
  index,
  indexs,
  openComponentOpen,
  productDelete,
  increaseQuantity,
  decreaseQuantity,
}) => {
  const ref = useRef();

  const leftSwipe = () => {
    return (
      <View style={styles.leftSwipeMain}>
        <TouchableOpacity
          onPress={() => {
            ref.current.close();
            productDelete(item.productId);
          }}>
          <Image
            source={imagePath.delete}
            style={{width: 50, height: 50, tintColor: 'red'}}
          />
        </TouchableOpacity>
      </View>
    );
  };
  useEffect(() => {
    if (indexs != index) {
      ref.current.close();
    }
  });

  return (
    <Swipeable
      ref={ref}
      renderLeftActions={leftSwipe}
      // renderRightActions={leftSwipe}
      rightThreshold={false}
      onSwipeableOpen={() => {
        openComponentOpen(index);
      }}>
      <View style={styles.ItemContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.itemImage}
            source={{
              uri: item.image,
            }}
          />
        </View>
        <View style={styles.lable}>
          <Text numberOfLines={2} ellipsizeMode="tail">
            {item.name}
          </Text>
          <Text>₹{item.price * item.quantity}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={() => {
              decreaseQuantity(item);
            }}>
            <Text style={styles.quantitybutton}>-</Text>
          </TouchableOpacity>
          <Text>{item.quantity}</Text>
          <TouchableOpacity
            onPress={() => {
              increaseQuantity(item);
            }}>
            <Text style={styles.quantitybutton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Swipeable>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  ItemContainer: {
    width: width,
    height: height / 7,
    // backgroundColor: 'pink',
    marginTop: 10,
    alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row',
  },
  leftSwipeMain: {
    width: width / 3,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
    marginTop: 5,
  },
  imageContainer: {
    width: '33%',
    height: height / 8,
    backgroundColor: colors.themeColor,
    borderTopRightRadius: height / 16,
    borderBottomRightRadius: height / 16,
  },
  itemImage: {
    height: '100%',
    resizeMode: 'contain',
  },
  lable: {
    width: '33%',
    height: height / 8,
    marginLeft: '2%',
  },
  quantityContainer: {
    position: 'absolute',
    right: 10,
    alignItems: 'center',
  },
  quantitybutton: {
    width: responsiveWidth(8),
    padding: responsiveHeight(0.2),
    // paddingHorizontal:responsiveHeight(1),
    marginHorizontal: responsiveWidth(2),
    textAlign: 'center',
    backgroundColor: 'rgba(175, 175, 175, 0.8)',
    borderRadius: 7,
  },
});
