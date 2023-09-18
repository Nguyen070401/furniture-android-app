import { TouchableOpacity,Image,StyleSheet,Text,View } from 'react-native'
import React from 'react'
import styles from './productCardView.style'
import { COLORS,SIZES } from '../../constants'
import { Ionicons,Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProductCardView = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetail")}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://phunugioi.com/wp-content/uploads/2021/08/Anh-Nhat-Ban.jpg",
            }}
            style={styles.image}
          />
        </View>

        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>

          <Text style={styles.supplier} numberOfLines={1}>
            {item.brand}
          </Text>

          <Text style={styles.price}>
            ${item.price}
          </Text>
        </View>

        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle" size={35} color={COLORS.primary}></Ionicons>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default ProductCardView;
