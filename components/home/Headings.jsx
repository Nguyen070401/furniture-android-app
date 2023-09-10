import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { COLORS,SIZES } from '../../constants'
import {Ionicons, Fontisto} from '@expo/vector-icons';
import styles from './headings.style'

export default function Headings() {
  return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>New Rivals</Text>
            
            <TouchableOpacity>
                <Ionicons name="ios-grid" size={24} color={COLORS.primary} ></Ionicons>
            </TouchableOpacity>
        </View>
      </View>
  )
}
