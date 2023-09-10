import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native';
import ProductCardView from './ProductCardView';
import { COLORS,SIZES } from '../../constants'
import {Ionicons, Fontisto} from '@expo/vector-icons';

const ProductList = () => {
const products = [1, 2, 3, 4];
  return (
    <View style={{marginTop: SIZES.medium}}>
      <FlatList
      data={products}
      renderItem={({ item }) => <ProductCardView/>}
      horizontal
      contentContainerStyle={{columnGap: SIZES.medium}}
      />
    </View>
  )
}

export default ProductList;