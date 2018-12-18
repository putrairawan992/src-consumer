import React, { Component } from 'react';
import { Linking } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {
	DashboardComponent,
	NotificationComponent,
	ProfileComponent,
	NewsListComponent,
	HelpComponent
} from '@templates';
import { EventRegister } from 'react-native-event-listeners';
import { CustomTabBar } from '@partials';
import { trackScreen } from '@helpers/analytic';
import { connect } from 'react-redux';
import { getNotifications } from '@templates/Notification/actions';
import DeviceInfo from 'react-native-device-info';
import { CommonService } from '@services';
import CustomAlert from '@helpers/CustomAlert';

class MainConsumerComponent extends Component {
	componentWillMount() {
		this.listener = EventRegister.addEventListener('profileTab', () => {
			this.scrollableTabView.goToPage(4);
		});
	}
	componentWillUnmount() {
		this.listener = EventRegister.removeEventListener('profileTab');
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
		CustomAlert(null, message, [{
			text: 'OK',
			onPress: () => {
				this.callUpdateAlert(message);
				Linking.openURL('market://details?id=com.pmi.store.pmiappm05726');
			}
		}]);
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
	tabChangeHandler(index) {
		if (index.i === 0) {
			trackScreen('dashboard');
		}
		else if (index.i === 1) {
			trackScreen('help');
		}
		else if (index.i === 2) {
			trackScreen('notifications');
			this.checkAppsInfo();
			this.props.getNotifications();
		}
		else if (index.i === 3) {
			trackScreen('news-list');
		}
		else if (index.i === 4) {
			trackScreen('profile');
		}
	}
	render() {
		return (
			<ScrollableTabView
				ref={(ref) => { this.scrollableTabView = ref; }}
				tabBarPosition={'bottom'}
				onChangeTab={this.tabChangeHandler.bind(this)}
				renderTabBar={() => <CustomTabBar titles={['Beranda', 'Bantuan', 'Notifikasi', 'Berita', 'Akun Saya']} />}
			>
				<DashboardComponent tabLabel="home" />
				<HelpComponent tabLabel="help-outline" />
				<NotificationComponent tabLabel="notifications-none" />
				<NewsListComponent tabLabel="rss-feed" />
				<ProfileComponent tabLabel="account-circle" />
			</ScrollableTabView>
		);
	}
}

export default connect(null, { getNotifications })(MainConsumerComponent);
