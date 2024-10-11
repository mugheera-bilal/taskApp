import React, {useState} from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import TaskScreen from './screens/TaskScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RNBootSplash from "react-native-bootsplash";

const Stack = createNativeStackNavigator<any>();

function App(): React.JSX.Element {
  // const [signUp, setSignUp] = useState<boolean>(false);
  // let screen = <SignUpScreen />;

  // // let screen = <HomeScreen />

  // if (signUp) {
  //   screen = <HomeScreen />;
  // }
  

  return (
    // onReady={()=>RNBootSplash.hide()}
    <NavigationContainer  >
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Task" component={TaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;


