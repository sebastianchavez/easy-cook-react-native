/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Login from './src/pages/login.js'
import { view, person_outline, lock_outline } from './icons'
import { login, title } from './imgs'
class App extends Component {
  render(){
    return (
     <View style={styles.backgroundContainer}>
        <Login iconView={view} iconPerson={person_outline} iconLock={lock_outline} bgImage={login} title={title}/>
      </View>    
    )
  }
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default App;
