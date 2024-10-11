import {
  FlatList,
  Image,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import InputHolder from '../../components/InputHolder';
import PrimaryButton from '../../components/PrimaryButton';
import TasksCard from '../../components/TasksCard';
import {FC, useState} from 'react';
import {ITaskData} from '../../constants/interface';

const TaskScreen: FC<ITaskData> = () => {
  const [titleVal, setTitleVal] = useState('');
  const [descriptionVal, setDescriptionVal] = useState('');
  const [priorityVal, setPriorityVal] = useState('Select Priority');
  const [data, setData] = useState<ITaskData[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  function modalHandler() {
    setShowModal(true);
  }

  const priorityColors: any = {
    High: 'red',
    Medium: 'yellow',
    Low: '#04ff00',
  };

  const priorityLevels = ['High', 'Medium', 'Low'];

  function endModalhandler(priority: string) {
    setPriorityVal(priority);
    setShowModal(false);
  }

  function cancelModalHandler() {
    setShowModal(false);
  }

  function taskHandler() {
    if (titleVal && descriptionVal && priorityVal) {
      const newEntry: ITaskData = {
        id: Math.random().toString(),
        title: titleVal,
        description: descriptionVal,
        priority: priorityVal,
        priorityColor: priorityColors[priorityVal],
      };
      //   console.log('new data entry', newEntry);

      setData(prevData => {
        const updatedData = [...prevData, newEntry];
        // console.log('Updated Data:', updatedData);
        updatedData.sort(
          (a, b) =>
            priorityLevels.indexOf(a.priority) -
            priorityLevels.indexOf(b.priority),
        ); // Type 'undefined' cannot be used as an index type.
        return updatedData;
      });
      setTitleVal('');
      setDescriptionVal('');
      setPriorityVal('Select Priority');
    } else {
      console.warn('fill the data');
    }
  }

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.textStyle}>
        Title
        <Text style={styles.nestedText}>*</Text>
      </Text>
      <InputHolder
        placeholder="Title"
        value={titleVal}
        onChangeText={setTitleVal}
      />
      <Text style={styles.textStyle}>
        Description
        <Text style={styles.nestedText}>*</Text>
      </Text>
      <InputHolder
        placeholder="Description"
        value={descriptionVal}
        onChangeText={setDescriptionVal}
      />
      <Text style={styles.textStyle}>
        Priority
        <Text style={styles.nestedText}>*</Text>
      </Text>

      <Pressable onPress={modalHandler} style={styles.priorityBorder}>
        <View style={styles.priorityStyle}>
          <Text>{priorityVal}</Text>
          <Image
            style={styles.imageStyle}
            source={require('../../assets/images/dropdown.png')}></Image>
        </View>
        <View style={styles.modalOuterContainer}>
          <Modal visible={showModal} animationType="fade" transparent={true}>
            <View style={styles.modalInnerContainer}>
              <View style={styles.modalBtn}>
                <PrimaryButton onPressButton={() => endModalhandler('High')}>
                  High
                </PrimaryButton>
              </View>
              <View style={styles.modalBtn}>
                <PrimaryButton onPressButton={() => endModalhandler('Medium')}>
                  Medium
                </PrimaryButton>
              </View>
              <View style={styles.modalBtn}>
                <PrimaryButton onPressButton={() => endModalhandler('Low')}>
                  Low
                </PrimaryButton>
              </View>
              <TouchableOpacity onPress={cancelModalHandler}>
                <Image
                  style={styles.cancelLogoStyle}
                  source={require('../../assets/images/cross.png')}></Image>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </Pressable>

      <View style={styles.btnStyle}>
        <PrimaryButton onPressButton={taskHandler}>Save Task</PrimaryButton>
      </View>
      <FlatList
        style={{height: 400}}
        data={data}
        renderItem={({item}) => {
          // console.log('Rendering Task:', item);
          return (
            <TasksCard
              title={item.title}
              description={item.description}
              priority={item.priority}
              itemColor={item.priorityColor}
            />
          );
        }}
        // ListEmptyComponent={}
        keyExtractor={item => item.id} // it is showing no keyExtractor overload
      />
    </View>
  );
};

export default TaskScreen;
