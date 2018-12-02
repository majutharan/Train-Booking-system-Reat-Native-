import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';


export default class Logo extends Component<{}> {
    render() {
        return(
            <View style={styles.container}>
            <Image  style={{width:100, height:70}} source={require('../images/frontLogo.png')} />
            <Text style={styles.logoText}>Train Booking</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: '#455a64',
    },
    logoText: {
        fontSize: 18,
        color: 'white',
        marginVertical: 15,
        fontWeight: '700'
    }
  });