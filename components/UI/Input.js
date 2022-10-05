import { StyleSheet, View, TextInput } from 'react-native'
import React from 'react'

export default function Input({prop}) {
  return (
      <TextInput style={styles.textInput} {...prop}/>
  )
}

const styles = StyleSheet.create({
  textInput: {
    padding: 3,
    borderRadius: 6,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 13,
    marginVertical: 5,
    marginHorizontal: 5,
  }
})