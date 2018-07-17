import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from '@partials';
import styles from './styles';
import globalStyles from '../../../GlobalStyles';

const successImg = require('@images/sucess-icon.png');

class SuccessResetPasswordComponent extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Image source={successImg} style={styles.successImg} />
				<Text style={[globalStyles.singlePageText, { marginTop: 31 }]}>Password akun anda telah sukses direset</Text>
				<Button>OKE</Button>
			</View>
		)
	}
}

export default SuccessResetPasswordComponent;