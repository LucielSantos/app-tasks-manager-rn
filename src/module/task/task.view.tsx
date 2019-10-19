import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList,
  StatusBar,
} from 'react-native';

import { ListTask } from '../../components'
import { tasks } from './mock'

export class TaskView extends Component<any> {  
  render() {
    console.log(this.props.data);
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          John's Tasks
        </Text>
        <FlatList 
          data={this.props.data}
          renderItem={({ item }) => <ListTask nome={item.nome} />}
          keyExtractor={(item) => item._id}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight + 16
  },
  title: { 
    textAlign: 'center', 
    fontSize: 28
  }
});
