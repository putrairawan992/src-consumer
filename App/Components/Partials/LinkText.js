import React, { Component } from 'react';
import { View, Text } from 'react-native';

const styles = {
	container: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'flex-start'
	},
	textStyle: {
		fontFamily: 'ProximaNova-Regular',
		color: '#DC1E2D',
		fontSize: 14,
		lineHeight: 20,
		margin: 12
	}
};

class LinkText extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={[styles.textStyle, this.props.style]}>{this.props.children}</Text>
			</View>
		);
	}
}

export default LinkText;
