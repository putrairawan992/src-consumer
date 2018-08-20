import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Input, Button, Loader } from '@partials';
import { connect } from 'react-redux';
import { CommonService } from '@services';
import { removeAuthFromStorage } from '@helpers/Storage';
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import globalStyles from '../../../GlobalStyles';
import * as globalActions from '../../../Store/GlobalReducer/actions';


class DeleteAccountComponent extends Component {
	state = {
		password: '',
		password_confirmation: '',
		onSubmit: false
	}

	onPasswordChange(text) {
		this.setState({
			password: text
		});
	}

	onPasswordConfirmationChange(text) {
		this.setState({
			password_confirmation: text
		});
	}

	submitDelete() {
		this.setState({
			onSubmit: true
		});
		const payload = {
			password: this.state.password,
			password_confirmation: this.state.password_confirmation
		};
        CommonService.deleteUser(payload).then(async() => {
			await removeAuthFromStorage();
			this.props.revokeProfile();
			this.setState({
				onSubmit: false
			});
			Actions.reset('WelcomeScreen');
		});
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.warning}>
					<Icon name="warning" size={26} />
					<Text style={styles.warningText}>PERINGATAN</Text>
				</View>
				<View style={styles.info}>
					<View style={{ flexDirection: 'column' }}>
						<Text style={globalStyles.leftedText}>
							Anda akan menghapus keseluruhan data dan akun anda
							secara permanen
						</Text>
						<Text style={globalStyles.leftedText}>
							Dengan demikian anda tidak akan dapat login
							menggunakan akun anda kembali pada aplikasi ini
						</Text>
					</View>
				</View>
				<View style={globalStyles.phoneRow}>
					<Input secureTextEntry placeholder="Kata sandi" onChangeText={this.onPasswordChange.bind(this)} style={{ marginHorizontal: 0 }} />
				</View>
				<View style={globalStyles.phoneRow}>
					<Input secureTextEntry placeholder="Konfirmasi kata sandi" onChangeText={this.onPasswordConfirmationChange.bind(this)} style={{ marginHorizontal: 0 }} />
				</View>
				<Button style={{ marginHorizontal: 0 }} onPress={this.submitDelete.bind(this)}>HAPUS</Button>
				<Loader visible={this.state.onSubmit} />
			</View>
		);
	}
}

export default connect(null, globalActions)(DeleteAccountComponent);
