import {ScrollView, Text, View} from 'react-native';
import styles from './styles';
import Title from '../../components/Title';
import DetailsCard from '../../components/DetailsCard';
import InputHolder from '../../components/InputHolder';
import PrimaryButton from '../../components/PrimaryButton';


function HomeScreen({navigation,route} : any) {
    const {name, email, password} = route.params.data

  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Title>Home</Title>
        <View style={styles.inputStyles}>
          <DetailsCard
            userName={name}
            userEmail={email}
            userPassword={password}></DetailsCard>
        </View>
       
        <View style={styles.inputStyles}>
          <PrimaryButton onPressButton={() => navigation.navigate('Task')}>Add Tasks</PrimaryButton>
        </View>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
