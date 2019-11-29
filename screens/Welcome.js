import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import { Block, Button, Text } from '../components';

export default class Welcome extends Component {
    render() {
        const { navigation } = this.props;
        return(
            <View style={styles.view}>
                <Block welcome>
                    <Button primary onPress={ () => navigation.navigate('Login') }>
                        <Text login>Login</Text>
                    </Button>
                    <Button secondary onPress={ () => navigation.navigate('Signup') }>
                        <Text login>Sign Up</Text>
                    </Button> 
                </Block> 
            </View>
        )
    }
};

const styles = StyleSheet.create({
    view: {
        flex: 1
    }
});