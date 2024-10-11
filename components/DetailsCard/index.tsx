import {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {IDetailsCard} from '../../constants/interface';
import styles from './styles';
import Title from '../Title';

const DetailsCard: FC<IDetailsCard> = ({userName, userEmail, userPassword}) => {
  return (
    <View style={styles.cardContainer}>
      <Title>Profile details</Title>
      <Image
        source={require('../../assets/images/profile.png')}
        style={styles.imageStyle}></Image>
      <View>
        <View>
          <Text style={styles.textStyle}>Name : {userName}</Text>
        </View>
        <View>
          <Text style={styles.textStyle}>Email : {userEmail}</Text>
        </View>
        <View>
          <Text style={styles.textStyle}>Password : {userPassword}</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailsCard;
