import React, { Component } from 'react';
import { Block, Text, TextInput, Button } from '../components';
import { connect } from 'react-redux';
import { updateField, submitSignUp } from '../action/handle';

const Signup = (props) => {
    const onChangeEmail = ev => {
        props.updateField('email', ev); 
    }

    const onChangePass = ev => { 
        props.updateField('password', ev);
    }

    const onChangeConfirmPass = ev => { 
        props.updateField('confirmPassword', ev);
    }

    const onSubmitSignUp = () => {
        // if(this.props.news.email !== '' && this.props.news.password !== '' && this.props.news.password == this.props.news.confirmPassword) {
        //     this.props.submitSignUp();
        //     this.props.navigation.navigate('Home');
        // }
        firebase
            .auth()
            .createUserWithEmailAndPassword(props.email, props.password)
            .then(() => props.navigation.navigate('Home'))
            .catch(error => this.setState({ errorMessage: error.message }))
    }

    return(
        <Block loginForm>
            <Block loginFormField>
                <Text h3>Email:</Text>
                <TextInput login onChangeText={onChangeEmail}></TextInput>
            </Block>
            <Block loginFormField> 
                <Text h3>Password:</Text>
                <TextInput login onChangeText={onChangePass}></TextInput> 
            </Block>
            <Block loginFormField> 
                <Text h3>Confirm Password:</Text>
                <TextInput login onChangeText={onChangeConfirmPass}></TextInput> 
            </Block>
            <Block loginFormField>
                <Button primary onPress={onSubmitSignUp}>
                    <Text login>Sign Up</Text>
                </Button>
            </Block>
        </Block>
    )
}

const mapStateToProps = state => ({
    email: state.News.email,
    password: state.News.password
})

export default connect(mapStateToProps, { updateField, submitSignUp })(Signup)