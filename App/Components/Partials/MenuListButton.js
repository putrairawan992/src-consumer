import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const styles = {
	buttonStyle: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-between',
		alignContent: 'center',
		paddingHorizontal: 20,
		paddingVertical: 16,
		borderBottomWidth: 1,
		borderColor: '#ececec'
	},
	textStyle: {
		fontFamily: 'ProximaNova-Regular',
		alignSelf: 'center',
		color: '#4a4a4a',
		fontSize: 12,
		fontWeight: '600'
	},
	
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
					</View>
				</TouchableWithoutFeedback>
		);
	}
}

export default MenuListButton;
