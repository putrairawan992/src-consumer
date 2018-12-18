import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '@templates/Notification/actions';
import { CommonService } from '@services';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';


const styles = {
	mainContainer: {
		flexDirection: 'column',
	},
	segmentContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: '#ececec',
		padding: 20
	},
	messageDescription: {
		flexDirection: 'column'
	},
	notifTitle: {
		fontFamily: 'ProximaNova-Bold',
		fontSize: 14,
		color: '#000'
	},
	notifContent: {
		fontFamily: 'ProximaNova-Regular',
		fontSize: 12,
		color: '#000'
	},
	badge: {
		backgroundColor: '#DC1E2D',
		position: 'absolute',
		top: 0,
		left: 0,
		height: 12,
		width: 12,
		borderRadius: 20
	},
	notifDate: {
		fontFamily: 'ProximaNova-Regular',
		fontSize: 12,
		color: '#000',
		paddingHorizontal: 20,
		paddingTop: 20
	}
};

class NotificationSegment extends Component {
	redirectNotification() {
		const context = {
			id: this.props.item.id
		};
		if (this.props.item.status === 'unread') {
			CommonService.updateNotification(context);
			this.props.updateNotification(this.props.item.id);
		}
		if (this.props.item.entity_type === 'halamantujuan') {
			const data = {
				target_page: {
					slug: this.props.item.data
				}
			};
			Actions.Static({ banner: data });
		}
		else if (this.props.item.entity_type === 'newsfeed') {
			Actions.NewsDetail({ news: JSON.parse(this.props.item.data) });
		}
		else if (this.props.item.entity_type === 'kupon') {
			Actions.MyCoupon();
		}
		else if (this.props.item.entity_type === 'static_page') {
			const data = {
				target_page: {
					slug: JSON.parse(this.props.item.data).static_page_slug
				}
			};
			Actions.Static({ banner: data, title: JSON.parse(this.props.item.data).title });
		}
	}
	renderBadge() {
		if (this.props.item.status === 'unread') {
			return (
				<View style={styles.badge} />
			);
		}
	}
	render() {
		return (
			<TouchableWithoutFeedback onPress={this.redirectNotification.bind(this)}>
				<View style={styles.mainContainer}>
					<Text style={styles.notifDate}>
						{moment(this.props.item.updated_at).format('DD MMM YYYY HH:mm')}
					</Text>
					<View style={styles.segmentContainer}>
						<View
							style={{
								flex: 1,
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center'
							}}
						>
							<View style={{ position: 'relative', flex: 1 }}>
								<Image
									source={require('@images/message-notif.png')}
									style={{ height: 35, width: 35 }}
								/>
								{this.renderBadge()}
							</View>
							<View style={[styles.messageDescription, { flex: 3 }]}>
								<Text style={styles.notifTitle}>
									{this.props.item.title}
								</Text>
								<Text style={[styles.notifContent, (this.props.item.status === 'unread') ? { fontFamily: 'ProximaNova-Bold' } : null]}>
									{this.props.item.content}
								</Text>
							</View>
							<Icon name="keyboard-arrow-right" size={36} color="#000" />
						</View>
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		globalProfile: state.globalReducer.globalProfile
	};
};

export default connect(mapStateToProps, actions)(NotificationSegment);
