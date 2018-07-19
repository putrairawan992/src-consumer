import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = {
	buttonStyle: {
		alignItems: 'center',
		alignSelf: 'stretch',
		backgroundColor: '#DC1E2D',
		justifyContent: 'center',
		borderRadius: 16,
		height: 'auto',
		padding: 24,
		shadowColor: '#000',
		shadowOffset: { width: 5, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 2,
		elevation: 12,
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
	render() {
		return (
		 <View style={{ flex: 1, margin: 10, marginTop: 50 }}>
			<LinearGradient
				onPress={this.props.onPress}
				style={[styles.buttonStyle, this.props.style]}
				colors={['#DC1E2D', '#B11522']}
				location={[0, 1]}
			>
			    <Image source={this.props.image} style={styles.imageIcon} />
			</LinearGradient>
			<Text style={[styles.textStyle, this.props.textStyle]}>
					{this.props.children}
			</Text>
		</View>
		);
	}
}

export default MenuButton;