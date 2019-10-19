import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';

export const ListTask = ({nome}) => {
  const [checked, setChecked] = useState(false)

  const handleChecked = () => setChecked(!checked)
  
  return (
    <TouchableOpacity onPress={handleChecked} style={styles.listItem} >
      <CheckBox
        checkedIcon='check'
        uncheckedIcon='circle-o'
        checked={checked}
      />
      <Text>{nome}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
