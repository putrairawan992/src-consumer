import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = {
	buttonStyle: {
		alignItems: 'center',
		alignSelf: 'center',
		backgroundColor: '#FFF',
		justifyContent: 'center',
		borderRadius: 16,
		padding: 24,
		shadowColor: '#000',
		shadowOffset: { width: 5, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 2,
		elevation: 5,
		height: 'auto',
		borderColor: '#DC1E2D',
		borderWidth: 3
	},
	textStyle: {
		fontFamily: 'ProximaNova-Regular',
		alignSelf: 'center',
		color: 'rgba(0,0,0,0.6)',
		fontSize: 12,
		paddingTop: 12
	},
	imageIcon: {
		height: 35,
		width: 35,
		resizeMode: 'contain'
	}
};

class MenuButton extends Component {
	renderImage() {
		if (this.props.image) {
			return <Image source={this.props.image} style={styles.imageIcon} />;
		}
		return <Icon name={this.props.iconName} size={35} color='#fff' />;
	}

	render() {
		return (
			<TouchableWithoutFeedback onPress={this.props.onPress}>
				<View style={{ flex: 1, margin: 10, marginTop: 50 }}>
					<View
						style={[styles.buttonStyle, this.props.style]}
					>
						{this.renderImage()}
					</View>
					<Text style={[styles.textStyle, this.props.textStyle]}>
						{this.props.children}
					</Text>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

export default MenuButton;
