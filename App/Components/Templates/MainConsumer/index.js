import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ScrollableTabView from "react-native-scrollable-tab-view";
import {
	DashboardComponent,
	NotificationComponent,
	ProfileComponent
} from '@templates';
import { CustomTabBar } from '@partials';

class MainConsumerComponent extends Component {
	render() {
		return (
			<ScrollableTabView
				tabBarPosition={'bottom'}
				renderTabBar={() => <CustomTabBar titles={['Beranda', 'Notifikasi', 'Akun Saya']} />}
			>
				<DashboardComponent tabLabel="home" />
				<NotificationComponent tabLabel="notifications-none" />
				<ProfileComponent tabLabel="account-circle" />
			</ScrollableTabView>
		);
	}
}

export default MainConsumerComponent;