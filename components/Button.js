import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import * as theme from '../constants/theme';

const Button = () => {
  const { primary, secondary } = this.props;
  const buttonStyles = [
    primary && styles.primary,
    secondary && styles.secondary
  ] 

  return (
    <TouchableOpacity style={buttonStyles} onPress={this.props.onPress}>
      {this.props.children} 
    </TouchableOpacity>  
  )
};

const styles = StyleSheet.create({
  primary: {
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 25,
    backgroundColor: theme.colors.primary
  },
  secondary: {
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 25,
    backgroundColor: theme.colors.secondary
  },
})
   