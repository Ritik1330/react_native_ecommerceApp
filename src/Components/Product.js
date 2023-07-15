import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React, {useState} from 'react';
import colors from '../styles/colors';
import {Rating} from 'react-native-ratings';
import {home} from '../constants/imagePath';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import navigationStrings from '../constants/navigationStrings';
const {height, width} = Dimensions.get('screen');

export default function Product(props) {
  const navigation = useNavigation(navigationStrings.PRODUCT_INFO);
  const [product, setproduct] = useState(props.product);
  function ProductDetails(productId) {
    navigation.navigate(navigationStrings.PRODUCT_INFO,{productId})
  }
  return (
    <TouchableOpacity onPress={() => ProductDetails(product._id)}>
      <View style={styles.container}>
        <View style={styles.productImageContainer}>
          <Image
            style={styles.productImage}
            source={{
              uri: product && product.images[0].url,
            }}
          />
        </View>
        <View style={styles.productInfoContainer}>
          <Text numberOfLines={3} ellipsizeMode="tail">
            Redmi Note 12 5G Mystique Blue 4GB RAM 128GB ROM | 1st Phone with
            120Hz Super AMOLED and Snapdragon® 4 Gen 1 | 48MP AI Triple Camera
          </Text>

          <View style={styles.rating}>
            <Text>4.2 </Text>
            <Rating
              ratingImage={home}
              type="custom"
              defaultRating={4}
              ratingCount={5}
              imageSize={20}
              readonly
              startingValue={4.5}
              // tintColor={"black"}
              // tintColor={colors.white}
            />
            <Text>(100)</Text>
          </View>
          <Text style={styles.amount}>₹16000</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height / 2 - 50,
    width: width / 2,
    borderWidth: 0.5,
    borderColor: colors.borderColor,
    // borderRadius: 50,
  },
  productImageContainer: {
    width: width / 2,
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:"red"
  },
  productImage: {
    // flex: 1,
    width: '100%',
    height: 'undefined',
    aspectRatio: 1,
    resizeMode: 'contain',
  },

  productInfoContainer: {
    padding: 10,
  },
  rating: {
    // padding: 10,
    // backgroundColor: 'pink',
    flexDirection: 'row',
    alignItems: 'center',
  },
  amount: {
    padding: 5,
  },
});
