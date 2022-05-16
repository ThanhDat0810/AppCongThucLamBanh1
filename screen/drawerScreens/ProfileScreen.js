import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

export default class ProfileScreen extends Component {
  render() {
    return (
      <View style = {styles.container}>
       <Image style = { styles.pc} source={require('../assets/success.png')} />
      <View style={styles.bottomContainer}>
     <Image style={styles.image} source={require('../assets/success.png')} />
      <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Shikeru21"
              />
        </View>
      <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="02/01/2000"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(date) => this.setState({date})}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Bùi Nguyên Vinh"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(fullName) => this.setState({fullName})}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Bvinhshikeru@gmail.com"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.onClickListener('Edit Profile')}>
          <Text style={styles.signUpText}>Edit Profile</Text>
        </TouchableHighlight>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d64b4b',
  },
  pc: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  bottomContainer: {
    marginTop: '52%',
    height: '90%',
    width: 400,
    backgroundColor: 'white',
    borderRadius: 50,
    alignItems: 'center'
  },
   image: {
    borderRadius: 25,
    height: 100,
    width: 100,
    bottom: '10%'
  },
  inputContainer: {
    borderWidth: 3,
     borderRadius: 8,
      borderStyle: "solid",
      borderBottomColor: '#000000',
      borderTopColor: '#000000',
      backgroundColor: '#FFFFFF',
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      color: '#000000',
      marginLeft:16,
      fontSize: 16,
      fontWeight: 'bold',
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius: 8,
    borderWidth: 2
  },
  signupButton: {
    backgroundColor: "#b41616",
  },
  signUpText: {
    color: 'white',
  }
});
