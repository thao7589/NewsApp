import React, { Component } from 'react'
import { StyleSheet, View, Animated } from 'react-native'
import { theme } from '../constants';
let blockStyles;

export default class Block extends Component {
  constructor(props) {
    super(props);
  }

  render() {  
    const { type } = this.props;
    const blockStyles = [
        type == 'welcome' && styles.welcome
    ]

    return (
      <View style={styles.block}>
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
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 2,
  },
  accent: { backgroundColor: theme.colors.accent, },
  primary: { backgroundColor: theme.colors.primary, },
  secondary: { backgroundColor: theme.colors.secondary, },
  tertiary: { backgroundColor: theme.colors.tertiary, },
  black: { backgroundColor: theme.colors.black, },
  white: { backgroundColor: theme.colors.white, },
  gray: { backgroundColor: theme.colors.gray, },
  gray2: { backgroundColor: theme.colors.gray2, },
  welcome: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})