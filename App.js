import React from 'react';

import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './src/reducers'
import Router from './Router';


class App extends React.Component {
  componentWillMount() {

    firebase.initializeApp({
      apiKey: "AIzaSyC325-4XS-yyMT77n-JYZpSfcMLmnBAgac",
      authDomain: "tagxi-4dbe1.firebaseapp.com",
      databaseURL: "https://tagxi-4dbe1.firebaseio.com",
      projectId: "tagxi-4dbe1",
      storageBucket: "tagxi-4dbe1.appspot.com",
      messagingSenderId: "139563350062"
    })

  }
  render() {
    return (
      <Provider store={createStore(reducers, {} , applyMiddleware(ReduxThunk))}>
        < Router />
      </Provider>
    )
  }
}


export default App;