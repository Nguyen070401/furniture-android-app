import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upperRow: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: SIZES.xxLarge,
    width: SIZES.width - 44,
    zIndex: 999
  },
  image: {
    aspectRatio: 1,
    resizeMode: 'cover'
  },
  details: {
    marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    width: SIZES.width,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium
  },
  cartRow: {
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZES.width - 44
  },
  cartBtn: {
    width: SIZES.width * 0.7,
    backgroundColor: COLORS.black,
    padding: SIZES.small,
    borderRadius: SIZES.large,
    marginLeft: 12
  },
  titleRow: {
    marginHorizontal: 20,
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZES.width - 44,
    top: 20
  },
  ratingRow: {
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZES.width - 10,
    top: 5
  },
  rating: {
    top: SIZES.large,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    justifyContent: "center",
    marginHorizontal: SIZES.large
  },
  ratingText: {
    alignItems: "center",
    justifyContent: "center",
    color: COLORS.gray,
    fontFamily: 'bold',
    paddingHorizontal: 3,
    fontSize: 18,
    // marginTop: 10
  },
  title: {
    fontFamily: 'bold',
    fontSize: SIZES.large
  },
  cartTitle: {
    marginLeft: SIZES.small,
    fontFamily: 'bold',
    fontSize: SIZES.medium,
    color: COLORS.lightWhite
  },
  price: {
    paddingHorizontal: 10,
    fontFamily: 'semibold',
    fontSize: SIZES.large
  },
  priceWrapper: {
    backgroundColor: COLORS.secoundary,
    borderRadius: SIZES.large
  },
  addCart: {
    width: 37,
    height: 37,
    borderRadius: 50,
    // margin: SIZES.small,
    backgroundColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 60
  },
  descriptionWrapper: {
    marginTop: SIZES.large * 2,
    marginHorizontal: SIZES.large
  },
  description: {
    fontFamily: 'bold',
    fontSize: SIZES.large - 2
  },
  descText: {
    fontFamily: 'regular',
    fontSize: SIZES.small,
    textAlign: 'justify',
    marginBottom: SIZES.small
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.secoundary,
    marginHorizontal: 12,
    padding: 5,
    borderRadius: SIZES.large
  }
})

export default styles
