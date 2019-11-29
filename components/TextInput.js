// just copy this code from the driving repo :)
import React, { Component } from "react";
import { TextInput, StyleSheet } from "react-native";

import { theme } from "../constants";

export default class InputText extends Component {
  render() {
    const { login } = this.props;
    const inputStyles = [
      login && styles.login
    ] 

    return (
      <TextInput style={inputStyles} onChangeText={this.props.onChangeText}>
        {this.props.children} 
      </TextInput>  
    )
  }
}

const styles = StyleSheet.create({
  login: { 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1
  }
})
  