import React, { Component } from 'react';
import { View, Image, ImageBackground, Text } from 'react-native';
import { trackScreen } from '@helpers/analytic';
import { Button } from '@partials';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

const pageName = this.pageName = 'main-menu';

const ayoImg = require('@images/login-logo.png');

class WelcomeScreenComponent extends Component {

	componentWillMount() {
		trackScreen(pageName);
	}
	
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
				<View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 20 }}>
					<Text style={styles.whiteText}>Hubungi kami:</Text>
					<Text style={styles.whiteText}>Telepon: 0804-1000-234 | WhatsApp: 0819-06000234</Text>
					<Text style={styles.whiteText}>Senin - Jumat (08.00 - 17.00 WIB)</Text>
				</View>
			</ImageBackground>
		);
	}
}

export default WelcomeScreenComponent;
