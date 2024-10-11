import {StyleSheet} from 'react-native';
import {Fonts} from '../../constants/Fonts';

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    // backgroundColor: 'green',
  },
  buttonInnerContainer: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'green',
    elevation: 10,
  },
  textSize: {
    fontSize: 20,
    fontFamily: Fonts.titleFont,
    // padding: 10,
    color: 'white',
    textAlign: 'center',
  },
});

export default styles;
