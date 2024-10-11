import {StyleSheet} from 'react-native';
import {Fonts} from '../../constants/Fonts';

const styles = StyleSheet.create({
  rootContainer: {
    justifyContent: 'center',
    padding: 20,
    margin: 20,
    // alignItems : 'center'
  },
  textStyle: {
    fontFamily: Fonts.titleFont,
    fontSize: 18,
    marginTop: 10,
  },
  nestedText: {
    color: 'red',
  },
  btnStyle: {
    // padding : 10,
    marginVertical: 20,
  },
  priorityStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    borderRadius: 5,
    padding: 10,
    alignItems : 'center'
  },
  priorityBorder: {
    borderWidth: 2,
    borderRadius: 8,
  }, 
  modalOuterContainer : {
    
    // flex : 1,
    // height : 100,
    // width : 100,

  },
  modalInnerContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    margin: 20,
    marginVertical: '60%',
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
  },
  modalBtn: {
    marginVertical: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle : {
    height : 30,
    width : 30
  },
  cancelLogoStyle : {
    alignSelf : 'center',
    width : 70,
    height : 70
  }
  // priorityStyle : {
  //   backgroundColor : itemColor, borderRadius : 10, color : 'black'
  // }
});

export default styles;
