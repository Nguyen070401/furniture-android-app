import React from 'react'
import { TouchableOpacity, Text, View,ScrollView } from 'react-native'
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
            
        <ScrollView>
             <Welcome></Welcome>
             <Carousel></Carousel>
             <Headings></Headings>
             <ProductList></ProductList>
        </ScrollView>

        </View>
    </SafeAreaView>
  )
}

export default Home;