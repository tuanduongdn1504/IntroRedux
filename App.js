/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import store from './src/store';
import Main from './src/Main'
import { Provider } from 'react-redux'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  render() {
    return (
      /* Provider để làm cầu nối cho React và Redux, bao ngoài root component của React và truyền 1 tham số duy nhất là store vào (store đã được tạo ở thư mục store và được import vào file này).*/
      <Provider store={store}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
        </Text>
          <Main />
          <Text style={styles.instructions}>
            {instructions}
          </Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
