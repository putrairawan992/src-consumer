import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import { Input, Button, LinkText } from '@partials';
import styles from './styles';

class OtpResetPasswordComponent extends Component {
	constructor(props) {
		super(props);

		this.focusNextField = this.focusNextField.bind(this);
		this.inputs = {};
	}

	render() {
		return (
			<LinearGradient
				colors={['#DC1E2D', '#B11522']}
				location={[0, 1]}
				style={styles.container}
			>
				<Text style={styles.forgotPasswordText}>
					Masukkan 6 Digit Kode Verifikasi yang dikirim melalui +62
					812 87 11 XXX
				</Text>
				<View style={styles.inputContainerStyle}>
					<Input
						style={styles.singularInputStyle}
						maxLength={1}
						onChangeText={num => {
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
							this.nextHandler(num, '5', '3');
						}}
						onRef={ref => {
							this.inputs['4'] = ref;
						}}
						keyboardType={'numeric'}
						onKeyPress={(e) => {
							this.handleKeyPress(e.nativeEvent.text, e.nativeEvent.key, '5', '3');
						}}
					/>
					<Input
						style={styles.singularInputStyle}
						maxLength={1}
						onChangeText={num => {
							this.nextHandler(num, '6', '4');
						}}
						onRef={ref => {
							this.inputs['5'] = ref;
						}}
						keyboardType={'numeric'}
						onKeyPress={(e) => {
							this.handleKeyPress(e.nativeEvent.text, e.nativeEvent.key, '6', '4');
						}}
					/>
					<Input
						style={styles.singularInputStyle}
						maxLength={1}
						onRef={ref => {
							this.inputs['6'] = ref;
						}}
						onChangeText={num => {
							this.nextHandler(num, null, '5');
						}}
						keyboardType={'numeric'}
						onKeyPress={(e) => {
							this.handleKeyPress(e.nativeEvent.text, e.nativeEvent.key, null, '5');
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
					onPress={this.redirectSuccessResetPassword.bind(this)}
				>
					KIRIM
				</Button>
				<LinkText
					style={{ marginLeft: 0, marginTop: 30, color: '#FFF' }}
				>
					Kirim Ulang Kode Verifikasi
				</LinkText>
			</LinearGradient>
		);
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
			if (previousField !== null && previousField !== undefined)
				this.focusNextField(previousField);
		}
	}

	redirectSuccessResetPassword() {
		Actions.SuccessResetPassword();
	}

	handleKeyPress(textValue, keyValue, nextStep, previousStep) {
		if (keyValue == 'Backspace') {
			if (previousStep) {
				this.focusNextField(previousStep);
			}
		}
	}
}

export default OtpResetPasswordComponent;