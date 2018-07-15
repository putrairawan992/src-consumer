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
				renderTabBar={() => <CustomTabBar />}
			>
				<DashboardComponent tabLabel="home" />
				<NotificationComponent tabLabel="notifications-none" />
				<ProfileComponent tabLabel="person-outline" />
			</ScrollableTabView>
		);
	}
}

export default MainConsumerComponent;