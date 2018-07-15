import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Input, Button, LightText, LinkText } from '@partials';
import styles from './styles';

class LoginComponent extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.phoneRow}>
				<Input
					value="+62"
					editable={false}
				/>
				<Input
					placeholder="Nomor Ponsel"
					keyboardType={'phone-pad'}
					flexItem={{ flex: 3 }}
				/>
				</View>
				<View style={styles.phoneRow}>
				<Input
					placeholder="Password"
					secureTextEntry
				/>
				</View>
				<Button onPress={() => { Actions.main(); }}>MASUK</Button>
				<View style={styles.phoneRow}>
				<LightText>Pengguna Baru</LightText>
				<LinkText style={{ marginLeft: 0 }}>Daftar disini</LinkText>
				</View>
				<View style={styles.phoneRow}>
				<LightText style={{ marginTop: 0 }}>Lupa kata sandi?</LightText>
				<LinkText style={{ marginLeft: 0, marginTop: 0 }}>Klik disini</LinkText>
				</View>
			</View>
		);
	}
}

export default LoginComponent;