import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from "react-native";
import Logo from "../components/Logo";
import Form from "../components/LoginForm";
import { Actions } from "react-native-router-flux";
import SignupForm from "../components/SignupForm";

export default class Signup extends React.Component<{}> {

  goBack() {
    Actions.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <SignupForm />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Already have an account?</Text>
          <TouchableOpacity onPress={this.goBack}>
            <Text style={styles.signupBtnText}> Signin</Text>
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
