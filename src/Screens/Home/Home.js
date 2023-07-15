import {View, Text, Button, Image, FlatList, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {productsRequst} from '../../redux/Slice/productsSlice';
import i18n from '../../constants/lang/i18n';
import {useTranslation} from 'react-i18next';
import Product from '../../Components/Product';
import style from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';

export default function Home({navigation}) {
  const {t, i18n} = useTranslation();
  const {products, error} = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsRequst());
    // console.warn(products);
    return () => {};
  }, [dispatch]);

  return (
    <SafeAreaView style={style.container}>
      <View style={style.containerSearch}>
        <TouchableOpacity        onPress={() => navigation.navigate(navigationStrings.SEARCH)}
         style={style.touchableOpacity}>
          <Image style ={style.searchImage}
          source={imagePath.search}/>
          <Text style={style.text}>{t("SEARCH")}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        numColumns={2}
        style={style.containerflatlist}
        data={products}
        renderItem={({item}) => <Product product={item} />}
        keyExtractor={item => item._id}
      />
    </SafeAreaView>
  );
}
