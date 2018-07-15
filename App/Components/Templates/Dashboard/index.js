import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class DashboardComponent extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Dashboard word</Text>
			</View>
		);
	}
}

export default DashboardComponent;