import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const styles = {
	buttonStyle: {
		alignItems: 'center',
		alignSelf: 'stretch',
		backgroundColor: '#DC1E2D',
		justifyContent: 'center',
		borderRadius: 6,
		height: 50
	},
	textStyle: {
		fontFamily: 'ProximaNova-Regular',
		alignSelf: 'center',
		color: '#fff',
		fontSize: 14,
		fontWeight: 'bold'
	}
};

class Button extends Component {
	render() {
		return (
			<TouchableOpacity
				onPress={this.props.onPress}
				style={[styles.buttonStyle, this.props.style]}
			>
				<Text style={[styles.textStyle, this.props.textStyle]}>{this.props.children}</Text>
			</TouchableOpacity>
		);
	}
}

export default Button;