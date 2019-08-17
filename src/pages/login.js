import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';
// import Svg, {G, Path} from 'react-native-svg '

const { width: WIDTH } = Dimensions.get('window')
class Login extends Component {

  render(){
    return (
       <View>
        <View style={styles.logoContainer}>
          {/* <Image source={logo} style={styles.logo} /> */}
          <Text style={styles.logoText}>Easy Cook</Text>
        </View>
        <View style={styles.inputContainer}>
          {/* <FontAwesome name='users' size={28} color={'rgba(255, 255, 255, 0.7)'} 
          style={styles.inputIcon}/> */}
          <TextInput 
            style={styles.input}
            placeholder={'email'}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underlineColorAndroid='transparent'
          />
        </View>
        <View style={styles.inputContainer}>
        <TextInput 
            style={styles.input}
            secureTextEntry={true}
            placeholder={'contraseña'}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underlineColorAndroid='transparent'
          />
        <TouchableOpacity style={styles.btnEye}>
          <Image  source={this.props.iconView}/>
        </TouchableOpacity>
        </View>
       </View>
    )
  }
};



const styles = StyleSheet.create({
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
  },
  inputContainer: {
    marginTop: 10
  },
  btnEye: {
    position:'absolute',
    top: 8,
    right: 37
  }
});

export default Login;