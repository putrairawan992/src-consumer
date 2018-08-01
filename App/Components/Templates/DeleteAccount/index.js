import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Input, Button } from '@partials';
import styles from './styles';
import globalStyles from '../../../GlobalStyles';

class DeleteAccountComponent extends Component {
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
					<Input placeholder="Kata sandi" style={{ marginHorizontal: 0 }} />
				</View>
				<View style={globalStyles.phoneRow}>
					<Input placeholder="Konfirmasi kata sandi" style={{ marginHorizontal: 0 }} />
				</View>
				<Button style={{ marginHorizontal: 0 }}>HAPUS</Button>
			</View>
		);
	}
}

export default DeleteAccountComponent;
