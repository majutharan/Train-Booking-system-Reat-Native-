import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity, ToolbarAndroid, Image, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Header, Button, List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderBar from '../components/HeaderBar';
import ListView from '../components/ListView';


export default class TrainList extends React.Component<{}> {


    list = [
        {
          name: 'Yal Devi',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President'
        },
        {
          name: 'Express1',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Vice Chairman'
        },
        {
            name: 'Guna',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Vice President'
          },
          {
            name: 'Anoj',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
          },
          {
            name: 'title',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Vice President'
          }
         
      ];


    navTrainList() {
        Actions.home()
    }

    navTrain() {
        Actions.train()
    }


  
    render() {
        return(
            <View >
     <Header 
  placement="left"
  leftComponent={<Text style={{fontSize: 20, color: '#fff'}}>Available Trains</Text>}
  rightComponent={<TouchableOpacity onPress={this.navTrainList}><Image source={require('../images/error.png')} style={{width: 30, height: 30}}/></TouchableOpacity>}
  outerContainerStyles={{ backgroundColor: '#455a64', height: 55 }}
/>

 <ScrollView style={{flexGrow: 1, paddingBottom: '5%'}}>

 
<List containerStyle={{marginBottom: 20}}>
{
 this.list.map((l) => (
  <TouchableOpacity onPress={this.navTrain}>
    <ListItem
      roundAvatar
      title={l.name}
    />
     </TouchableOpacity>
  ))
}
</List>
<Button title="check" onPress={this.check}/>

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