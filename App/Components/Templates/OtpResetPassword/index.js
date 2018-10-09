import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import { checkPermission, getToken, requestPermission } from '@helpers/firebase';
import { Input, Button, LinkText, Loader } from '@partials';
import { CommonService } from '@services';
import CustomAlert from '@helpers/CustomAlert';
import { trackScreen } from '@helpers/analytic';
import { setAuthorization, setProfileFromRest } from '@helpers/Storage';
import styles from './styles';

const pageName = this.pageName = 'otp';

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
	
	componentWillMount() {
		trackScreen(pageName);
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

	redirectDashboard() {
		Actions.MainConsumer();
	}

	redirectChangePassword() {
		Actions.ChangePassword({ requestReset: true });
	}

	handleKeyPress(textValue, keyValue, nextStep, previousStep) {
		if (keyValue === 'Backspace') {
			if (previousStep) {
				this.focusNextField(previousStep);
			}
		}
	}

	submitCode() {
		this.setState({ baseLoading: true });
		if (this.state.firstInput && this.state.secondInput && this.state.thirdInput && this.state.fourthInput) {
			const verifyPayload = {
				code: this.state.firstInput + this.state.secondInput + this.state.thirdInput + this.state.fourthInput,
				phone: (this.props.requestReset) ? this.props.phoneNumber : null
			};
			if (this.props.requestReset) {
				CommonService.resetPassword(verifyPayload).then(async (response) => {
					this.setState({ baseLoading: false });
					await setAuthorization(response.token);
					this.redirectChangePassword();
				}).catch(() => {
					this.setState({ baseLoading: false });
				});
			}
			else {
				CommonService.verifyUser(verifyPayload).then(async () => {
					const check = await setProfileFromRest();
					this.setState({ baseLoading: false });
					if (check) {
						checkPermissionVal();
						this.redirectDashboard();
					}
				}).catch(() => {
					this.setState({ baseLoading: false });
				});
			}
		}
		else {
			CustomAlert(null, 'Lengkapi kode verifikasi anda.', [{ text: 'OK' }]);
		}
	}

	resendActivationCode() {
		this.setState({ baseLoading: true });
		const resendPayload = {
			type: (this.props.requestReset) ? 'reset-password' : 'verify-account',
			phone: (this.props.requestReset) ? this.props.phoneNumber : null
		};
		CommonService.resendActivationCode(resendPayload).then(() => {
			this.setState({ baseLoading: false });
			CustomAlert(null, 'Kode verifikasi telah terikirim.', [{ text: 'OK' }]);
		}).catch(() => {
			this.setState({ baseLoading: false });
		});
	}

	render() {
		return (
			<LinearGradient
				colors={['#C31432', '#240B36']}
				start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
				locations={[0.2, 1]}
				style={[styles.container, this.props.title ? { borderTopWidth: 1, borderColor: '#000' } : false]}
			>
				<Text style={styles.forgotPasswordText}>
					Masukkan 4 Digit Kode Verifikasi yang dikirim melalui {this.props.phoneNumber.substring(0, this.props.phoneNumber.length - 3)} XXX
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

const checkPermissionVal = async() => {
    const permission = await checkPermission();
    if (permission) {
      getToken();
    }
    else {
      requestPermission();
    }
};

export default OtpResetPasswordComponent;
