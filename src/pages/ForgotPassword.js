import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button, Header } from 'react-native-elements';
import { Actions } from "react-native-router-flux";
import firebase from "react-native-firebase";


export default class ForgotPassword extends Component<{}> {

 state = {email: '', errorMessage: null};

 sendMail= () =>{
    var auth = firebase.auth();
    var emailAddress = this.state.email;
    
    auth.sendPasswordResetEmail(emailAddress).then(function() {
      Actions.login();
    }).catch(error => this.setState({errorMessage: error.message}))
 }

close() {
Actions.login();
}

    render() {
        return(
            <View>
                  <Header 
          placement="left"
          leftComponent={<Text style={{fontSize: 20, color: '#fff'}}>Forgot Password</Text>}
          rightComponent={<TouchableOpacity onPress={this.close}><Image source={require('../images/error.png')} style={{width: 30, height: 30}}/></TouchableOpacity>}
          outerContainerStyles={{ backgroundColor: '#455a64', height: 55 }}
        />
    <FormLabel>Email Id</FormLabel>
        <FormInput onChangeText={email => this.setState({email})} 
        value={this.state.email}/>
        <Button title="SUBMIT" onPress={this.sendMail}/>

         {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoText: {
        fontSize: 18,
        color: 'white',
        marginVertical: 15,
        fontWeight: '700'
    }
  });