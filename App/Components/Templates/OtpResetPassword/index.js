import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import { Input, Button, LinkText, Loader } from '@partials';
import { CommonService } from '@services';
import CustomAlert from '@helpers/CustomAlert';
import styles from './styles';

class OtpResetPasswordComponent extends Component {
	constructor(props) {
		super(props);

		this.focusNextField = this.focusNextField.bind(this);
		this.inputs = {};
	}

	state = {
		firstInput: '',
		secondInput: '',
		thirdInput: '',
		fourthInput: '',
		baseLoading: false
	}

	//Helper function
	focusNextField(nextField) {
		this.inputs[nextField].focus();
	}

	nextHandler(num, nextField, previousField) {
		if (num && num.length === 1) {
			if (nextField !== null && nextField !== undefined) {
				this.focusNextField(nextField);
			} //function call. '2' ref to next input ref
		} else if (!num || num.length === 0) {
			if (previousField !== null && previousField !== undefined) {
				this.focusNextField(previousField);
			}
		}
	}

	redirectSuccessResetPassword() {
		Actions.SuccessResetPassword();
	}

	handleKeyPress(textValue, keyValue, nextStep, previousStep) {
		if (keyValue === 'Backspace') {
			if (previousStep) {
				this.focusNextField(previousStep);
			}
		}
	}

	submitCode() {
		if (this.state.firstInput && this.state.secondInput && this.state.thirdInput && this.state.fourthInput) { }
		else {
			CustomAlert(null, 'Lengkapi kode verifikasi anda.', [{ text: 'OK' }]);
		}
	}

	resendActivationCode() {
		this.setState({ baseLoading: true });
		const resendPayload = {
			type: 'verify-account'
		};
		CommonService.resendActivationCode(resendPayload).then(() => {
			CustomAlert(null, 'Kode verifikasi telah terikirim.', [{ text: 'OK' }]);
			this.setState({ baseLoading: false });
		}).catch(() => {
			this.setState({ baseLoading: false });
		});
	}

	render() {
		return (
			<LinearGradient
				colors={['#DC1E2D', '#B11522']}
				location={[0, 1]}
				style={[styles.container, this.props.title ? { borderTopWidth: 1, borderColor: '#d3d3d3' } : false]}
			>
				<Text style={styles.forgotPasswordText}>
					Masukkan 6 Digit Kode Verifikasi yang dikirim melalui {this.props.phoneNumber.substring(0, this.props.phoneNumber.length - 3)} XXX
				</Text>
				<View style={styles.inputContainerStyle}>
					<Input
						style={styles.singularInputStyle}
						maxLength={1}
						onChangeText={num => {
							this.setState({ firstInput: num });
							this.nextHandler(num, '2');
						}}
						onRef={ref => {
							this.inputs['1'] = ref;
						}}
						keyboardType={'numeric'}
						onKeyPress={(e) => {
							this.handleKeyPress(e.nativeEvent.text, e.nativeEvent.key, '2', null);
						}}
					/>
					<Input
						style={styles.singularInputStyle}
						maxLength={1}
						onChangeText={num => {
							this.setState({ secondInput: num });
							this.nextHandler(num, '3', '1');
						}}
						onRef={ref => {
							this.inputs['2'] = ref;
						}}
						keyboardType={'numeric'}
						onKeyPress={(e) => {
							this.handleKeyPress(e.nativeEvent.text, e.nativeEvent.key, '3', '1');
						}}
					/>
					<Input
						style={styles.singularInputStyle}
						maxLength={1}
						onChangeText={num => {
							this.setState({ thirdInput: num });
							this.nextHandler(num, '4', '2');
						}}
						onRef={ref => {
							this.inputs['3'] = ref;
						}}
						keyboardType={'numeric'}
						onKeyPress={(e) => {
							this.handleKeyPress(e.nativeEvent.text, e.nativeEvent.key, '4', '2');
						}}
					/>
					<Input
						style={styles.singularInputStyle}
						maxLength={1}
						onChangeText={num => {
							this.setState({ fourthInput: num });
							this.nextHandler(num, null, '3');
						}}
						onRef={ref => {
							this.inputs['4'] = ref;
						}}
						keyboardType={'numeric'}
						onKeyPress={(e) => {
							this.handleKeyPress(e.nativeEvent.text, e.nativeEvent.key, null, '3');
						}}
					/>
				</View>
				<Button
					style={{
						margin: 8,
						marginTop: 21,
						backgroundColor: 'transparent',
						borderWidth: 1,
						borderColor: '#fff'
					}}
					onPress={this.submitCode.bind(this)}
				>
					KIRIM
				</Button>
				<LinkText
					style={{ marginLeft: 0, marginTop: 30, color: '#FFF' }}
					onPress={this.resendActivationCode.bind(this)}
				>
					Kirim Ulang Kode Verifikasi
				</LinkText>
				<Loader visible={this.state.baseLoading} text="Mengirim..." />
			</LinearGradient>
		);
	}
}

export default OtpResetPasswordComponent;
