import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity, ToolbarAndroid, Image,} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Header, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Divider } from 'react-native-elements';
import firebase from 'react-native-firebase';


export default class ListView extends React.Component<{}> {

    constructor(props) {
        super(props)
    }

    homeBtn() {
        Actions.home()
    }

    profileBtn() {
        Actions.profile()
    }

    helpBtn() {
        Actions.help()
    }

    aboutusBtn() {
        Actions.aboutus()
    }
    logoutBtn() {
        firebase.auth().signOut()
  .then(() => {
    Actions.login()
  })
  .catch((error) => {
    // An error happened
  });
        
    }


    render() {
       
        return(
            <View >
                <TouchableOpacity onPress={this.homeBtn} style={styles.touch}><Image source={require('../images/home.png')} style={{width: 30, height: 30, marginVertical:12, marginHorizontal: 10}}/><Text style={styles.listText}> 
                   Home
               </Text></TouchableOpacity>
               <TouchableOpacity onPress={this.profileBtn} style={styles.touch}><Image source={require('../images/profile.png')} style={{width: 30, height: 30, marginVertical:12, marginHorizontal: 10}}/><Text style={styles.listText}> 
                   Profile
               </Text></TouchableOpacity>
               {/* <Divider style={styles.divider}/> */}
               <TouchableOpacity onPress={this.helpBtn} style={styles.touch}><Image source={require('../images/help.png')} style={{width: 30, height: 30, marginVertical:12, marginHorizontal: 10}}/><Text style={styles.listText}> 
               Help and Support
               </Text></TouchableOpacity>
               {/* <Divider style={styles.divider} /> */}
               <TouchableOpacity onPress={this.aboutusBtn} style={styles.touch}><Image source={require('../images/aboutus.png')} style={{width: 30, height: 30, marginVertical:12, marginHorizontal: 10}}/><Text style={styles.listText}> 
               About Us
               </Text></TouchableOpacity>
               {/* <Divider style={styles.divider} /> */}
               <TouchableOpacity onPress={this.logoutBtn} style={styles.touch}><Image source={require('../images/logout.png')} style={{width: 30, height: 30, marginVertical:12, marginHorizontal: 10}}/><Text style={styles.listText}> 
               Log Out
               </Text></TouchableOpacity>
               {/* <Divider style={styles.divider}/> */}
          </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      backgroundColor: '#455a64',
    },
   listText: {
       fontSize: 20,
       color: 'black',
       paddingVertical: 10,
       marginHorizontal: 10,
       marginVertical: 4
   },
   divider: {
       backgroundColor: '#455a64',
   },
   touch: {
    backgroundColor: '#eceff1',
    marginVertical: 4,
    flexDirection: 'row'
   }

  });