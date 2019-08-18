/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";


import Login from './src/pages/login.js'
import Home from './src/pages/home.js'


const RoutStack = createStackNavigator(
  {
    Login: Login,
    Home: Home
  },
  {
    initialRouteName: 'Login'
  }
)

const AppContainer = createAppContainer(RoutStack)


class App extends Component {
  
  render(){
    return (
      <AppContainer />   
    )
  }
};

export default App;
