import React, { Component } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {
	DashboardComponent,
	NotificationComponent,
	ProfileComponent,
	NewsListComponent
} from '@templates';
import { CustomTabBar } from '@partials';

class MainConsumerComponent extends Component {
	render() {
		return (
			<ScrollableTabView
				tabBarPosition={'bottom'}
				renderTabBar={() => <CustomTabBar titles={['Beranda', 'Notifikasi', 'Akun Saya', 'Berita']} />}
			>
				<DashboardComponent tabLabel="home" />
				<NotificationComponent tabLabel="notifications-none" />
				<ProfileComponent tabLabel="account-circle" />
				<NewsListComponent tabLabel="rss-feed" />
			</ScrollableTabView>
		);
	}
}

export default MainConsumerComponent;
