import { View, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS,SIZES } from '../constants'
import styles from './search.style'
import { TextInput } from 'react-native'
import {Feather, Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native-gesture-handler'
import axios from "axios"
import { useState } from 'react'
import SearchTitle from '../components/products/SearchTitle';

const Search = () => {
// const navigation = useNavigation(); 
    
const[searchKey, setSearchKey] = useState('');
const[searchResults, setSearchResults] = useState([]);
console.log(searchResults);

const handleSearch = async() =>{
    try{
        const response = await axios.get('http://192.168.100.93:3000/api/products/search/${searchKey}')
        setSearchResults(response.data)
    } catch(error){
        console.log("Failed to get products when search", error);
    }
};

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
                value= {searchKey}
                onChangeText={setSearchKey}
                placeholder="What are you looking for"></TextInput>
            </View>
            <View>
                <TouchableOpacity style={styles.searchBtn}
                onPress={() => handleSearch()}
                >
                    <Feather 
                    name="search" 
                    size={24} 
                    color={COLORS.offwhite}></Feather>
                </TouchableOpacity>
            </View>
        </View>
        {searchResults.length === 0 ? (
            <View style={{flex: 1}}>
                <Image
                source={{ uri: "https://phunugioi.com/wp-content/uploads/2021/08/Anh-Nhat-Ban.jpg"}}
                style={styles.searchImage}/>
            </View>
        ):(
            <FlatList
            data={searchResults}
            keyExtractor={(item) => item._id}
            renderItem={({item}) => (<SearchTitle item = {item}/>)}
            style={{marginHorizontal: 12}}/>
        )}
      </SafeAreaView>
  )
}

export default Search;