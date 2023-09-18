// import { StyleSheet, ViewPropTypes, View, Text } from 'deprecated-react-native-prop-types';
import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { COLORS} from '../../constants'
import { SliderBox } from 'react-native-image-slider-box'

const Carousel = () => {
    const slides =[
        "https://phunugioi.com/wp-content/uploads/2021/08/Anh-Nhat-Ban.jpg",
        "https://phunugioi.com/wp-content/uploads/2021/08/Anh-Nhat-Ban.jpg",
        "https://nhadepso.com/wp-content/uploads/2023/01/khampha-50-anh-anime-thien-nhien-dep-lang-man-lam-hinh-nen_27.jpg"
    ]
  return (
    <View style={styles.carouselContainer}>
      <SliderBox images={slides}
      dotColor= {COLORS.primary}
      inactiveDotColor = {COLORS.secoundary}
      ImageComponentStyle = {{borderRadius: 20, width: "95%", marginTop: 15}}
      autoplay
      circleLoop
      />
    </View>
  )
}

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer:{
    flex: 1,
    alignItems: "center",
  }
})