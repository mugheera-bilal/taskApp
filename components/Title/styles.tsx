import { StyleSheet } from "react-native";
import { Fonts } from "../../constants/Fonts";

const styles = StyleSheet.create({
    titleStyle : {
        margin : 22,
        padding : 12,
        // borderWidth : 2,
        // borderRadius : 25
    },
    textStyle : {
        fontSize : 28,
        textAlign : 'center',
        fontFamily : Fonts.titleFont
    }
})

export default styles