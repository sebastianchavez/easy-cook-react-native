/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  Dimensions
} from 'react-native';

import bgImage from './src/assets/img/fondo.jpg'
import logo from './src/assets/img/logo.png'

import Icon from 'react-native-vector-icons/Ionicons'

const { width: WIDTH } = Dimensions.get('window')
class App extends Component {
  render(){
    return (
     <ImageBackground source={bgImage} style={styles.backgroundContainer}>
       <View style={styles.logoContainer}>
         {/* <Image source={logo} style={styles.logo} /> */}
         <Text style={styles.logoText}>Easy Cook</Text>
       </View>
       <View>
         <Icon name={'ios-person-outline'} size={28} color={'rgba(255, 255, 255, 0.7)'} 
         style={styles.inputIcon}/>
         <TextInput 
          style={styles.input}
          placeholder={'email'}
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid='transparent'
         />
       </View>
     </ImageBackground>
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
    // backgroundColor: '#F5FCFF' 
  },
  logo: {
    width: 120,
    height: 120,
  },
  logoContainer: {
    alignItems: 'center'
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.5
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor:'rgba(0, 0, 0, 0.5)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25
  },
  inputIcon: {
    position:'absolute',
    top: 8,
    left: 37
  }
});

export default App;
