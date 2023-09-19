import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS,SIZES } from '../../constants'
import styles from './welcome.style'
import { TextInput } from 'react-native'
import {Feather, Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
const navigation = useNavigation(); 
    
  return (
      <View>
        <View style={styles.container}>
            <Text style={styles.welcomeTxt(COLORS.black,SIZES.xSmall)} numberOfLines={1}>Find The Most</Text>
            <Text style={styles.welcomeTxt(COLORS.primary,0)} numberOfLines={1}>Luxurious Furniture</Text>
        </View>

        <View style={styles.searchContainer}>
            <TouchableOpacity>
                <Feather name="search" size={24} style={styles.searchIcon}></Feather>
            </TouchableOpacity>

            <View style={styles.searchWrapper}>
                <TextInput
                style={styles.searchInput}
                value=""
                onPressIn={() => navigation.navigate("Search")}
                placeholder="What are you looking for"></TextInput>
            </View>
            <View>
                <TouchableOpacity style={styles.searchBtn}>
                    <Ionicons name="camera-outline" size={SIZES.xLarge} color={COLORS.offwhite}></Ionicons>
                </TouchableOpacity>
            </View>
        </View>
      </View>
  )
}

export default Welcome;