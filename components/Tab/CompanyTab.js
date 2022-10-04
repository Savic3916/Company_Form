import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useState} from 'react'
import Input from '../UI/Input'

export default function CompanyTab() {

  const [inputs, setInputs] = useState({
                                          nameOfCompany: '',
                                          cityOfCompany: '',
                                          stateOfCompany: '',
                                          countryOfCompany: '',
  });

  const changeTextHanler = (objValue, enteredText) => {
    setInputs((currentValues) => {
      return {...currentValues, [objValue]: enteredText};
    })
  };

  return (
    <View style={styles.companyTab}>
      <View style={styles.companyTab}>
          <Text style={styles.text}> Name </Text>
          <Input prop={{placeholder: 'Name of company', value: inputs.nameOfCompany, onChangeText: (e) => changeTextHanler('nameOfCompany', e)}}/>
      </View>
      <View>
          <Text style={styles.text}> Busiess Address </Text>
          <Input prop={{placeholder: 'City', value: inputs.cityOfCompany, onChangeText: (e) => changeTextHanler('cityOfCompany', e)}}/>
      </View>
      <View style={{flexDirection: 'row'}}>
          <Input prop={{placeholder: 'State', value: inputs.stateOfCompany, onChangeText: (e) => changeTextHanler('stateOfCompany', e)}}/>
          <Input prop={{placeholder: 'Country', value: inputs.countryOfCompany, onChangeText: (e) => changeTextHanler('countryOfCompany', e)}}/>
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
          <Button color='#6a0dad' title='Enter'/>
      </View>
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