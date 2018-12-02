import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity, ToolbarAndroid, Image, AsyncStorage, ImageBackground} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Header, Button, Icon } from 'react-native-elements';
import HeaderBar from '../components/HeaderBar';
import firebase from 'react-native-firebase';
import FontAwesome, { Icons } from 'react-native-fontawesome';


export default class Profile extends React.Component<{}> {

    state = {currentUser: null, phoneNo: '', sun: ''}
    userInfo = [];
    userNo = [];
   
    

    componentDidMount=()=> {
  
        const {currentUser} = firebase.auth()
          this.setState({currentUser})
          var userId = currentUser&&currentUser.uid
        
        firebase.database().ref('/users/' + userId).once('value', phoneNo => this.setState({phoneNo}) )
        
    }


    render=() => {
    
        const {currentUser} = this.state
        const {phoneno} = this.state.phoneNo;
    
        return(
          <View>
          
            <View>
     <HeaderBar title="Profile"/>
     <ImageBackground style= {styles.backImage}  source={require('../images/profileBackground.jpg')}>
     <View style={styles.header} >
          <View style={styles.profileImage}>
            <Image style={styles.profilepic} source={require('../images/profile.jpg')} />
          </View>
          <Text style={styles.name}>{currentUser&&currentUser.email}</Text>

        </View>
     </ImageBackground>
    
          </View>
          <View style= {styles.iconText}>
           <Text  style={{fontSize: 45, color:'green'}}>
           <FontAwesome>{Icons.phone}</FontAwesome><Text style= {{color: 'black', fontSize: 25}}>  0766601122</Text>
           </Text></View>
           <View style={styles.buttonText}>
           <TouchableOpacity onPress={this.handleSignUp} style={styles.button}>
          <Text style={styles.btnTxt}>Edit</Text>
        </TouchableOpacity>
           </View>
           </View>
        )
    }
}

const styles = StyleSheet.create({

  header: {
alignItems: 'center',
marginVertical: '5%'
  },

backImage: {
  width: '100%',
  aspectRatio: 2 / 1
},

profileBack: {
  alignItems: 'center',


},

profileImage: {
  height: '80%',
  width: '38%',
  borderRadius: 100,
  borderColor: 'rgba(0,0,0,0.4)',
  borderWidth: 16,
  
},
profilepic: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 4
  },

  iconText: {
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  name: {
    color: 'white',
    fontSize: 17
  },
  buttonText: {
    height: '10%',
    width: '40%',
    backgroundColor: 'green',
    borderRadius: 40,
    alignItems: 'center',
    marginHorizontal: '30%',
    marginTop: '30%'

  
  
  },
  btnTxt: {
  fontSize: 20,
  color: 'white',
  marginVertical: '6%'
  }

    // container: {
    //   flex: 1,
    // width: null,
    // alignSelf: 'stretch'
    // },

    // profileImage: {
    //   flexGrow: 1,
    //   justifyContent: 'center',
    //   alignItems: "center"
    // },
    // header: {
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   padding: 30,
    //   backgroundColor: 'rgba(0,0,0, 0.5)',
    // },
    // profilepicWrap: {
    //   width: 180,
    //   height: 180,
    //   borderRadius: 100,
    //   borderColor: 'rgba(0,0,0,0.4)',
    //   borderWidth: 16,
    // },
    // profilepic: {
    //   flex: 1,
    //   width: null,
    //   alignSelf: 'stretch',
    //   borderRadius: 100,
    //   borderColor: '#fff',
    //   borderWidth: 4
    // },
    // name: {
    //   marginTop: 20,
    //   fontSize: 16,
    //   color: '#fff',
    //   fontWeight: 'bold'
    // },
    // pos: {
    //   fontSize: 16,
    //   color: '#0394c0',
    //   fontWeight: '600',
    //   fontStyle: 'italic'
    // },

    // iconText: {
    //   marginVertical: 16,
    //    paddingHorizontal: 16,
     
    // }


  
  });