import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity, BackHandler
} from "react-native";
import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";
import { Actions } from "react-native-router-flux";

export default class Login extends React.Component<{}> {


  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', function() {
      // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
      // Typically you would use the navigator here to go to the last state.
    
      if (!Actions.login()) {
        BackHandler.exitApp()
        return true;
      }
      return false;
    });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  
  
  signup() {
    Actions.signup();
  }

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <LoginForm />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don't have an account yet?</Text>

          <TouchableOpacity onPress={this.signup}>
            <Text style={styles.signupBtnText}> Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#455a64"
  },
  signupTextCont: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingVertical: 16,
    flexDirection: "row"
  },
  signupText: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: 16
  },
  signupBtnText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500"
  }
});
