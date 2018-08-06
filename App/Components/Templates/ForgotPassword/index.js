import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Input, Button, Loader } from '@partials';
import validateClass from '@helpers/validator';
import * as actions from './actions';
import styles from './styles';
import validation from './validation';
import globalStyles from '../../../GlobalStyles';

class ForgotPasswordComponent extends Component {
	state = {
		phoneError: ''
	}

	componentWillUnmount() {
		this.props.forgotPageUnmount();
	}

	onPhoneChanged(text) {
		this.props.phoneChanged(text);
	}

	redirectOtp() {
		Actions.OtpResetPassword();
	}

	redirectFullOtp() {
		Actions.OtpResetPassword({
			hideNavBar: false,
			title: 'Kode verifikasi'
		});
	}

	submitForgotPassword() {
		const phoneError = validateClass(
			'phone',
			this.props.phone,
			validation,
			'phone'
		);
		this.setState({
			phoneError: phoneError
		});
		if (!phoneError) {
			const payload = {
				phone: '+62' + this.props.phone,
				type: this.props.type,
			};
			this.props.submitForgotPassword(payload, this.props.isReset);
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={globalStyles.centeredText}>
					Masukkan Nomor Handphone Anda untuk mereset password akun
				</Text>
				<View style={globalStyles.phoneRow}>
					<Input value="+62" editable={false} />
					<Input
						placeholder="Nomor Ponsel"
						keyboardType={'phone-pad'}
						flexItem={{ flex: 3 }}
						onChangeText={this.onPhoneChanged.bind(this)}
						value={this.props.phone}
						error={this.state.phoneError}
					/>
				</View>
				<Button
					onPress={this.submitForgotPassword.bind(this)}
				>
					KIRIM
				</Button>
				<Loader visible={this.props.baseLoading} />
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		phone: state.forgotPasswordReducer.phone,
		type: state.forgotPasswordReducer.type,
		baseLoading: state.forgotPasswordReducer.baseLoading
	};
};

export default connect(mapStateToProps, actions)(ForgotPasswordComponent);
