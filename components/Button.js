import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity style={{backgroundColor: 'red'}} onPress={this.props.onPress}>
        {this.props.children} 
      </TouchableOpacity>  
    )
  }
}
   