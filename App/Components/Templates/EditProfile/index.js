import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { Input, Select, Datepicker, Button } from '@partials';
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

class EditProfileComponent extends Component {
	state = {
		value: '',
		types: [
			{ label: 'Laki - Laki', value: 0 },
			{ label: 'Perempuan', value: 1 }
		],
		city: '1',
		date: formatDate()
	};
	types = [];

	render() {
		return (
			<ScrollView contentContainerStyle={styles.container}>
				<View style={[globalStyles.phoneRow, { margin: 10 }]}>
					<TouchableOpacity style={styles.avaPlaceHolder}>
						<Icon name="add-a-photo" size={30} />
					</TouchableOpacity>
					<View style={{ flex: 3 }}>
						<Text style={styles.avaPlaceHolderText}>
							Foto Profil Ukuran Maksimal 200Kb JPG
						</Text>
					</View>
				</View>
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
					<Datepicker date={this.state.date} />
				</View>
				<View style={globalStyles.phoneRow}>
					<Input placeholder="Nomor KTP" />
				</View>
				<View style={globalStyles.phoneRow}>
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
				<Button>KIRIM</Button>
			</ScrollView>
		);
	}
}

export default EditProfileComponent;