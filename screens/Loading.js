import React, { useState,useEffect } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { Block, Text } from '../components';


function Loading() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        // firebase.auth().onAuthStateChanged(user => {
        //     this.props.navigation.navigate(user ? 'Home' : 'Welcome')
        // })
        console.log(324234);
        return (
            console.log(12313)
        )
    })

    return (
        <Block block center middle>
            {/* <ActivityIndicator size='large' /> */}
            <TouchableOpacity onPress={() =>setCount(123123)}>
                <Text>hello</Text>
            </TouchableOpacity>
        </Block>
    )
}

export default Loading;