import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity, Alert
} from "react-native";
import { Actions } from "react-native-router-flux";

export default class AlertModel extends React.Component<{}> {
  
  

  render() {
   
    return (
        <View><Text></Text></View>  
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
