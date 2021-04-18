import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
          <Image
            style={{height:'100%',width:'100%'}}
            source={{uri:'https://user-images.githubusercontent.com/48379869/114836182-5acbc800-9e0d-11eb-9056-4d0a48efe5b9.jpg'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
});