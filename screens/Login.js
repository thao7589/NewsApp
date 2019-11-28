import React, { Component } from 'react';
import { View, Text, TextInput} from 'react-native';
import { Block, Button } from '../components'

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Block>
                <Block>
                    <Text>Email:</Text>
                    <TextInput></TextInput>
                </Block>
                <Block>
                    <Text>Password:</Text>
                    <TextInput></TextInput>
                </Block>
                <Block>
                    <Button>
                        <Text>Login</Text>
                    </Button>
                </Block>
            </Block>
        )
    }
}