import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;