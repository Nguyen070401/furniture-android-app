import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Ionicons, Fontisto} from '@expo/vector-icons';
import styles from './home.style'

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

        </View>
    </SafeAreaView>
  )
}

export default Home;