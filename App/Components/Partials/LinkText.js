import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

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
           <TouchableWithoutFeedback style={styles.container} onPress={this.props.onPress}>
			<View>
				<Text style={[styles.textStyle, this.props.style]}>{this.props.children}</Text>
			</View>
		  </TouchableWithoutFeedback>
		);
	}
}

export default LinkText;
