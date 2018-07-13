import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Button } from '@partials';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const ayoImg = require('@images/ayo-wscreen.png');

class WelcomeScreenComponent extends Component {
	render() {
		return (
			<View style={styles.container}>
				<LinearGradient
					style={styles.topper}
					colors={['#DC1E2D', '#B11522']}
					location={[0, 1]}
				>
					<Image source={ayoImg} style={styles.topperImg} />
				</LinearGradient>
				<View style={styles.bottom}>
					<Button onPress={this.redirectLogin.bind(this)}>MASUK</Button>
					<Button
						style={styles.buttonStyle}
						textStyle={styles.textStyle}
					>
						DAFTAR
					</Button>
				</View>
			</View>
		);
	}

	redirectLogin() {
		Actions.Login();
	}
}

export default WelcomeScreenComponent;