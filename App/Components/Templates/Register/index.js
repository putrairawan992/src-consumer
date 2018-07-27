import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { connect } from 'react-redux';
import { Input, Select, Datepicker, Button, Checkbox } from '@partials';
import styles from './styles';
import * as actions from './actions';
import validation from './validation';
import validateClass from '@helpers/validator';
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
			{ label: 'Laki - Laki', value: 'male' },
			{ label: 'Perempuan', value: 'female' }
		],
		city: '1',
		date: formatDate(),
		isSmoking: true,
		term: true,
		nameError: '',
		passwordError: '',
		cityError: ''
	};

	// method from actions

	onNameChange(text) {
		this.props.registerNameChanged(text);
	}

	onGenderChange(text) {
		this.props.registerGenderChanged(text);
	}

	onProvinceChange(value, index) {
		this.props.registerProvinceChanged(value);
		this.props.getCityLists(value);
	}

	onCityChange(value, index) {
		this.props.registerCityChanged(value);
	}

	submitRegister() {
		const nameError = validateClass(
			'name',
			this.props.name,
			validation,
			'name'
		);
		const cityError = validateClass('city', this.props.city_id, validation, 'city');
		const provinceError = validateClass('province', this.props.province_id, validation, 'province');
		this.setState({
			nameError: nameError,
			cityError: cityError,
			provinceError: provinceError
		});
	}

	componentDidMount() {
		this.props.getProvinceLists();
	}

	render() {
		return (
			<ScrollView contentContainerStyle={styles.container}>
				<View style={globalStyles.phoneRow}>
					<Input
						placeholder="Nama"
						onChangeText={this.onNameChange.bind(this)}
						value={this.props.name}
						error={this.state.nameError}
					/>
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
						onPress={this.onGenderChange.bind(this)}
					/>
				</View>
				<View style={globalStyles.phoneRow}>
					<Select
						items={this.props.provinces}
						placeholder="Pilih Provinsi"
						iteratorKey={'id'}
						iteratorLabel={'name'}
						value={this.props.province_id}
						onValueChange={this.onProvinceChange.bind(this)}
						error={this.state.provinceError}
					/>
				</View>
				{this.renderCitySelect()}
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
				<Button onPress={this.submitRegister.bind(this)}>KIRIM</Button>
			</ScrollView>
		);
	}

	renderCitySelect() {
		if (this.props.province_id && this.props.cities.length > 1) {
			return (
				<View style={globalStyles.phoneRow}>
				<Select
					items={this.props.cities}
					placeholder="Pilih Kota"
					iteratorKey={'id'}
					iteratorLabel={'name'}
					value={this.props.city_id}
					onValueChange={this.onCityChange.bind(this)}
					error={this.state.cityError}
				/>
				</View>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		name: state.signUpReducer.name,
		phone: state.signUpReducer.phone,
		password: state.signUpReducer.password,
		password_confirmation: state.signUpReducer.password_confirmation,
		gender: state.signUpReducer.gender,
		birth_date: state.signUpReducer.birth_date,
		id_number: state.signUpReducer.id_number,
		city_id: state.signUpReducer.city_id,
		reference_code: state.signUpReducer.reference_code,
		is_smoking: state.signUpReducer.is_smoking,
		provinces: state.signUpReducer.provinces,
		province_id: state.signUpReducer.province_id,
		cities: state.signUpReducer.cities
	};
};

export default connect(
	mapStateToProps,
	actions
)(RegisterComponent);