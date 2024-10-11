import {Text, TextInput, View} from 'react-native';
import styles from './styles';
import {CInputHolder} from '../../constants/interface';
import {FC} from 'react';

const InputHolder: FC<CInputHolder> = ({placeholder, value, password, onChangeText, ...props}) => {
  return (
    <View style={styles.inputTitle}>
      <TextInput
      allowFontScaling = {false}
        placeholder={placeholder}
        value={value}
        secureTextEntry={password}
        onChangeText={onChangeText}
        {...props}
        
      />
    </View>
  );
};

export default InputHolder;
