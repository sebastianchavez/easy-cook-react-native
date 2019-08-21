import React, { Component } from 'react'
import { Image, View, TextInput, StyleSheet } from 'react-native'

const { width: WIDTH } = Dimensions.get('window')

export default class Textbox extends Component {
    render() {
        return (
            <View style={styles.inputContainer}>
                <Image source={this.props.icon}
                style={styles.inputIcon} />
                <TextInput
                style={styles.input}
                placeholder={this.props.placeholder}
                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                underlineColorAndroid='transparent'
                />
          </View>
        )
    }
}

const styles = StyleSheet.create({
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
})
