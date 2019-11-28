import React, { Component } from 'react';
import {Text, StyleSheet} from 'react-native';
import { Block, Button } from '../components';
import * as theme from '../constants/theme';

export default class Welcome extends Component {
    render() {
        const { navigation } = this.props;
        return(
            <Block type='welcome'>
                <Button type='primary' onPress={ () => navigation.navigate('Login') }>
                    <Text style={styles.loginText}>Login</Text>
                </Button>
                <Button type='secondary' onPress={ () => navigation.navigate('Signup') }>
                    <Text style={styles.loginText}>Sign Up</Text>
                </Button>
            </Block>
        )
    }
};

const styles = StyleSheet.create({
    loginText: {
        textAlign: 'center',
        fontSize: theme.sizes.h1,
        color: theme.colors.white
    }
})