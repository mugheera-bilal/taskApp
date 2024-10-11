import {Pressable, Text, View} from 'react-native';
import styles from './styles';
import {FC} from 'react';
import {IPrimaryButton} from '../../constants/interface';

const PrimaryButton: FC<IPrimaryButton> = props => {
  const {children, onPressButton, disabled} = props;

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable style = {styles.buttonInnerContainer}
      onPress={onPressButton}
      disabled= {disabled}
      // style={style}
      android_ripple={{color : 'white'}}>
        <Text style = {styles.textSize}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
