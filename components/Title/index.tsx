import { FC } from "react";
import { CInputHolder } from "../../constants/interface";
import { Text, View } from "react-native";
import styles from "./styles";

const Title : FC<CInputHolder> = ({children}) => {
    return(
        <View style = {styles.titleStyle}>
            <Text style = {styles.textStyle}>{children}</Text>
        </View>
    )

}

export default Title