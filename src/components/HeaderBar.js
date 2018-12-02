import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity, ToolbarAndroid, Image,} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Header, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class HeaderBar extends React.Component<{}> {

    constructor(props) {
        super(props)
    }

    back() {
        Actions.pop()
    }

    listView() {
        Actions.list()
        source: false
    }

    homeView() {
        Actions.home()
    }
    // manageRoutes() {
    //     if(this.props.title == "Home") {
    //         this.listView
    //     }else {
    //         this.homeView
    //     }
    // }
    // icon: 'chevron-left', color: '#fff', size: 30
  
    render() {
        return(
            <View style= {styles.myHeaderStyle}>
<Header 
  placement="left"
  leftComponent={ <TouchableOpacity onPress={this.back}><Image source={require('../images/back.png')} style={{width: 30, height: 30}}/></TouchableOpacity>
  }
  centerComponent={<Text style={{fontSize: 20, color: '#fff'}}>{this.props.title}</Text>}
  rightComponent={<TouchableOpacity onPress={this.listView}><Image source={require('../images/menu.png')} style={{width: 30, height: 30}}/></TouchableOpacity>}
  outerContainerStyles={{ backgroundColor: '#455a64', height: 55 }}
/>
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
    myHeaderStyle: {
    
    }
  });