import { ActivityIndicator,StyleSheet,Text,View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native';
import ProductCardView from './ProductCardView';
import { COLORS,SIZES } from '../../constants'
import { Ionicons,Fontisto } from '@expo/vector-icons';
import useFetch from "../../hook/useFetch"

const ProductList = () => {
  const {data, isLoading, error} = useFetch()

  return (
    <View style={{ marginTop: SIZES.medium }}>
      {isLoading ?(
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary}/>
      ): error ?(
        <Text>Something went wrong?</Text>
      ):(
        <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        numColumns={2}
        renderItem={({ item }) => <ProductCardView item= {item} />}
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
      )}
    </View>
  )
}

export default ProductList;