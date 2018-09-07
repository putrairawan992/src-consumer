import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
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
		oldPasswordError: '',
		passwordError: '',
		passwordConfirmationError: ''
	}

	componentWillUnmount() {
		this.props.changePassPageUnmount();
	}

	oldPasswordOnChange(text) {
		this.props.oldPasswordChanged(text);
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
		const oldPasswordError = validateClass(
			'password',
			this.props.old_password,
			validation,
			'password'
		) && !this.props.requestReset;
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
			'passwordConfirmation',
			'password',
			this.props.password
		);
		this.setState({
			oldPasswordError: oldPasswordError,
			passwordError: passwordError,
			passwordConfirmationError: passwordConfirmationError
		});
		if (!passwordError && !passwordConfirmationError && !oldPasswordError) {
			const payload = {
				old_password: this.props.old_password,
				password: this.props.password,
				password_confirmation: this.props.password_confirmation
			};
			this.props.submitChangePassword(payload, this.props.requestReset);
		}
	}

	renderCurrentPassword() {
		if (!this.props.requestReset) {
			return (
				<View style={globalStyles.phoneRow}>
				<Input
					placeholder="Kata sandi sekarang"
					secureTextEntry
					onChangeText={this.oldPasswordOnChange.bind(this)}
					value={this.props.old_password}
					error={this.state.oldPasswordError}
				/>
			</View>
			);
		}
	}

	render() {
		return (
			<ScrollView contentContainerStyle={styles.container}>
				<Text style={globalStyles.centeredText}>
					Masukkan kata sandi baru untuk akun anda
				</Text>
				{this.renderCurrentPassword()}
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
			</ScrollView>
		);
	}
}

const mapStateToProps = state => {
	return {
		old_password: state.changePasswordReducer.old_password,
		password: state.changePasswordReducer.password,
		password_confirmation: state.changePasswordReducer.password_confirmation,
		baseLoading: state.changePasswordReducer.baseLoading
	};
};

export default connect(mapStateToProps, actions)(ChangePasswordComponent);
