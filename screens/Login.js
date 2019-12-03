import React, { Component } from 'react';
import { Block, Button, Text, TextInput } from '../components'
import { connect } from 'react-redux';
import { updateField, submitLogin } from '../action/handle';
import * as constant from '../constants';

const Login = (props) => {
    const onChangeEmail = ev => {
        this.props.updateField('email', ev); 
    }

    const onChangePass = ev => { 
        this.props.updateField('password', ev);
    }

    const onSubmitLogin = () => {
        // if(this.props.news.email == constant.users.user.email && this.props.news.password == constant.users.user.pass ) {
        //     this.props.submitLogin();
        //     this.props.navigation.navigate('Home');
        // }
        // firebase
        //     .auth()
        //     .signInWithEmailAndPassword(props.news.email, props.news.password)
        //     .then(() => props.navigation.navigate('Home'))
        //     .catch(error => this.setState({ errorMessage: error.message }))
    }   

    return(
        <Block loginForm>
            <Block loginFormField>
                <Text h3>Email:</Text>
                <TextInput login onChangeText={this.onChangeEmail}></TextInput>
            </Block>
            <Block loginFormField> 
                <Text h3>Password:</Text>
                <TextInput login onChangeText={this.onChangePass}></TextInput> 
            </Block>
            <Block loginFormField>
                <Button primary onPress={this.onSubmitLogin}>
                    <Text login>Login</Text>
                </Button>
            </Block> 
        </Block>
    ) 
}

const mapStateToProps = state => ({
    email: state.News.email
})

export default connect(mapStateToProps, { updateField, submitLogin })(Login)