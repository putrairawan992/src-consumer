import React, { Component } from 'react';
import { View, Text, AppState } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import { Input, Button, LinkText, Loader } from '@partials';
import { CommonService } from '@services';
import CustomAlert from '@helpers/CustomAlert';
import { trackScreen } from '@helpers/analytic';
import { connect } from 'react-redux';
import moment from 'moment';
import { submitEdit } from '@templates/EditProfile/actions';
import { checkPermission, getToken, requestPermission } from '@helpers/firebase';
import { setAuthorization, setProfileFromRest, getExpiry, storeExpiryDate, hasSession, removeAuthFromStorage } from '@helpers/Storage';
import { revokeProfile } from '../../../Store/GlobalReducer/actions';
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
		baseLoading: false,
		timer: 0,
		loaded: false
	}

	componentWillMount() {
		this.generateTimer();
		trackScreen(pageName);
	}

	componentDidMount() {
		this.clockCall = setInterval(() => {
			this.decrementClock();
		}, 1000);
		AppState.addEventListener('change', this.generateTimer.bind(this));
	}

	componentWillUnmount() {
		clearInterval(this.clockCall);
		AppState.removeEventListener('change', this.generateTimer.bind(this));
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

	async submitCode() {
		const currentSession = await hasSession();
		if (this.state.firstInput && this.state.secondInput && this.state.thirdInput && this.state.fourthInput) {
			this.setState({ baseLoading: true });
			const verifyPayload = {
				password: this.state.firstInput + this.state.secondInput + this.state.thirdInput + this.state.fourthInput,
				username: currentSession.phone
			};
			if (this.props.editSession) {
				const finalPayload = {
					...this.props.editPayload,
					otp_code: this.state.firstInput + this.state.secondInput + this.state.thirdInput + this.state.fourthInput
				};
				this.props.submitEdit(finalPayload).then(() => {
					Actions.pop();
				})
					.finally(() => {
						this.setState({
							baseLoading: false
						});
					});
			}
			if (this.props.deleteSession) {
				const finalPayload = {
					otp_code: this.state.firstInput + this.state.secondInput + this.state.thirdInput + this.state.fourthInput
				};
				CommonService.deleteProfile(finalPayload).then(async() => {
					await removeAuthFromStorage();
					this.props.revokeProfile();
					Actions.reset('LoginPage');
				})
					.finally(() => {
						this.setState({
							baseLoading: false
						});
					});
			}
			else {
				CommonService.signIn(verifyPayload).then(async (response) => {
					await setAuthorization(response);
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

	async resendActivationCode() {
		const currentPromise = this.props.deleteSession ? CommonService.sendDeleteOtp : CommonService.resendActivationCode;
		this.setState({ baseLoading: true });
		const currentSession = await hasSession();
		const resendPayload = {
			type: this.props.editSession ? this.props.editSession.type : currentSession.type,
			phone: this.props.editSession ? this.props.editSession.phone : currentSession.phone
		};
		const deletePayload = {
			type: this.props.deleteSession ? this.props.deleteSession.type : null
		};
		const usedPayload = this.props.deleteSession ? deletePayload : resendPayload;
		currentPromise(usedPayload).then(async (response) => {
			await storeExpiryDate(response.expiry_at);
			this.setState({ baseLoading: false });
			this.generateTimer();
			CustomAlert(null, 'Kode verifikasi telah terikirim.', [{ text: 'OK' }]);
		}).catch(() => {
			this.setState({ baseLoading: false });
		});
	}


	async generateTimer() {
		const currentExpiry = await getExpiry();
		this.setState({
			loaded: true,
			timer: currentExpiry !== null ? moment(currentExpiry, 'YYYY-MM-DD HH:mm:ss').diff(moment(), 'seconds') : 0
		});
	}

	decrementClock = () => {
		this.setState((prevstate) => {
			if (prevstate.timer > 0) {
				return { timer: prevstate.timer - 1 };
			}
			return { timer: 0 };
		});
	};

	renderTimer() {
		if (this.state.loaded) {
			if (this.state.timer > 0) {
				return (
					<Text style={styles.forgotPasswordText}>
						Sisa Waktu Penggunaan Kode Verifikasi
									{'\n'}
						{moment.utc(this.state.timer * 1000).format('mm:ss')}
					</Text>
				);
			}
			return (
				<Text style={[styles.forgotPasswordText, { fontSize: 12 }]}>
					Waktu Penggunaan Kode Verifikasi Anda Telah Habis, Kirim Ulang Kode Verifikasi Untuk Melanjutkan
							</Text>
			);
		}
	}

	render() {
		const displayNumber = this.props.editSession ? this.props.editSession.phone : this.props.phoneNumber;
		return (
			<LinearGradient
				colors={['#C31432', '#240B36']}
				start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
				locations={[0.2, 1]}
				style={[styles.container, this.props.title ? { borderTopWidth: 1, borderColor: '#000' } : false]}
			>
				<Text style={styles.forgotPasswordText}>
					Masukkan 4 Digit Kode Verifikasi yang dikirim melalui {displayNumber.substring(0, displayNumber.length - 3)} XXX
				</Text>
				{this.renderTimer()}
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

const checkPermissionVal = async () => {
	const permission = await checkPermission();
	if (permission) {
		getToken();
	}
	else {
		requestPermission();
	}
};

export default connect(null, { submitEdit, revokeProfile })(OtpResetPasswordComponent);
