import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  SafeAreaView 
} from 'react-native';

import { MenuBottom, EditTask } from '../components'

import { TaskView } from './task/task.view';

export const Main = () => {
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  //open/close modal new task
  const handleOpenModal = () => setModalVisible(true)
  const handleCloseModal = () => setModalVisible(false)

  return (
    <SafeAreaView style={styles.container}>
      <TaskView data={tasks} />
      <EditTask
        visible={modalVisible}
        onClose={handleCloseModal}
      />
      <MenuBottom newTask={handleOpenModal} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
