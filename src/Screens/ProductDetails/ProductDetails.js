import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import styles from './styles';
import imagePath from '../../constants/imagePath';

const ProductDetails = ({navigation, route}) => {
  const width = Dimensions.get('window').width;
  const data = [
    'https://res.cloudinary.com/dbacwthnv/image/upload/v1688812994/products/bignedmfrq6b4cwfynck.png',
    'https://res.cloudinary.com/dbacwthnv/image/upload/v1688812994/products/bignedmfrq6b4cwfynck.png',
    'https://res.cloudinary.com/dbacwthnv/image/upload/v1688812995/products/a47f3io5nbfic11torh9.png',
  ];
  useEffect(() => {
    console.log(route.params.productId);
  }, []);
  useEffect(() => {
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
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.headerImage} source={imagePath.back} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={[styles.headerImage, styles.search]}
            source={imagePath.search}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.carousel}>
        <Carousel
          loop
          width={width}
          height={responsiveHeight(40)}
          autoPlay={true}
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
          <Text  style={styles.productname}>Nike</Text>
          <Text  style={styles.productPrice}>
           $6999
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
