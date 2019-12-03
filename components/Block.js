import React from 'react'
import { StyleSheet, View, Animated } from 'react-native'
import { theme } from '../constants';

const Block = (props) => {
  const { welcome, loginForm, block, row, center, middle } = props;
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
      {props.children}
    </View>
  ) 
}

export default Block;
 
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