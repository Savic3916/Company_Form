import { StyleSheet, View, ImageBackground } from 'react-native'
import React from 'react';

import Form from './components/Form';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

export default function App() {
  return (
    <Provider store={store}>
        <View style={styles.container}>
            <ImageBackground 
                  source={require('./assets/image/background.jpg')} 
                  resizeMode={'cover'} 
                  style={styles.imageBackground}
            >
                <Form/>
            </ImageBackground>
        </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    opacity: 0.7,
    alignItems: 'center',
  }
})