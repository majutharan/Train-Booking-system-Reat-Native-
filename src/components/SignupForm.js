import React, { Component } from "react";
import firebase from "react-native-firebase";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Actions } from "react-native-router-flux";

export default class SignupForm extends Component<{}> {
  state = { email: '',password: '', errorMessage: null , phoneno: '', currentUser: null};
  handleSignUp = () => {
    firebase
      .auth()
      .createUserAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.commonAction())
      .catch(error => this.setState({ errorMessage: error.message }))

  }

  commonAction() {
    Actions.home()
    this.addPhoneNo()
  }
  addPhoneNo() {
   const {currentUser} = firebase.auth()
    this.setState({currentUser})
    this.writeUserData(currentUser&&currentUser.uid, this.state.phoneno)
    console.log('user', currentUser&&currentUser.uid)
  }

  writeUserData(userId, phoneNo) {
    firebase.database().ref('users/' + userId).set({
      phoneno: phoneNo
    });
  }

  render() {
    return (
      <View style={styles.container}>

        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}

        <TextInput
          style={styles.inputBox}
          placeholder="Email Id"
          placeholderTextColor="#ffffff"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
          <TextInput
          style={styles.inputBox}
          placeholder="Phone No"
          placeholderTextColor="#ffffff"
          onChangeText={phoneno => this.setState({ phoneno })}
          value={this.state.phoneno}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Password"
          placeholderTextColor="#ffffff"
          secureTextEntry
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <TouchableOpacity onPress={this.handleSignUp} style={styles.button}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
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
