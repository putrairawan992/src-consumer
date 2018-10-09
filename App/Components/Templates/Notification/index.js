import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { connect } from 'react-redux';
import { NotificationSegment } from '@partials';
import * as actions from './actions';
import styles from './styles';

class NotificationComponent extends Component {
	componentWillMount() {
		this.props.getNotifications();
	}
	renderItem(item) {
		return <NotificationSegment item={item.item} />;
	}
	renderFlatList() {
		if (this.props.notifications.length > 0) {
			return (
				<FlatList
					data={this.props.notifications} renderItem={this.renderItem} keyExtractor={(item) => {
						return item.id.toString();
					}}
					refreshing={this.props.isRefreshing}
					onRefresh={() => {
						this.props.refreshNotifications();
					}}
				/>
			);
		}
		return (
			<View style={[styles.container, { justifyContent: 'center' }]}>
				<Text style={{ fontSize: 23, textAlign: 'center', fontFamily: 'ProximaNova-Regular' }}>Tidak ada Notifikasi Saat Ini</Text>
			</View>
		);
	}
	render() {
		if (this.props.baseLoading) {
			return (
				<View
					style={[styles.container, {
						justifyContent: 'center',
						alignItems: 'center'
					}]}
				>
					<ActivityIndicator size="large" color="#DC1E2D" />
				</View>
			);
		}
		return (
			<View style={styles.container}>
              {this.renderFlatList()}
			</View>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		notifications: state.notificationReducer.notifications,
		baseLoading: state.notificationReducer.baseLoading,
		isRefreshing: state.notificationReducer.isRefreshing
	};
};
export default connect(mapStateToProps, actions)(NotificationComponent);
