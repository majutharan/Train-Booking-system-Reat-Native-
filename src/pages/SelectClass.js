import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity, ToolbarAndroid, Image, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Header, Button, List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderBar from '../components/HeaderBar';
import ListView from '../components/ListView';
import Modal from "react-native-modal";


export default class SelectClass extends React.Component<{}> {


    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: '#C1C1C1',
            isModalVisible: false,
            isSelected: false,
          };

    }

    // change() {
    //     this.setState({
    //         backColor: 'red'
    //     })
    // }

    // changecolor1(id) {
    //     //    this.setState({
    //     //         backgroundColor: 'red'
    //     //     })
      
    // }
    // changecolor2(id) {
        
    //         // this.setState({
    //         //     backgroundColor: 'red'
    //         // })
   
    // }
    // changecolor3(id) {
        
    //         // this.setState({
    //         //     backgroundColor: 'red'
    //         // })
     
    // }
    // changecolor4(id) {
      
    //         // this.setState( (id) => {backgroundColor: 'red'}
                
    //         // )
       
    // }
    // changecolor5(id) {
        
    //         // this.setState({
    //         //     backgroundColor: 'red'
    //         // })
    
    // }
    // changecolor6(id) {
        
    //         // this.setState({
    //         //     backgroundColor: 'red'
    //         // })
      
    // }
    // changecolor7(id) {
      
    //         // this.setState({
    //         //     backgroundColor: 'red'
    //         // })
      
    // }
    // changecolor8(id) {
       
    //         // this.setState({
    //         //     backgroundColor: 'red'
    //         // })
      
    // }
    // changecolor9(id) {
      
    //         // this.setState({
    //         //     backgroundColor: 'red'
    //         // })
       
    // }
    // changecolor(id) {
        
    //         // this.setState({
    //         //     backgroundColor: 'red'
    //         // })
       
    // }
    // changecolor10(id) {
    //     // if(this.state.isSelected === true){
    //     //     this.setState({
    //     //         backgroundColor: 'red'
    //     //     })
    //     // }
    // }
    // changecolor11(id) {
        
    //         // this.setState({
    //         //     backgroundColor: 'red'
    //         // })
    
    // }
    // changecolor(id) {
       
    //         // this.setState({
    //         //     backgroundColor: 'red'
    //         // })
       
    // }
    // changecolor12(id) {
      
    //         // this.setState({
    //         //     backgroundColor: 'red'
    //         // })
      
    // }
    // changecolor13(id) {
        
    //         // this.setState({
    //         //     backgroundColor: 'red'
    //         // })
       
    // }
    // changecolor14(id) {
       
    //         // this.setState({
    //         //     backgroundColor: 'red'
    //         // })
       
    // }
    // changecolor15(id) {
      
    //         // this.setState({
    //         //     backgroundColor: 'red'
    //         // })
      
    // }
    // changecolor16(id) {
       
    //         // this.setState({
    //         //     backgroundColor: 'red'
    //         // })
        
    // }

    // changecolor17(id) {
      
    //         // this.setState({
    //         //     backgroundColor: 'red'
    //         // })
      
        
    // }

    // changecolor18(id) {
        
    //         // this.setState({
    //         //     backgroundColor: 'red'
    //         // })
      
    // }


    // componentDidMount() {
    //     this._toggleModal();
    // }

    // componentWillMount() {
    //     this._toggleModal();
    // }

    navPayment=()=> {
        this._toggleModal();
        Actions.payment()
       
    }
        selectSeat= ()=> {
            this.setState({
                backgroundColor: 'red'
            })
        }
     
      _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible, backgroundColor: '#C1C1C1' });
        




    navTrainList() {
        Actions.trainlist()
    }


  
    render() {
        return(
            <View >
     <Header 
  placement="left"
  leftComponent={<Text style={{fontSize: 20, color: '#fff'}}>Train X</Text>}
  rightComponent={<TouchableOpacity onPress={this.navTrainList}><Image source={require('../images/error.png')} style={{width: 30, height: 30}}/></TouchableOpacity>}
  outerContainerStyles={{ backgroundColor: '#455a64', height: 55 }}
/>

<ScrollView style={{marginTop: '5%', marginBottom: '7%'}}>
  <View style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{width: 100, height: 100, alignItems: 'center'}} ><Button title="1st class" buttonStyle={{height: 100, width: 100}} onPress={this._toggleModal} /></View><Text> </Text>
        <View style={{width: 100, height: 100, alignItems: 'center'}} ><Button title="1st class" buttonStyle={{height: 100, width: 100}} /></View><Text> </Text>
        <View style={{width: 100, height: 100, alignItems: 'center'}} ><Button title="1st class" buttonStyle={{height: 100, width: 100}} /></View><Text> </Text>
        <View style={{width: 100, height: 100, alignItems: 'center'}} ><Button title="2nd class" buttonStyle={{height: 100, width: 100}} /></View><Text> </Text>
        <View style={{width: 100, height: 100, alignItems: 'center'}} ><Button title="2nd class" buttonStyle={{height: 100, width: 100}} /></View><Text> </Text>
        <View style={{width: 100, height: 100, alignItems: 'center'}} ><Button title="2nd class" buttonStyle={{height: 100, width: 100}} /></View><Text> </Text>
      </View>
      <Modal backdropOpacity="1" backdropColor="white" isVisible={this.state.isModalVisible}>
          <View style={{flexDirection: "column", alignItems: 'flex-end'}}>
            <View></View>
            <TouchableOpacity onPress={this._toggleModal}>
            <Image source={require('../images/error.png')} style={{width: 30, height: 30, backgroundColor: 'black'}}/>
            </TouchableOpacity>
          </View>
          <ScrollView>
          <View style={{flex: 1, justifyContent: 'center'}}>
         <View style={{flexDirection: 'row', width: 100, height: 100, alignItems: 'center'}} ><Button  buttonStyle={{height: 30, width: 30, backgroundColor: this.state.backgroundColor}} onPress={this.selectSeat} /><Button  buttonStyle={{height: 30, width: 30}}  /><Button  buttonStyle={{height: 30, width: 30}} /><Text>   </Text><Button  buttonStyle={{height: 30, width: 30}}  /><Button  buttonStyle={{height: 30, width: 30}} /><Button  buttonStyle={{height: 30, width: 30}} /></View>
         <View style={{flexDirection: 'row', width: 100, height: 100, alignItems: 'center'}} ><Button  buttonStyle={{height: 30, width: 30, }}  /><Button  buttonStyle={{height: 30, width: 30}} /><Button  buttonStyle={{height: 30, width: 30}}  /><Text>   </Text><Button  buttonStyle={{height: 30, width: 30}}  /><Button  buttonStyle={{height: 30, width: 30}} /><Button  buttonStyle={{height: 30, width: 30}} /></View>
         <View style={{flexDirection: 'row', width: 100, height: 100, alignItems: 'center'}} ><Button  buttonStyle={{height: 30, width: 30}}  /><Button  buttonStyle={{height: 30, width: 30}}  /><Button  buttonStyle={{height: 30, width: 30}}  /><Text>   </Text><Button  buttonStyle={{height: 30, width: 30}} /><Button  buttonStyle={{height: 30, width: 30}} /><Button  buttonStyle={{height: 30, width: 30}} /></View>
         <View style={{alignItems: 'center'}}><Button buttonStyle={{height: 40, width:100, backgroundColor: 'green'}} title="Book Now" onPress={this.navPayment}></Button></View>
         
        
         
         
            </View>
            </ScrollView>
        </Modal>
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