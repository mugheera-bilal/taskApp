import {
  Image,
  ImageRequireSource,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from './styles';
import InputHolder from '../../components/InputHolder';
import Title from '../../components/Title';
import PrimaryButton from '../../components/PrimaryButton';
import {useEffect, useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {object, string} from 'yup';
import RNbootSplash from 'react-native-bootsplash'

let eyeOpen = require('../../assets/images/toggle.png');
let eyeClose = require('../../assets/images/endToggle.png');

const signUpValidation = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short')
    .max(50, 'Too Long')
    .required('Please Enter Your Name'),
  email: Yup.string().email('Invalid Email'),
  password: Yup.string()
    .min(8, ({min}) => `Password must be atleast ${min} chracters`)
    .required('Enter Appropriate Password')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      'Must contain minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character',
    ),
});

function SignUpScreen({navigation}: any) {
useEffect (()=> {
  const init = async () => {

  }

  init().finally(async ()=> {
    await RNbootSplash.hide({fade : true})
    console.log('bootSplash is finally hidden')

  })
}, [])

  const [toggle, setToggle] = useState<boolean>(true);
  const [imageSwitch, setImageSwitch] = useState<boolean>(true);

  let locationImage: ImageRequireSource = imageSwitch ? eyeOpen : eyeClose;

  function Nav(data: object) {
    console.log(data);
    navigation.navigate('Home', {data});
  }

  function switchEyeImage() {
    setImageSwitch(!imageSwitch);
    setToggle(!toggle)
  }

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={signUpValidation}
      onSubmit={Nav}>
      {({
        values,
        errors,
        touched,
        handleChange,
        setFieldTouched,
        isValid,
        handleSubmit,
      }) => (
        <View style={styles.rootContainer}>
          <View style={styles.titleContainer}>
            <Title>Sign Up</Title>
            <Text>Enter Your Credentials</Text>
          </View>
          <View style={styles.inputContainer}>
            <View>
              <Text style={styles.textStyle}>Name*</Text>
              <InputHolder
                placeholder="Enter Your Name"
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={() => setFieldTouched('name')}
                autoFocus={true}
              />
              {touched.name && errors.name && (
                <Text style={styles.errorText}> {errors.name}</Text>
              )}
            </View>
            <View>
              <Text style={styles.textStyle}>Email*</Text>
              <InputHolder
                placeholder="Enter Your Email"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                autoCapitalize={false}
                keyboardType="email-address"
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
            </View>

            <View>
              <Text style={styles.textStyle}>Password*</Text>
              <View
                style={styles.passwordContainer}>
                <InputHolder
                  placeholder="Enter Your Password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                  autoCapitalize={false}
                  password={toggle}
                  // inlineImageLeft="search_icon"
                />
                <View>
                  {/* <Pressable onPress={toggleHandler}>
                    <Image
                      style={styles.toggleLogoStyle}
                      source={require('../../assets/images/toggle.png')}
                      ></Image>
                  </Pressable> */}

                  <Pressable onPress={switchEyeImage}>
                    <Image
                      style={styles.endToggleLogoStyle}
                      source={locationImage}></Image>
                  </Pressable>
                </View>
              </View>
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>
          </View>

          <View>
            <PrimaryButton
              onPressButton={handleSubmit}
              // disabled = {isValid}
              // style = {[styles.signUpBtn,
              //   {backgroundColor : isValid ? '#69b16b' : 'green'}
              // ]}
            >
              SignUp
            </PrimaryButton>
          </View>
        </View>
      )}
    </Formik>
  );
}

export default SignUpScreen;

// style={styles.buttonContainer}
