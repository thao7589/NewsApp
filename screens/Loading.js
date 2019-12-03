import React, { useEffect } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { Block, Text } from '../components';
// import firebase from 'react-native-firebase';

const Loading = ({ navigation }) => {
    useEffect(() => {
        // firebase.auth().onAuthStateChanged(user => {
        //     navigation.navigate(user ? 'Home' : 'Welcome')
        // })
        navigation.navigate('Welcome')
    }) 

    return (
        <Block block center middle>
            <ActivityIndicator size='large' />
        </Block>
    )
}

export default Loading; 