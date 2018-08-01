import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = {
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
		fontFamily: 'ProximaNove-Regular',
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
	}
};

class NotificationSegment extends Component {
	render() {
		return (
			<View style={styles.segmentContainer}>
				<View
					style={{
						flex: 1,
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center'
					}}
				>
					<View style={{ position: 'relative' }}>
						<Image
							source={require('@images/message-notif.png')}
							style={{ height: 35, width: 35 }}
						/>
						<View style={styles.badge} />
					</View>
					<View style={styles.messageDescription}>
						<Text style={styles.notifTitle}>
							Lorem Ipsum Dolor sitamet
						</Text>
						<Text style={styles.notifContent}>
							Lorem Ipsum Dolor Sit amet conqueror
						</Text>
					</View>
					<Icon name="keyboard-arrow-right" size={36} color="#000" />
				</View>
			</View>
		);
	}
}

export default NotificationSegment;
