import React, { Component } from 'react'
import { StyleSheet, View, Animated } from 'react-native'
import { theme } from '../constants';
let blockStyles;

export default class Block extends Component {
  constructor(props) {
    super(props);
  }

  render() {  
    const { welcome, loginForm, block, row, center, middle } = this.props;
    const blockStyles = [
        welcome && styles.welcome,
        loginForm && styles.loginForm,
        block && styles.block,
        row && styles.row,
        center && styles.center,
        middle && styles.middle
    ]

    return (
      <View style={blockStyles}>
        {this.props.children}
      </View>
    ) 
  } 
}
 
const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },   
  card: {
    borderRadius: theme.sizes.radius,
  },
  center: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
  },
  left: {
    justifyContent: 'flex-start',
  },
  right: {
    justifyContent: 'flex-end',
  },
  top: {
    justifyContent: 'flex-start',
  },
  bottom: {
    justifyContent: 'flex-end',
  },
  welcome: {
    flex: 1
  },
  loginForm: {
      margin: 10,
      
  },
  loginFormField: {
    flexDirection: 'row'
  }
})