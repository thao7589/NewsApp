// just copy this code from the driving repo :)
import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

import { theme } from "../constants";

const Typography = () => {
  const { login, h3 } = this.props;
  const textStyles = [
    login && styles.login,
    h3 && styles.h3
  ] 

  return (
    <Text style={textStyles} onPress={this.props.onPress}>
      {this.props.children} 
    </Text>  
  )
}

const styles = StyleSheet.create({
  login: {
    textAlign: 'center',
    fontSize: theme.sizes.h1,
    color: theme.colors.white
  },
  h3: {
    fontSize: theme.sizes.h3
  }
})
  