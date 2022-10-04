import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

export default function Input({prop}) {
  return (
      <TextInput style={styles.textInput} {...prop}/>
  )
}

const styles = StyleSheet.create({
  textInput: {
    flex:1,
    padding: 8,
    borderRadius: 6,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 12,
    marginTop: 5,
    marginHorizontal: 5,
  }
})