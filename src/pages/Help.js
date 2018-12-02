import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity, ToolbarAndroid, Image,} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Header, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderBar from '../components/HeaderBar';


export default class Help extends React.Component<{}> {


  
    render() {
        return(
            <View >
     <HeaderBar title="Help & Support"/>
     
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

    }
  });