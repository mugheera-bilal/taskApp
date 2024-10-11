import { Text, View } from "react-native"
import { styles } from "./styles"
import { FC } from "react"
import { ITasksCardProps } from "../../constants/interface"

const TasksCard : FC<ITasksCardProps> = ({title, description, priority,itemColor} ) => {
 return (
    <View style={styles.cardContainer}>
      <View>
        <View>
          <Text style={[styles.textStyle ,{backgroundColor : itemColor, borderRadius : 10, color : 'black'}]}>{priority}</Text>
        </View>
        <View>
            <Text style={styles.textStyle}>Title : {title} </Text>
        </View>
        <View>
          <Text style={styles.textStyle}>Description : {description}</Text>
        </View>
      </View>
    </View>
 )
}

export default TasksCard