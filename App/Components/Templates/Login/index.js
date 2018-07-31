import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Input, Button, LightText, LinkText, Loader } from '@partials';
import styles from './styles';
import globalStyles from '../../../GlobalStyles';
import * as actions from './actions';
import validation from './validation';
import validateClass from '@helpers/validator';

class LoginComponent extends Component {
	state = {
		phoneError: '',
		passwordError: ''
	};
	onPhoneChange(text) {
		this.props.loginPhoneChanged(text);
	}

	onPasswordChange(text) {
		this.props.loginPasswordChanged(text);
	}

	componentWillUnmount() {
		this.props.loginPageUnmount();
	}

	submitLogin() {
		const phoneError = validateClass(
			'phone',
			this.props.phone,
			validation,
			'phone'
		);
		const passwordError = validateClass(
			'password',
			this.props.password,
			validation,
			'password'
		);
		this.setState({
			phoneError: phoneError,
			passwordError: passwordError
		});

		if (!phoneError && !passwordError) {
			const payload = {
				username: '0' + this.props.phone,
				password: this.props.password
			};
			this.props.submitSignIn(payload);
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={globalStyles.phoneRow}>
					<Input value="+62" editable={false} />
					<Input
						placeholder="Nomor Ponsel"
						keyboardType={'phone-pad'}
						flexItem={{ flex: 3 }}
						onChangeText={this.onPhoneChange.bind(this)}
						value={this.props.phone}
						error={this.state.phoneError}
					/>
				</View>
				<View style={globalStyles.phoneRow}>
					<Input
						placeholder="Password"
						secureTextEntry
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
						error={this.state.passwordError}
					/>
				</View>
				<Button onPress={this.submitLogin.bind(this)}>MASUK</Button>
				<View style={globalStyles.phoneRow}>
					<LightText>Pengguna Baru</LightText>
					<LinkText style={{ marginLeft: 0 }}>Daftar disini</LinkText>
				</View>
				<View style={globalStyles.phoneRow}>
					<LightText style={{ marginTop: 0 }}>
						Lupa kata sandi?
					</LightText>
					<LinkText
						style={{ marginLeft: 0, marginTop: 0 }}
						onPress={this.redirectForgotPassword.bind(this)}
					>
						Klik disini
					</LinkText>
				</View>
				<Loader visible={this.props.baseLoading} text="Login" />
			</View>
		);
	}

	redirectForgotPassword() {
		Actions.ForgotPassword();
	}
}

const mapStateToProps = state => {
	return {
		phone: state.signInReducer.phone,
		password: state.signInReducer.password,
		baseLoading: state.signInReducer.baseLoading
	};
};

export default connect(
	mapStateToProps,
	actions
)(LoginComponent);