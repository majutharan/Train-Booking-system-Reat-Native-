import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity, ToolbarAndroid, Image, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Header, Button, List, ListItem, FormInput, FormLabel } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderBar from '../components/HeaderBar';
import ListView from '../components/ListView';



export default class Payment extends React.Component<{}> {

    constructor() {
        super();
        state = {
            data: ''
         }
    }



    navTrainList() {
        Actions.home();
    }

    paymentMethod() {
        fetch('http://localhost:8080/card/cardAuthenticate?cardNo=123&cvv=123&expiaryDate=09/22', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         
         this.setState({
            data: responseJson
         })
      })
      .catch((error) => {
         console.error(error);
      });
        // Actions.home();
    }

    render() {
        return(
            <View >
     <Header 
  placement="left"
  leftComponent={<Text style={{fontSize: 20, color: '#fff'}}>Payment</Text>}
  rightComponent={<TouchableOpacity onPress={this.navTrainList}><Image source={require('../images/error.png')} style={{width: 30, height: 30}}/></TouchableOpacity>}
  outerContainerStyles={{ backgroundColor: '#455a64', height: 55 }}
/>


 <ScrollView>
     <View style={{marginHorizontal:'5%', paddingVertical: '8%'}}>
 <FormLabel labelStyle={{fontSize: 16, color: 'black'}}>Card No</FormLabel>
    <FormInput inputStyle={{color: 'black', borderColor: 'black', backgroundColor:'#c3c2c4'}} />
    <FormLabel labelStyle={{fontSize: 16, color: 'black'}}>CVV</FormLabel>
    <FormInput inputStyle={{color: 'black', borderColor: 'black', backgroundColor:'#c3c2c4'}} />
    <FormLabel labelStyle={{fontSize: 16, color: 'black'}}>Date</FormLabel>
    <FormInput inputStyle={{color: 'black', borderColor: 'black', backgroundColor:'#c3c2c4'}} />
    <View style={{alignItems: 'center', paddingVertical: '5%'}}><Button buttonStyle={{height: 40, width:100, backgroundColor: 'green'}} title="Pay" onPress={this.paymentMethod}></Button></View>

    </View>
 </ScrollView>
 

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
    signupTextCont: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingVertical: 16,
        flexDirection: 'row',

    },
    signupText: {
        color:'rgba(255, 255, 255, 0.6)',
        fontSize: 16,
    },
    signupBtnText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
    },
    headerStyle: {
        flexGrow: 1,
        marginVertical: 10

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