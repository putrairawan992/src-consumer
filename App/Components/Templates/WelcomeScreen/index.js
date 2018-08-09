import React, { Component } from 'react';
import { View, Image, ImageBackground } from 'react-native';
import { Button } from '@partials';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

const ayoImg = require('@images/login-logo.png');

class WelcomeScreenComponent extends Component {
	
	redirectLogin() {
		Actions.Login();
	}

	redirectRegister() {
		Actions.Register();
	}

	render() {
		return (
			<ImageBackground style={styles.container} source={require('@images/ayo-bg-login.png')}>
				<View
					style={styles.topper}
				>
					<Image source={ayoImg} style={styles.topperImg} />
					<View style={styles.buttonContainer}>
						<Button
							style={styles.buttonStyle}
							textStyle={styles.textStyle}
							onPress={this.redirectLogin.bind(this)}
						>
							MASUK
						</Button>
						<Button style={{ marginTop: 21, backgroundColor: 'transparent', borderWidth: 1, borderColor: '#fff' }} onPress={this.redirectRegister.bind(this)}>DAFTAR</Button>
					</View>
				</View>
			</ImageBackground>
		);
	}
}

export default WelcomeScreenComponent;
