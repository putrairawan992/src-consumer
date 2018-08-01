import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

class MyCardComponent extends Component {
	render() {
		return (
			<View style={styles.container}>
				<LinearGradient
					style={styles.consumerCard}
					colors={['#DC1E2D', '#B11522']}
					location={[0, 1]}
				>
					<View style={styles.number}>
						<Text style={styles.numberValue}>
							4000 0012 2345 6789
						</Text>
						<Text style={[styles.numberValue, { fontSize: 18 }]}>
							Raymond Chapman
						</Text>
					</View>
					<View style={{ position: 'absolute', top: 10, right: 10 }}>
                       <Image source={require('@images/logo-rotate.png')} style={{ height: 108, width: 35, resizeMode: 'contain' }} />
					</View>
				</LinearGradient>
			</View>
		);
	}
}

export default MyCardComponent;
