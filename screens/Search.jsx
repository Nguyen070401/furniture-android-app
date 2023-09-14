import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS,SIZES } from '../constants'
import styles from './search.style'
import { TextInput } from 'react-native'
import {Feather, Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Search = () => {
const navigation = useNavigation(); 
    
  return (
      <SafeAreaView>
        <View style={styles.searchContainer}>
            <TouchableOpacity>
               <Ionicons 
               name="camera-outline" 
               style={styles.searchIcon} 
               size={SIZES.xLarge}></Ionicons>
            </TouchableOpacity>

            <View style={styles.searchWrapper}>
                <TextInput
                style={styles.searchInput}
                value=""
                onPressIn={() => {}}
                placeholder="What are you looking for"></TextInput>
            </View>
            <View>
                <TouchableOpacity style={styles.searchBtn}>
                    <Feather 
                    name="search" 
                    size={24} 
                    color={COLORS.offwhite}></Feather>
                </TouchableOpacity>
            </View>
        </View>
      </SafeAreaView>
  )
}

export default Search;