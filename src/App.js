import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyA-ZATSBpNpys6yv6GRQr2h-3UD3ZhavVk',
      authDomain: 'reactnativeauth-4855b.firebaseapp.com',
      databaseURL: 'https://reactnativeauth-4855b.firebaseio.com',
      projectId: 'reactnativeauth-4855b',
      storageBucket: 'reactnativeauth-4855b.appspot.com',
      messagingSenderId: '501427989444'
    };
    firebase.initializeApp(config);    
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hola!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;