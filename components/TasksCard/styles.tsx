import { StyleSheet } from "react-native";
import { Fonts } from "../../constants/Fonts";

export const styles = StyleSheet.create({
    cardContainer: {
        // borderWidth : 2,
        borderRadius: 10,
        backgroundColor: 'green',
        padding: 10,
        margin : 10,
      },
      textStyle: {
        padding: 5,
        // margin : 10,
        fontSize: 20,
        color: 'white',
        fontFamily: Fonts.titleFont,
      },
      imageStyle: {
        width: 120,
        height: 120,
        borderWidth: 3,
        borderColor: 'black',
        alignSelf: 'center',
        borderRadius: 75,
        // alignItems : 'center',
        padding: 70,
        // justifyContent : 'center'
      },
})