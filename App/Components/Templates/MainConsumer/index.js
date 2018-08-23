import React, { Component } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {
	DashboardComponent,
	NotificationComponent,
	ProfileComponent,
	NewsListComponent,
	HelpComponent
} from '@templates';
import { CustomTabBar } from '@partials';

class MainConsumerComponent extends Component {
	render() {
		return (
			<ScrollableTabView
				tabBarPosition={'bottom'}
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

export default MainConsumerComponent;
