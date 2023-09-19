import { View,Text } from 'react-native'
import React from 'react'
import styles from './newRivals.style'
import { COLORS,SIZES } from '../constants'
import { Ionicons,Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import ProductList from '../components/products/ProductList';

const NewRivals = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.upperRow}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="chevron-back-circle" size={30}
                            color={COLORS.lightWhite}
                        ></Ionicons>
                    </TouchableOpacity>

                    <Text style={styles.heading}> Products</Text>
                </View>

                <View style={{ marginTop: 50,marginHorizontal: SIZES.large,}}>
                    <ProductList style={styles.listProduct} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default NewRivals;