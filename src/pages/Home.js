import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ToolbarAndroid,
  Image, TextInput, Picker
} from "react-native";
import { Actions } from "react-native-router-flux";
import { Header, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import HeaderBar from "../components/HeaderBar";
import { Input } from 'react-native-elements';
import firebase from 'react-native-firebase';
import DatePicker from 'react-native-datepicker';

export default class Home extends React.Component<{}> {

  

  state = {currentUser: null}
  componentDidMount() {
    const {currentUser} = firebase.auth()
   this.setState({currentUser})
   //this.sample()
    
  }
  

  sample() {
  //   const {currentUser} = this.state
  
  
  //   const {currentUser} = firebase.auth()
  //   this.setState({currentUser})
  //   var userId = currentUser&&currentUser.uid
  //  firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
  //   var phoneno = (snapshot.val() && snapshot.val().phoneno) || 'Anonymous';
  //     console.log('no', phoneno)
  //     console.log('user', userId)
  //   });
  
    
}


navTrainList() {
  Actions.trainlist()
}
  
  render() {
   const {currentUser} = this.state
  //   const {currentUser} = firebase.auth()
  //   this.setState({currentUser})
  //   var userId = currentUser&&currentUser.uid
  //  firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
  //   var phoneno = (snapshot.val() && snapshot.val().phoneno) || 'Anonymous';
  //     console.log('no', phoneno)
  //     console.log('user', userId)
  //   });
  
    
    return (
      <View>
        <HeaderBar title="Home" />
        <View style={styles.container}>

        <View style={{marginTop: '20%'}}>
       
        <Picker style={styles.inputBox}
  selectedValue={this.state.selected1}
  onValueChange={(itemValue, itemIndex) => this.setState({selected1: itemValue})}>
  <Picker.Item  label="From" value="java" />
  <Picker.Item label="Jaffna" value="jf" />
  <Picker.Item label="Colombo" value="cl" />
  <Picker.Item label="Anuradhapura" value="anu" />
  <Picker.Item label="puttalam" value="put" />
</Picker>
<Picker style={styles.inputBox}
  selectedValue={this.state.selected2}
  onValueChange={(itemValue, itemIndex) => this.setState({selected2: itemValue})}>
  <Picker.Item  label="To" value="java" />
  <Picker.Item label="Jaffna" value="jf" />
  <Picker.Item label="Colombo" value="cl" />
  <Picker.Item label="Anuradhapura" value="anu" />
  <Picker.Item label="puttalam" value="put" />
</Picker>

 <DatePicker style={styles.inputBox}
        style={{width: 300, marginTop:'3%'}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2020-08-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
            marginHorizontal: 6
          },
          dateInput: {
            marginLeft: 0,
            backgroundColor: '#bdbdbd',


          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
        <View style={{marginTop:'4%'}}>
    <Button title="Search" buttonStyle={{
    backgroundColor: "#1faa00",
    borderRadius: 5,
  }} onPress={this.navTrainList} />
  </View>
      
       
</View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center"
   
  },

  inputBox: {
    width: 300,
    backgroundColor: "#bdbdbd",
    paddingHorizontal: 16,
    fontSize: 16,
    marginVertical: 10,
  },

  labelStyle: {
    color: 'white'
  }
  
});
