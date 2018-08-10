import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const styles = {
	viewLoader: {
		backgroundColor: '#fff',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: 16,
		width: '80%',
		alignSelf: 'center',
        top: '75%'
	},
	textStyle: {
		paddingLeft: 12
	}
};

class Loader extends Component {
	render() {
		return (
			<Spinner visible={this.props.visible}>
				<View style={styles.viewLoader}>
					<ActivityIndicator size="large" color="#DC1E2D" />
					<Text style={styles.textStyle}>{this.props.text ? this.props.text : 'Loading'}</Text>
				</View>
			</Spinner>
		);
	}
}

export default Loader;
