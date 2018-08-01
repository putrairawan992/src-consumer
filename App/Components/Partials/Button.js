import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const styles = {
	buttonStyle: {
		alignItems: 'center',
		alignSelf: 'stretch',
		backgroundColor: '#DC1E2D',
		justifyContent: 'center',
		borderRadius: 6,
		height: 50,
		margin: 10
	},
	textStyle: {
		fontFamily: 'ProximaNova-Bold',
		alignSelf: 'center',
		color: '#fff',
		fontSize: 14
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
