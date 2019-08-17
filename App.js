/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  ImageBackground,
  StyleSheet,
  View
} from 'react-native';
import Login from './src/pages/login.js'
import bgImage from './src/assets/img/fondo.jpg'
import IconView from './src/assets/icon/view_icon.png'
class App extends Component {
  render(){
    return (
     <View source={bgImage} style={styles.backgroundContainer}>
        <Login iconView={IconView}/>
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
