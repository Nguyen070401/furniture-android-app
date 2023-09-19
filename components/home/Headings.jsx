import { StyleSheet,Text,View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { COLORS,SIZES } from '../../constants'
import { Ionicons,Fontisto } from '@expo/vector-icons';
import styles from './headings.style'
import { useNavigation } from '@react-navigation/native';

export default function Headings() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Rivals</Text>

        <TouchableOpacity onPress={() => navigation.navigate("ProductListVer2")}>
          <Ionicons name="ios-grid" size={24} color={COLORS.primary} ></Ionicons>
        </TouchableOpacity>
      </View>
    </View>
  )
}
