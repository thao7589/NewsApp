import React, { Component } from 'react';
import { Block, Text, TextInput, Button } from '../components';
import { connect } from 'react-redux';
import { updateField, submitSignUp } from '../action/handle';

class Signup extends Component {
    constructor(props) {
        super(props);
    }

    onChangeEmail = ev => {
        this.props.updateField('email', ev); 
    }

    onChangePass = ev => { 
        this.props.updateField('password', ev);
    }

    onChangeConfirmPass = ev => { 
        this.props.updateField('confirmPassword', ev);
    }

    onSubmitSignUp = () => {
        console.log(this.props.news)
        if(this.props.news.email !== '' && this.props.news.password !== '' && this.props.news.password == this.props.news.confirmPassword) {
            this.props.submitSignUp();
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
                    <Text h3>Confirm Password:</Text>
                    <TextInput login onChangeText={this.onChangeConfirmPass}></TextInput> 
                </Block>
                <Block loginFormField>
                    <Button primary onPress={this.onSubmitSignUp}>
                        <Text login>Sign Up</Text>
                    </Button>
                </Block>
            </Block>
        )
    }
}

const mapStateToProps = state => ({
    news: state.News
})

export default connect(mapStateToProps, { updateField, submitSignUp })(Signup)