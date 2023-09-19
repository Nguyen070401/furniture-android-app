import { View,Text } from 'react-native'
import React from 'react'
import styles from './searchTitle.style'
import { COLORS,SIZES } from '../../constants'
import { Ionicons,Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const SearchTitle = ({ item }) => {

    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity style={styles.container}
                onPress={() => navigation.navigate('ProductDetail',{ item })}>
                <View style={styles.image}>
                    <Image source={{ uri: item.imageUrl }} style={styles.productImg} />
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.productTitle}>{item.title}</Text>
                    <Text style={styles.supplier}>{item.supplier}</Text>
                    <Text style={styles.productTitle}>{item.price}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default SearchTitle;