import React, { Component } from 'react';
import {Text} from 'react-native';
import { Block, Button } from '../components';
import * as theme from '../constants/theme';

export default class Welcome extends Component {
    render() {
        const { navigation } = this.props;
        return(
            <Block>
                <Button onPress={ () => navigation.navigate('Login') }>
                    <Text>Login</Text>
                </Button>
                <Button onPress={ () => navigation.navigate('Signup') }>
                    <Text>Sign Up</Text>
                </Button>
            </Block>
        )
    }
}