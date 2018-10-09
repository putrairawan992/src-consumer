import React, { Component } from 'react';
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

class MainConsumerComponent extends Component {
	componentWillMount() {
		this.listener = EventRegister.addEventListener('profileTab', () => {
			this.scrollableTabView.goToPage(4);
		});
	}
	componentWillUnmount() {
		this.listener = EventRegister.removeEventListener('profileTab');
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
