import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity, Alert
} from "react-native";
import { Actions } from "react-native-router-flux";
import firebase from 'react-native-firebase';
import AlertModel from "./AlertModel";

export default class LoginForm extends Component<{}> {

  state = { email: "", password: "", errorMessage: null }
  constructor(props) {
    super(props);
    // Toggle the state every second
   
  }
 

  componentDidMount() {
    const { email, password } = this.state
    if (email == null ) {
      this.setState({disabledBtn: true})
    }else{
      this.setState({disabledBtn: false})
    }
  }
 

  handleLogin = () => {
    const { email, password } = this.state
    
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => Actions.home())
      .catch(error => this.setState({ errorMessage: error.message }))

  }

  showAlert() {
    Alert.alert(
      'Invalid Username or Password...',
      ' ',
      [
        {text: 'OK', onPress: () => {},}
      ],
      { cancelable: false }
    )
  }

  navigateToLogin() {
    Actions.login()
  }

  navForgotPage() {
    Actions.forgotpassword();
  }

  // validation(error1) {
  //   if (error1) {
  //     console.log(error1)}
  //     else {
  //       Actions.home()
  //       console.log(error1)
  //     }
  // }

  navHome() {
    Actions.home();
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.errorMessage &&
          <Text  style={{ color: 'red',  }}>
            {this.state.errorMessage}
          </Text>}

        <TextInput
          style={styles.inputBox}
          placeholder="Email Id"
          placeholderTextColor="#ffffff"
          onChangeText={email => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Password"
          placeholderTextColor="#ffffff"
          secureTextEntry
          onChangeText={password => this.setState({password})}
          value={this.state.password}
        />
        <TouchableOpacity onPress={() => this.handleLogin()} style={styles.button}  >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.navForgotPage}><Text style={{color: 'white'}}>Forgot Password?..</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputBox: {
    width: 300,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 10
  },
  button: {
    backgroundColor: "#1c313a",
    width: 300,
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  }
});
