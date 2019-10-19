import React, { Component } from 'react';
import { 
  StyleSheet, 
  SafeAreaView 
} from 'react-native';

import { MenuBottom, EditTask } from '../components'

import { TaskView } from './task/task.view';

export class Main extends Component<any> {
  state = {
    modalVisible: true,
    //data new task
    newTask:{
      title: '',
      details: ''
    },
    tasks:[]
  }

  //open/close modal new task
  handleOpenModal = () => this.setState({ modalVisible: true })
  handleCloseModal = () => this.setState({ modalVisible: false })
  //functions new task
  handleNewTask = {
    onChangeTitle: text => {
      this.setState({ newTask: {...this.state.newTask, title: text}})
    },
    onChangeDetails: text => {
      this.setState({ newTask: {...this.state.newTask, details: text}})
    },
    onSaveNewTask: () => {
      this.handleNewTask.handleSaveTask()
      this.handleCloseModal()
    },
    handleSaveTask: () => {
      this.setState({tasks: [...this.state.tasks, {
        id:'123',
        nome: this.state.newTask.title,
        dericao: this.state.newTask.details,
        status: 'aberto',
      }]})
    }
  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TaskView data={this.state.tasks} />
        <EditTask
          visible={this.state.modalVisible}
          onClose={this.handleCloseModal}
          //values new task
          valueTitle={this.state.newTask.title}
          valueDetails={this.state.newTask.details}
          //actions new task
          onChangeTitle={this.handleNewTask.onChangeTitle} 
          onChangeDetails={this.handleNewTask.onChangeDetails} 
          onSave={this.handleNewTask.onSaveNewTask}
        />
        <MenuBottom newTask={this.handleOpenModal} />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
