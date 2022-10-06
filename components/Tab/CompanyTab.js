import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useState} from 'react';

import Input from '../UI/Input';
import { useSelector, useDispatch } from 'react-redux';
import { addToForm } from '../../store/redux/form';

export default function CompanyTab() {

  // APP WIDE STATE
  const allSubmittedForm = useSelector((state) => state.form.formData);
  const dispatch = useDispatch();

  console.log(allSubmittedForm);

  const [inputs, setInputs] = useState({
                                        nameOfCompany: {value: '', isValid: true},
                                        cityOfCompany: {value: '', isValid: true},
                                        stateOfCompany: {value: '', isValid: true},
                                        countryOfCompany: {value: '', isValid: true}
  });
  
  const changeTextHandler = (objToChange, enteredText) => {
    setInputs((currentInputs) => {
      return {...currentInputs, [objToChange]: {value: enteredText}}
    })
  };

  // validating users inputs
  const pressHandler = () => {

    const form = {
      nameOfCompany: inputs.nameOfCompany.value,
      cityOfCompany: inputs.cityOfCompany.value,
      stateOfCompany: inputs.stateOfCompany.value,
      countryOfCompany: inputs.countryOfCompany.value,
    };

    // check if this form is valid
    const nameOfCompanyIsValid = form.nameOfCompany.trim().length > 4;
    const cityOfCompanyIsValid = form.cityOfCompany.trim().length > 2;
    const stateOfCompanyIsValid = form.stateOfCompany.trim().length > 2;
    const countryOfCompanyIsValid = form.countryOfCompany.trim().length > 4;

    if(nameOfCompanyIsValid && cityOfCompanyIsValid && stateOfCompanyIsValid && countryOfCompanyIsValid){
      dispatch(addToForm([...allSubmittedForm, {form}]));
      setInputs(() => {
        return {
          nameOfCompany: {value: '', isValid: true},
          cityOfCompany: {value: '', isValid: true},
          stateOfCompany: {value: '', isValid: true},
          countryOfCompany: {value: '', isValid: true},
        }
      });
    }else{
      setInputs((currentInputs) => {
        return {
          nameOfCompany: {value: currentInputs.nameOfCompany.value, isValid: nameOfCompanyIsValid},
          cityOfCompany: {value: currentInputs.cityOfCompany.value, isValid: cityOfCompanyIsValid},
          stateOfCompany: {value: currentInputs.stateOfCompany.value, isValid: stateOfCompanyIsValid},
          countryOfCompany: {value: currentInputs.countryOfCompany.value, isValid: countryOfCompanyIsValid},
        }
      })
    }
  };

  const formIsValid = inputs.cityOfCompany.isValid && 
                      inputs.countryOfCompany.isValid && 
                      inputs.nameOfCompany.isValid && 
                      inputs.stateOfCompany.isValid;

  return (
    <View>
      <View>
          <Text style={styles.text}>  Name  </Text>
          <Input invalid={!inputs.nameOfCompany.isValid} prop={{placeholder: 'Name of company', value: inputs.nameOfCompany.value, onChangeText: (e) => changeTextHandler('nameOfCompany', e)}}/>
      </View>
      <View>
          <Text style={styles.text}>  Busiess Address </Text>
          <Input invalid={!inputs.cityOfCompany.isValid} prop={{placeholder: 'City', value: inputs.cityOfCompany.value, onChangeText: (e) => changeTextHandler('cityOfCompany', e)}}/>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.container}>
          <Input invalid={!inputs.stateOfCompany.isValid} prop={{placeholder: 'State', value: inputs.stateOfCompany.value, onChangeText: (e) => changeTextHandler('stateOfCompany', e)}}/>
        </View>
        <View style={styles.container}>
          <Input invalid={!inputs.countryOfCompany.isValid} prop={{placeholder: 'Country',value: inputs.countryOfCompany.value, onChangeText: (e) => changeTextHandler('countryOfCompany', e)}}/>
        </View>
      </View>
      {!formIsValid && <Text style={styles.errorText}> Check your inputs </Text>}
      <View style={{alignItems: 'center', marginTop: 10}}>
          <View style={styles.button}>
            <Button color='#6a0dad' title='Enter' onPress={pressHandler}/>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  companyTab: {
    marginVertical: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 11,
  },
  button: {
    width: 120,
    backgroundColor: 'green'
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    margin: 4,
    fontSize: 14,
    fontWeight: 'bold',
  },
})