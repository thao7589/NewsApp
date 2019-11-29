import React from 'react';
import {View, Text, FlatList, StyleSheet, Alert} from 'react-native';
import { connect } from 'react-redux';
import Swipeout from 'react-native-swipeout'

class Home extends React.Component {
  render() {
    const swipeSetting = {
      autoClose: true,
      onClose: (secId, rowId, direction) => {

      },
      onOpen: (secId, rowId, direction) => {

      },
      right: [
        {
          onPress: () => {
            Alert.alert(
              'Alert',
              'Are you sure want to delete ?',
              [
                {text: 'No', onPress: () => console.log('Canceled'), style: 'cancel'},
                {text: 'Yes', onPress: () => {
                  
                }}
              ]
            )
          },
          text: 'Delete', type: 'delete',
          selectionId: 1
        }
      ]
    }
    return (
      <Swipeout {...swipeSetting}>
        <View>
          <FlatList  
              data={this.props.news.posts}
              keyExtractor={post => post.id}
              renderItem={({ item }) => {
                  return (
                      <View style={styles.view}>
                          <Text style={styles.title}>{item.title}</Text>
                          <Text style={styles.text}>{item.body}</Text>
                      </View>
                  )
              }}
          />
        </View>
      </Swipeout>
    );
  }
}  

const mapStateToProps = state => ({
  news: state.News
})

const styles = StyleSheet.create({
  view: {
      borderWidth: 1
  },
  text: {
      marginVertical: 10,
      marginHorizontal: 20
  },
  title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 10,
      marginHorizontal: 20
  }
});

export default connect( mapStateToProps )(Home)