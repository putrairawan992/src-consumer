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

class ChangePasswordComponent extends Component {

	state = {
		passwordError: '',
		passwordConfirmationError: ''
	}

	componentWillUnmount() {
		this.props.changePassPageUnmount();
	}

	passwordOnChange(text) {
		this.props.passwordChanged(text);
	}

	passwordConfirmationOnChange(text) {
		this.props.passwordConfirmationChanged(text);
	}

	redirectOtp() {
		Actions.OtpResetPassword();
	}

	submitChangePassword() {
		const passwordError = validateClass(
			'password',
			this.props.password,
			validation,
			'password'
		);
		const passwordConfirmationError = validateClass(
			'passwordConfirmation',
			this.props.password_confirmation,
			validation,
			'passwordConfirmation'
		);
		this.setState({
			passwordError: passwordError,
			passwordConfirmationError: passwordConfirmationError
		});
		if (!passwordError && !passwordConfirmationError) {
			const payload = {
				password: this.props.password,
				password_confirmation: this.props.password_confirmation
			};
			this.props.submitChangePassword(payload);
		}
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
						secureTextEntry
						onChangeText={this.passwordOnChange.bind(this)}
						value={this.props.password}
						error={this.state.passwordError}
					/>
				</View>
				<View style={globalStyles.phoneRow}>
					<Input
						placeholder="Konfirmasi kata sandi"
						secureTextEntry
						onChangeText={this.passwordConfirmationOnChange.bind(this)}
						value={this.props.password_confirmation}
						error={this.state.passwordConfirmationError}
					/>
				</View>
				<Button onPress={this.submitChangePassword.bind(this)}>KIRIM</Button>
				<Loader visible={this.props.baseLoading} />
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		password: state.changePasswordReducer.password,
		password_confirmation: state.changePasswordReducer.password_confirmation,
		baseLoading: state.changePasswordReducer.baseLoading
	};
};

export default connect(mapStateToProps, actions)(ChangePasswordComponent);
