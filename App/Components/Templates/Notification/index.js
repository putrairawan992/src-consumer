import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
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
	render() {
		if (this.props.baseLoading) {
			return (
				<View 
				style={[styles.container, { justifyContent: 'center',
				alignItems: 'center' }]}
				>
					<ActivityIndicator size="large" color="#DC1E2D" />
				</View>
			);
		}
		return (
			<View style={styles.container}>
				<FlatList 
				data={this.props.notifications} renderItem={this.renderItem} keyExtractor={(item) => {
					return item.id.toString();
				}}
				refreshing={this.props.isRefreshing}
				onRefresh={() => {
					this.props.refreshNotifications();
				}} 
				/>
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
