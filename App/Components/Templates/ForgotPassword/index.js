import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Input, Button } from '@partials';
import styles from './styles';
import globalStyles from '../../../GlobalStyles';

class ForgotPasswordComponent extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={globalStyles.centeredText}>Masukkan Nomor Handphone Anda untuk mereset password akun</Text>
				<View style={globalStyles.phoneRow}>
				<Input
					value="+62"
					editable={false}
				/>
				<Input
					placeholder="Nomor Ponsel"
					keyboardType={'phone-pad'}
					flexItem={{ flex: 3 }}
				/>
				</View>
				<Button onPress={this.redirectOtp.bind(this)}>KIRIM</Button>
			</View>
		);
	}

	redirectOtp() {
        Actions.OtpResetPassword();
	}
}

export default ForgotPasswordComponent;
