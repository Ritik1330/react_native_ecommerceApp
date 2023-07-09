import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import colors from '../styles/colors';
import {Rating} from 'react-native-ratings';
import { home } from "../constants/imagePath";
const {height, width} = Dimensions.get('screen');
export default function Product() {
  return (
    <View style={styles.container}>
      <View style={styles.productImageContainer}>
        <Image
          style={styles.productImage}
          source={{
            uri: 'https://res.cloudinary.com/dbacwthnv/image/upload/v1688812994/products/bignedmfrq6b4cwfynck.png',
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
  );
}

const styles = StyleSheet.create({
  container: {
    height: height / 2,
    width: width / 2,
    borderWidth: 0.5,
    borderColor: colors.borderColor,
    // borderRadius: 50,
  },
  productImageContainer: {
    width: width / 2,
    height: height / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: '95%',
    height: '95%',
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
