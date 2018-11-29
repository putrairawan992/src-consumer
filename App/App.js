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
import { StatusBar, UIManager, Platform, NetInfo, ToastAndroid, Linking } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'react-native-firebase';
import { debugStorage, retrieveCustomData } from '@helpers/Storage';
import { checkPermission, getToken, requestPermission } from '@helpers/firebase';
import DeviceInfo from 'react-native-device-info';
import { CommonService } from '@services';
import CustomAlert from '@helpers/CustomAlert';
import { refreshProfile } from './Store/GlobalReducer/actions';
import reducers from './Store/combineReducer';
import AyoRouter from './Router';

type Props = {};
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
export default class App extends Component<Props> {

  componentWillMount() {
    StatusBar.setBackgroundColor('#C31432');
    debug();
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      this.handleFirstConnectivityChange
    );
  }

  async componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    // debug network
    // To see all the requests in the chrome Dev tools in the network tab.
    XMLHttpRequest = GLOBAL.originalXMLHttpRequest
      ? GLOBAL.originalXMLHttpRequest
      : GLOBAL.XMLHttpRequest;

    // fetch logger
    global._fetch = fetch;
    global.fetch = function (uri, options, ...args) {
      return global._fetch(uri, options, ...args).then(response => {
        return response;
      });
    };
    await this.checkPermission();
    this.checkAppsInfo();
    this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification) => {
      // Process your notification as required
      // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
      console.log('on notif display', notification);
    });
    this.notificationForeground = firebase.notifications().onNotification((notification) => {
      // Process your notification as required
      store.dispatch(refreshProfile());
      console.log('on notif listener', notification);
    });
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
      // Get the action triggered by the notification being opened
      // Get information about the notification that was opened
      this.redirectNotification(notificationOpen.notification);
    });
    firebase.notifications().getInitialNotification().then((notificationOpen) => {
      if (notificationOpen) {
        // App was opened by a notification
        // Get the action triggered by the notification being opened
        this.redirectNotification(notificationOpen.notification);
      }
    });
    this.messageListener = firebase.messaging().onMessage((message) => {
      console.warn('notif message', message);
    });
  }


  componentWillUnmount() {
    this.notificationDisplayedListener();
    this.notificationOpenedListener();
    this.messageListener();
    this.notificationForeground();
  }

  constuctor() {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  handleFirstConnectivityChange(isConnected) {
    if (!isConnected) {
      ToastAndroid.showWithGravityAndOffset(
        'Jaringan Tidak Tersedia',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        25,
        50
      );
    }
    NetInfo.isConnected.removeEventListener(
      'connectionChange',
      this.handleFirstConnectivityChange
    );
  }

  async checkAppsInfo() {
    const obj = {
      version: DeviceInfo.getVersion(),
      os: 'android',
      name: 'customer'
    };
    const checkVersion = await CommonService.checkAppVersion(obj);
    console.log('versi sekarang', checkVersion);
    if (checkVersion.current_version === false && checkVersion.force_update === true) {
      this.callUpdateAlert(checkVersion.message);
    }
    else if (checkVersion.current_version === false && checkVersion.force_update === false) {
      this.callAdditionalUpdateAlert(checkVersion.message);
    }
  }

  callUpdateAlert(message) {
    CustomAlert(null, message, [{ text: 'OK', 
      onPress: () => {
        this.callUpdateAlert(message);
        Linking.openURL('market://details?id=com.pmi.store.pmiappm05726');
      } }]);
  }

  callAdditionalUpdateAlert(message) {
    CustomAlert(null, message, [{
      text: 'Perbaharui Sekarang',
      onPress: () => {
        Linking.openURL('market://details?id=com.pmi.store.pmiappm05726');
      }
    }, {
      text: 'Lain Kali'
    }]);
  }


  async checkPermission() {
    console.log('check storage state');
    const permission = await checkPermission();
    if (permission) {
      getToken();
    }
    else {
      requestPermission();
    }
  }

  redirectNotification(item) {
    console.log('check item sekarang', item);
    if (item.data.entity_type === 'halamantujuan') {
      const data = {
        target_page: {
          slug: item.data.data
        }
      };
      Actions.Static({ banner: data });
    }
    else if (item.data.entity_type === 'newsfeed') {
      Actions.NewsDetail({ news: JSON.parse(item.data.data) });
    }
    else if (item.data.entity_type === 'kupon') {
      Actions.MyCoupon();
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

const debug = async () => {
  const storages = await debugStorage();
  const customData = await retrieveCustomData('profile');
  console.log('current storage', storages);
  console.log('current custom data', customData);
};
