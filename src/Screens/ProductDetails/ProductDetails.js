import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import Header from '../../Components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {productRequst} from '../../redux/Slice/productSlice';
import {showMessage} from 'react-native-flash-message';
import { addToCart } from '../../redux/Slice/cartSlice';

const ProductDetails = ({navigation, route}) => {
  const width = Dimensions.get('window').width;
  const dispatch = useDispatch();
  const [productId, setproductId] = useState(route.params.productId);
  const [quantity, setQuqntity] = useState(1);
  const [igloading, setigloading] = useState(false);
  const {product, loading, error} = useSelector(state => state.product);
  const data = [];
  const increaseQuantity = () => {
    // console.log(product.stock )
    // console.log(first)
    if (product.stock >= quantity + 1) {
      setQuqntity(quantity + 1);
    }
  };
  const decreseQuantity = () => {
    if (quantity >= 2) {
      setQuqntity(quantity - 1);
    }
  };
  let addToCartHendaler = () => {
    cartdata={
      product,
      quantity:quantity
    }
    dispatch(addToCart(cartdata));
    showMessage({
      message: 'product add to cart',
      type: 'info',
    });
  };

  useEffect(() => {
    if (productId !== product?._id) {
      dispatch(productRequst(route.params.productId));
      // console.log('product');
      // console.log(product);
    }

    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });

    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: undefined,
      });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.carousel}>
        <Carousel
          loop
          width={width}
          height={responsiveHeight(40)}
          autoPlay={true}
          {...(product.images &&
            product.images.map((item, i) => {
              data.push(item.url);
              // console.log("first")
              // console.log(item.url)
            }))}
          data={data}
          scrollAnimationDuration={1000}
          // onSnapToItem={index => console.log('current index:', index)}
          renderItem={({item, index}) => (
            <View style={styles.carouselView}>
           
              <Image style={styles.carouselImage} source={{uri: item}} />
            </View>
          )}
        />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailsmain}>
          <View style={styles.detailsHead}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles?.productname}>
              {product.name}
            </Text>
            <Text style={styles.productPrice}>{product?.price}</Text>
          </View>
          <View style={styles.discription}>
            <Text
              numberOfLines={8}
              ellipsizeMode="tail"
              style={styles.discriptionText}>
              {product?.description}
            </Text>
          </View>
          <View style={styles.quantity}>
            <Text>quantity</Text>
            <View style={styles.quantityHendlerContainer}>
              <TouchableOpacity onPress={() => decreseQuantity()}>
                <Text style={styles.quantityHendlerButton}>-</Text>
              </TouchableOpacity>

              <Text style={styles.quantityBody}>{quantity}</Text>
              <TouchableOpacity onPress={() => increaseQuantity()}>
                <Text style={styles.quantityHendlerButton}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.addToCart}>
            <TouchableOpacity onPress={() => addToCartHendaler()}>
              <View style={styles.addToCartbody}>
                <Text>Add To Cart</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
