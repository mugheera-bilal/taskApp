import {StyleSheet} from 'react-native';
import {Fonts} from '../../constants/Fonts';

const styles = StyleSheet.create({
  rootContainer: {
    justifyContent: 'center',
    padding: 20,
    margin: 20,
    // alignItems : 'center'
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  inputContainer: {
    // padding : 20,
    marginVertical: 10,
    // borderWidth : 2
  },
  textStyle: {
    fontFamily: Fonts.titleFont,
    fontSize: 18,
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 30,
  },
  errorText : {
    color : 'red'
  },
  signUpBtn : {
    
  }, 
  toggleLogoStyle : {
    // paddingRight : 51,
    // marginRight : 10,
    width : 50,
    height : 50
  },
  endToggleLogoStyle : {
    // backgroundColor : 'red',
    width : 40,
    height : 40,
    resizeMode : 'contain',
    alignItems : 'center'


  },
  passwordContainer : {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
});

export default styles;
