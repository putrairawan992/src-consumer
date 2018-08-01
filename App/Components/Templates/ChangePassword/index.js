import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Input, Button } from '@partials';
import styles from './styles';
import globalStyles from '../../../GlobalStyles';

class ChangePasswordComponent extends Component {
	redirectOtp() {
		Actions.OtpResetPassword();
	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={globalStyles.centeredText}>
					Masukkan kata sandi baru untuk akun anda
				</Text>
				<View style={globalStyles.phoneRow}>
				<Input
					placeholder="Kata sandi"
				/>
				</View>
				<View style={globalStyles.phoneRow}>
				<Input
					placeholder="Konfirmasi kata sandi"
				/>
				</View>
				<Button onPress={this.redirectOtp.bind(this)}>KIRIM</Button>
			</View>
		);
	}
}

export default ChangePasswordComponent;
