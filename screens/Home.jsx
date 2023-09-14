import React from 'react'
import { TouchableOpacity, Text, View, ScrollView, FlatList} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Ionicons, Fontisto} from '@expo/vector-icons';
import styles from './home.style'
import Welcome from '../components/home/Welcome';
import Carousel from '../components/home/Carousel';
import Headings from '../components/home/Headings';
import ProductList from '../components/products/ProductList';

const Home = () => {
  return (
    <SafeAreaView>
        <View style={styles.appBarWrapper}>
            <View style={styles.appBar}>
                <Ionicons name='location-outline' size={24}></Ionicons>

                <Text style={styles.location}>Viet Nam</Text>

                <View style={{alignItems: "flex-end"}}>
                    <View style={styles.cartCount}>
                        <Text style={styles.cartNumber}>8</Text>
                    </View>

                    <TouchableOpacity>
                        <Fontisto name="shopping-bag" size={24}></Fontisto>
                    </TouchableOpacity>
                </View>
            </View>
           
            <FlatList
      data={[{key: 'Welcome'}, {key: 'Carousel'}, {key: 'Headings'}, {key: 'ProductList'}]}
      renderItem={({item}) => {
        switch (item.key) {
          case 'Welcome':
            return <Welcome />;
          case 'Carousel':
            return <Carousel />;
          case 'Headings':
            return <Headings />;
          case 'ProductList':
            return <ProductList />;
          default:
            return null;
        }
      }}
    />
        </View> 
    </SafeAreaView>
  )
}

export default Home;