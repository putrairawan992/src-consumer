import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { Input, Select, Datepicker, Button, Checkbox } from '@partials';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import globalStyles from '../../../GlobalStyles';

const items = [
	{
		label: 'Jakarta',
		value: '1'
	},
	{
		label: 'Bandung',
		value: '2'
	}
];

const formatDate = () => {
	date = new Date();
	var day = ('0' + date.getDate()).slice(-2);
	var month = ('0' + (date.getMonth() + 1)).slice(-2);
	var year = date.getFullYear();
	return year + '-' + month + '-' + day;
};

class RegisterComponent extends Component {
	state = {
		value: '',
		types: [
			{ label: 'Laki - Laki', value: 0 },
			{ label: 'Perempuan', value: 1 }
		],
		city: '1',
		date: formatDate(),
		isSmoking: true,
		term: true
	};
	types = [];

	render() {
		return (
			<ScrollView contentContainerStyle={styles.container}>
				<View style={globalStyles.phoneRow}>
					<Input placeholder="Nama" />
				</View>
				<View style={globalStyles.phoneRow}>
					<Text style={{ margin: 10, flex: 1 }}>Jenis Kelamin</Text>
				</View>
				<View style={globalStyles.phoneRow}>
					<RadioForm
						radio_props={this.state.types}
						initial={0}
						formHorizontal={true}
						labelHorizontal={true}
						buttonColor={'#DC1E2D'}
						buttonSize={14}
						selectedButtonColor={'#DC1E2D'}
						animation={true}
						style={{ flex: 1, margin: 10 }}
						buttonWrapStyle={{ marginRight: 20 }}
						labelStyle={{
							paddingRight: 20,
							fontFamily: 'ProximaNova-Regular',
							fontSize: 14,
							lineHeight: 20
						}}
						onPress={value => {
							this.setState({ value: value });
						}}
					/>
				</View>
				<View style={globalStyles.phoneRow}>
					<Select
						items={items}
						value={this.state.city}
						onValueChange={(itemValue, itemIndex) =>
							this.setState({ city: itemValue })
						}
					/>
				</View>
				<View style={globalStyles.phoneRow}>
					<Datepicker date={this.state.date} />
				</View>
				<View style={globalStyles.phoneRow}>
					<Input placeholder="Nomor KTP" />
				</View>
				<View style={globalStyles.phoneRow}>
					<Input value="+62" editable={false} />
					<Input
						placeholder="Nomor Ponsel"
						keyboardType={'phone-pad'}
						flexItem={{ flex: 3 }}
					/>
				</View>
				<View style={globalStyles.phoneRow}>
					<Input placeholder="Kata sandi" secureTextEntry />
				</View>
				<View style={globalStyles.phoneRow}>
					<Input
						placeholder="Konfirmasi kata sandi"
						secureTextEntry
					/>
				</View>
				<View style={globalStyles.phoneRow}>
					<Input placeholder="Kode Referensi" />
				</View>
				<View style={globalStyles.phoneRow}>
					<Checkbox
						status={this.state.isSmoking}
						type="smoking"
						onPress={() =>
							this.setState({ isSmoking: !this.state.isSmoking })
						}
					/>
				</View>
				<View style={globalStyles.phoneRow}>
					<Checkbox
						title="Saya telah membaca dan menyetujui"
						status={this.state.term}
						type="term"
						onPress={() =>
							this.setState({ term: !this.state.term })
						}
					/>
				</View>
				<Button>KIRIM</Button>
			</ScrollView>
		);
	}
}

export default RegisterComponent;