import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const styles = {
	buttonStyle: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignContent: 'center',
		paddingHorizontal: 20,
		paddingVertical: 16,
		borderBottomWidth: 1,
		borderColor: '#ececec',
		height: 60
	},
	textStyle: {
		fontFamily: 'ProximaNova-Regular',
		alignSelf: 'center',
		color: '#000',
		fontSize: 12
	},
	badge: {
		backgroundColor: '#DC1E2D',
		position: 'absolute',
		top: '75%',
		right: '20%',
		height: 12,
		width: 12,
		borderRadius: 20
	}
	
};

class MenuListButton extends Component {
	render() {
		return (
				<TouchableWithoutFeedback
					onPress={this.props.onPress}
				>
					<View style={styles.buttonStyle}>
						<Text style={[styles.textStyle, this.props.style]}>
							{this.props.children}
						</Text>
						<Icon name="chevron-right" size={24} color="#4a4a4a" />
						{(this.props.bubble) ? <View style={styles.badge} /> : null}
					</View>
				</TouchableWithoutFeedback>
		);
	}
}

export default MenuListButton;
