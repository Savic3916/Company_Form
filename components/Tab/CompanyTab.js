import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from '../UI/Input'

export default function CompanyTab() {
  return (
    <View style={styles.companyTab}>
      <Text style={styles.text}> Name </Text>
      <Input prop={{placeholder: 'Name of company'}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  companyTab: {
    marginVertical: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 13,
  }
})