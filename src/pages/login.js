import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native';

// import Svg, {G, Path} from 'react-native-svg '

const { width: WIDTH } = Dimensions.get('window')
class Login extends Component {

  constructor(){
    super()
    this.state = {
      showPassword: true,
      press: false
    }
  }

  showPass = () => {
    if(this.state.press == false){
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


  render(){
    return (
       <ImageBackground source={this.props.bgImage} style={styles.backgroundContainer} >
        <View style={styles.logoContainer}>
          <Image source={this.props.title} style={styles.title} />
          {/* <Image source={logo} style={styles.logo} /> */}
          {/* <Text style={styles.logoText}>Easy Cook</Text> */}
        </View>
        <View style={styles.inputContainer}>
          <Image  source={this.props.iconPerson}
          style={styles.inputIcon}/>
          <TextInput 
            style={styles.input}
            placeholder={'email'}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underlineColorAndroid='transparent'
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={this.props.iconLock}
          style={styles.inputIcon}  />
        <TextInput 
            style={styles.input}
            secureTextEntry={this.state.showPassword}
            placeholder={'contraseña'}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underlineColorAndroid='transparent'
          />
        <TouchableOpacity style={styles.btnEye} onPress={this.showPass.bind(this)}>
          <Image  source={this.props.iconView}/>
        </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.text}>Ingresar</Text>
        </TouchableOpacity>
       </ImageBackground>
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
    color:'#fff',
    textAlign:'center',
    fontSize: 16    
  }
});

export default Login;