import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../constants'

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: 6
    },
    welcomeTxt: (color,top)=>({
        fontFamily: "bold",
        fontSize: SIZES.xxLarge -12,
        marginTop: -3,
        marginHorizontal: 5,
        color: color,
        width: "100%",
    }),
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: COLORS.secoundary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        height: 50,
        marginTop: 8,
    },
    searchIcon:{
        marginHorizontal: 10,
        color: COLORS.gray,
        marginTop: 12,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.secoundary,
        marginRight: SIZES.small,
        borderRadius: SIZES.small,
    },
    searchInput:{
        fontFamily: "regular",
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.small,
    },
    searchBtn:{
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.primary,
    },

})

export default styles
