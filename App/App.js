/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StatusBar, UIManager, Platform } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { IntroComponent } from '@templates';

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    setTimeout(() => {
      SplashScreen.hide();
      StatusBar.setBackgroundColor('#DC1E2D');
    }, 4000);
  }

  constuctor() {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    return <IntroComponent />;
  }
}