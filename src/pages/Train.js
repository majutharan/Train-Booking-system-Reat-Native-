import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity, ToolbarAndroid, Image, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Header, Button, List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderBar from '../components/HeaderBar';
import ListView from '../components/ListView';


export default class Train extends React.Component<{}> {




    navTrainList() {
        Actions.trainlist()
    }

    navTrain() {
        Actions.selectclass()
    }


  
    render() {
        return(
            <View >
     <Header 
  placement="left"
  leftComponent={<Text style={{fontSize: 20, color: '#fff'}}>train Details</Text>}
  rightComponent={<TouchableOpacity onPress={this.navTrainList}><Image source={require('../images/error.png')} style={{width: 30, height: 30}}/></TouchableOpacity>}
  outerContainerStyles={{ backgroundColor: '#455a64', height: 55 }}
/>

<ScrollView style={{marginTop: '5%', marginBottom: '7%'}}>
  <Button title="Select Seats" onPress={this.navTrain}/>
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

    }
  });