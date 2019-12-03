import React from 'react';
import {View, Text, FlatList, StyleSheet, Alert} from 'react-native';
import { connect } from 'react-redux';
import { deletePost } from '../action/handle';

class Home extends React.Component {
  render() {
    
    return (
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

export default connect( mapStateToProps, {deletePost} )(Home)