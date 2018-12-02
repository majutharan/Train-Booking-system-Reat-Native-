import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'react-native-firebase'


export default class Loading extends Component<{}> {
    componentDidMount() {
        firebase
        .auth()
        .onAuthStateChanged(user => {
          if(user) {
              Actions.home()
          }else{
          Actions.login()
          }
        })
      }
    render() {
        return(
            <View style={styles.container}>
            <Text>Loading...</Text>
            <ActivityIndicator size="large" />
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  })