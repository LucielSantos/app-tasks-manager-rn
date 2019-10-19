import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';

export class ListTask extends Component<any> {
  state = {
    checked: false
  }

  handleChecked = () => this.setState({ checked: !this.state.checked})
  
  render() {
    return (
      <TouchableOpacity onPress={this.handleChecked} style={styles.listItem} >
        <CheckBox
          checkedIcon='check'
          uncheckedIcon='circle-o'
          checked={this.state.checked}
        />
        <Text>{this.props.nome}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
