import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, TextInput } from 'react-native';

import { Input, Icon } from 'react-native-elements'

export const EditTask = ({
  onSave = Function,
  visible = boolean,
  onClose = Function,
  valueTitle = String,
  valueDetails = String,
  onChangeTitle = Function,
  onChangeDetails = Function,
}) => {

  return (
    <Modal
      transparent
      animationType='slide'
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.container} >
        <View style={styles.body} onTouchStart={onClose}></View>
        <View style={styles.wrapper}>
          <TextInput
            style= { styles.input }
            value= { valueTitle }
            onChangeText= { onChangeTitle }
            placeholder='Nova Tarefa'
            multiline
            autoFocus
          />
          <TextInput
            style= { styles.inputDetails }
            value= { valueDetails }
            onChangeText= { onChangeDetails }
            placeholder='Adicionar Detalhes'
            multiline
          />
          <View style={styles.footer}>
            <View style={styles.leftIcons}>
              <TouchableOpacity>
                <Icon
                  name= 'bars' type='font-awesome' color="#5e8ded"
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.calendarIcon}>
                <Icon
                  name='calendar-check-o' type='font-awesome' color="#5e8ded" 
                /> 
              </TouchableOpacity>
            </View>
            
            <TouchableOpacity onPress={onSave} style={styles.rightIcons}>
              <Text style={styles.saveText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  body:{
    width:'100%',
    height: '100%',
    backgroundColor:'rgba(0,0,0,0.4)'
  },
  wrapper: {
    backgroundColor: 'white',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: 'auto',
    padding: 12
  },
  footer:{
    display: 'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop: 20
  },
  leftIcons:{
    flex: 1,
    flexDirection: 'row',
    
  },
  rightIcons:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 'auto',
  },
  calendarIcon:{
    paddingLeft: 20
  },
  saveText:{
    fontWeight: '800',
    fontSize: 16,
    color: '#5e8ded'
  },
  input:{
    fontSize: 16,
    fontWeight: "500"
  },
  inputDetails:{
    color: 'grey'
  }
});
