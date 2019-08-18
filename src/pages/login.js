import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
  ToastAndroid
} from 'react-native';

// dependencias
import axios from 'axios'

// recursos locales
import { apiUrl } from '../environment'
import { view, person_outline, lock_outline } from '../icons'
import { login, title } from '../imgs'

const { width: WIDTH } = Dimensions.get('window')

const Toast = (props) => {
  if (props.visible) {
    ToastAndroid.showWithGravityAndOffset(
      props.message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
    return null;
  }
  return null;
};



class Login extends Component {
  static navigationOptions = {
    header: null
  }

  constructor() {
    super()
    this.state = {
      showPassword: true,
      press: false,
      emailValidate: true,
      passwordValidate: true,
      valid:false,
      visible: false,
      msg: '',
      email: '',
      password: ''
    }
  }

  handleButtonPress = () => {
    this.setState(
      {
        visible: true,
      },
      () => {
        this.hideToast();
      },
    );
  };

  hideToast = () => {
    this.setState({
      visible: false,
    });
  };


  login = () => {
    if(this.state.valid == true){
      if(this.state.emailValidate == false || this.state.email == ''){
        this.setState({
          msg: 'Email inválido',
          visible: true
        })
        return
      } 
     if(this.state.passwordValidate == false || this.state.password == ''){
        this.setState({
          visible: true,
          msg: 'Contraseña debe tener minimo 6 caracteres'
        })
        return
      } else {
        this.props.navigation.navigate('Home')
      }
    }
  }

  showPass() {
    if (this.state.press == false) {
      this.setState({
        showPassword: false,
        press: true
      })
    } else
      this.setState({
        showPassword: true,
        press: false
      })
  }

  validate(text, type) {
    this.setState({
      valid:true
    })
    if (type == 'email') {
      var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;
      if (!b.test(text)) {
        this.setState({
          emailValidate: false
        })
        return
      } else {
        this.setState({
          emailValidate: true,
          email: text.toLowwerCase
        })
      }
    } else if (type == 'password') {
      if(text.length < 6){
        this.setState({
          passwordValidate: false
        })
      } else {
        this.setState({
          passwordValidate: true,
          password: text
        })
      }
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={login} style={styles.backgroundContainer} >
          <View style={styles.logoContainer}>
            <Image source={title} style={styles.title} />
          </View>
          <View style={styles.inputContainer}>
            <Image source={person_outline}
              style={styles.inputIcon} />
            <TextInput
              style={[styles.input, !this.state.emailValidate ? styles.error : null]}
              placeholder={'email'}
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.validate(text, 'email')}
              name='email'
            />
          </View>
          <View style={styles.inputContainer}>
            <Image source={lock_outline}
              style={styles.inputIcon} />
            <TextInput
              style={[styles.input, !this.state.passwordValidate ? styles.error : null]}
              secureTextEntry={this.state.showPassword}
              placeholder={'contraseña'}
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.validate(text, 'password')}
            />
            <TouchableOpacity style={styles.btnEye}
              onPress={this.showPass.bind(this)}
            >
              <Image source={view} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.btnLogin}
            // onPress={() => this.props.navigation.navigate('Home')}
            onPress={this.login}
          >
            <Text style={styles.text}>Ingresar</Text>
          </TouchableOpacity>
          <Toast style={styles.toast} visible={this.state.visible}  message={this.state.msg} />
        </ImageBackground>
      </View>
    )
  }
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37
  },
  inputContainer: {
    marginTop: 10
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 37
  },
  backgroundContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 100
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#2e6da4',
    justifyContent: 'center',
    marginTop: 20
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16
  },
  error: {
    borderWidth: 1,
    borderColor: 'red'
  },
  toast: {
    width: 200,
    marginBottom:0
  }
});

export default Login;