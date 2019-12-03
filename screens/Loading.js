import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { Block, Text } from '../components';
import firebase from 'react-native-firebase';


export default class Loading extends Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
          this.props.navigation.navigate(user ? 'Home' : 'Welcome')
        })
    }
    
    render() {
        return (
            <Block block center middle>
                <ActivityIndicator size='large' />
            </Block>
        )
    }
    
}

export default Loading;