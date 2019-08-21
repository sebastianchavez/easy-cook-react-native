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
import Register from './src/pages/register.js'


const RoutStack = createStackNavigator(
  {
    Login: Login,
    Home: Home,
    Register: Register
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
