import React, { Component } from 'react';
import { Block, Button, Text, TextInput } from '../components'
import { connect } from 'react-redux';
import { updateField, submitLogin } from '../action/handle';
import * as constant from '../constants';

class Login extends Component {
    constructor(props) {   
        super(props);
    }

    onChangeEmail = ev => {
        this.props.updateField('email', ev); 
    }

    onChangePass = ev => { 
        this.props.updateField('password', ev);
    }

    onSubmitLogin = () => {
        if(this.props.news.email == constant.users.user.email && this.props.news.password == constant.users.user.pass ) {
            this.props.submitLogin();
            this.props.navigation.navigate('Home');
        }
    }      
    
    render() {
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
}

const mapStateToProps = state => ({
    news: state.News
})

export default connect(mapStateToProps, { updateField, submitLogin })(Login)