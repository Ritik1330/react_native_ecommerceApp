import {View, Text, Button, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {productsRequst} from '../../redux/Slice/productsSlice';
import i18n from '../../constants/lang/i18n';
import {useTranslation} from 'react-i18next';
import Product from '../../Components/Product';
import style from './styles';



export default function Home() {
  const {t, i18n} = useTranslation();
  const {products, error} = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsRequst());
    // console.warn(products);
    return () => {};
  }, [dispatch]);

  return (
    <View style={style.container}>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>

    </View>
  );
}
