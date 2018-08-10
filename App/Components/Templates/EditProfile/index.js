import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import RadioForm from 'react-native-simple-radio-button';
import { Input, Datepicker, Button } from '@partials';
import Icon from 'react-native-vector-icons/MaterialIcons';
import validateClass from '@helpers/validator';
import styles from './styles';
import * as actions from './actions';
import validation from './validation';
import globalStyles from '../../../GlobalStyles';

const formatDate = () => {
	const date = new Date();
	const day = ('0' + date.getDate()).slice(-2);
	const month = ('0' + (date.getMonth() + 1)).slice(-2);
	const year = date.getFullYear();
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
		date: formatDate(),
		nameError: '',
		dateError: '',
		phoneError: '',
		idNumberError: ''
	};

	onNameChanged(text) {
		this.props.editNameChanged(text);
	}

	onGenderChanged(text) {
		this.props.editGenderChanged(text);
	}

	onDateChanged(text) {
		this.props.editBirthDateChanged(text);
	}

	onKtpChanged(text) {
		this.props.editKtpChanged(text);
	}

	onPhoneChanged(text) {
		this.props.editPhoneChanged(text);
	}

	onCameraPressed() {
		this.props.cameraTrigger();
	}

	submitEdit() {
		const nameError = validateClass(
			'name',
			this.props.name,
			validation,
			'name'
		);
		const phoneError = validateClass(
			'phone',
			this.props.phone,
			validation,
			'phone'
		);
		const dateError = validateClass(
			'date',
			this.props.birth_date,
			validation,
			'date'
		);
		const idNumberError = validateClass(
			'idNumber',
			this.props.id_number,
			validation,
			'idNumber'
		);
		this.setState({
			nameError: nameError,
			phoneError: phoneError,
			dateError: dateError,
			idNumberError: idNumberError
		});
		if (!nameError && !phoneError && !dateError && !idNumberError) {
			console.log('edit submitted');
		}
	}


	render() {
		return (
			<ScrollView contentContainerStyle={styles.container}>
				<View style={[globalStyles.phoneRow, { margin: 10 }]}>
					<TouchableOpacity style={styles.avaPlaceHolder} onPress={this.onCameraPressed.bind(this)}>
						<Icon name="add-a-photo" size={30} />
					</TouchableOpacity>
					<View style={{ flex: 3 }}>
						<Text style={styles.avaPlaceHolderText}>
							Foto Profil Ukuran Maksimal 200Kb JPG
						</Text>
					</View>
				</View>
				<View style={globalStyles.phoneRow}>
					<Input
						placeholder="Nama"
						onChangeText={this.onNameChanged.bind(this)}
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
						onPress={this.onGenderChanged.bind(this)}
					/>
				</View>
				<View style={globalStyles.phoneRow}>
					<Datepicker
						date={this.props.birth_date}
						onDateChange={this.onDateChanged.bind(this)}
						error={this.state.dateError}
					/>
				</View>
				<View style={globalStyles.phoneRow}>
					<Input
						placeholder="Nomor KTP"
						onChangeText={this.onKtpChanged.bind(this)}
						value={this.props.id_number}
						error={this.state.idNumberError}
					/>
				</View>
				<View style={globalStyles.phoneRow}>
					<Input
						value="+62"
						editable={false}
					/>
					<Input
						placeholder="Nomor Ponsel"
						keyboardType={'phone-pad'}
						onChangeText={this.onPhoneChanged.bind(this)}
						value={this.props.phone}
						error={this.state.phoneError}
						flexItem={{ flex: 3 }}
					/>
				</View>
				<Button>KIRIM</Button>
			</ScrollView>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		name: state.editUserReducer.name,
		gender: state.editUserReducer.phone,
		birth_date: state.editUserReducer.birth_date,
		id_number: state.editUserReducer.id_number,
		phone: state.editUserReducer.phone
	};
};

export default connect(mapStateToProps, actions)(EditProfileComponent);
