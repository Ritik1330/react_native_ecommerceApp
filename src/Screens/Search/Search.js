import {View, Text, TextInput, Image, FlatList} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import imagePath from '../../constants/imagePath';
import styles from './style';
import Product from '../../Components/Product';
import {useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Chip from '../../Components/Chip';

export default function Search({navigation}) {
  const {products} = useSelector(state => state.products);
  const Search = useRef();
  const [keyword, setkeyword] = useState('');

  useEffect(() => {
    setTimeout(() => {
      Search.current.focus();
    }, 100);
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
          <Image style={styles.back} source={imagePath.back} />
        </TouchableOpacity>
        <TextInput
          ref={Search}
          style={styles.input}
          onChangeText={setkeyword}
          value={keyword}
          placeholder="search for product"
        />
        <TouchableOpacity>
          <Image
            style={[styles.back, styles.search]}
            source={imagePath.search}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.raperContainer}>
        <View style={styles.chip}>
          <TouchableOpacity>
            <Chip />
          </TouchableOpacity>
        </View>
        <FlatList
          numColumns={2}
          style={styles.containerflatlist}
          data={products}
          renderItem={({item}) => <Product product={item} />}
          keyExtractor={item => item._id}
        />
      </View>
    </View>
  );
}
