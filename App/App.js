/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { StatusBar, UIManager, Platform } from 'react-native';
import { debugStorage, retrieveCustomData } from '@helpers/Storage';
import reducers from './Store/combineReducer';
import AyoRouter from './Router';

type Props = {};
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
export default class App extends Component<Props> {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    // debug network
    // To see all the requests in the chrome Dev tools in the network tab.
    XMLHttpRequest = GLOBAL.originalXMLHttpRequest
      ? GLOBAL.originalXMLHttpRequest
      : GLOBAL.XMLHttpRequest;

    // fetch logger
    global._fetch = fetch;
    global.fetch = function(uri, options, ...args) {
      return global._fetch(uri, options, ...args).then(response => {
        return response;
      });
    };
  }

  componentWillMount() {
    StatusBar.setBackgroundColor('#C31432');
    debug();
  }

  constuctor() {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    return (
      <Provider store={store}>
        <AyoRouter />
      </Provider>
    );
  }
  
}

const debug = async() => {
  const storages = await debugStorage();
  const customData = await retrieveCustomData('profile');
  console.log('current storage', storages);
  console.log('current custom data', customData);
};
