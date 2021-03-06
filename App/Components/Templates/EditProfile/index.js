import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import RadioForm from 'react-native-simple-radio-button';
import { Input, Datepicker, Button, Loader, Select } from '@partials';
import PhotoUpload from 'react-native-photo-upload';
import validateClass from '@helpers/validator';
import { trackScreen } from '@helpers/analytic';
import styles from './styles';
import * as actions from './actions';
import validation from './validation';
import globalStyles from '../../../GlobalStyles';

const pageName = this.pageName = 'edit-profile';

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
			{ label: 'Laki - Laki', value: 'male' },
			{ label: 'Perempuan', value: 'female' }
		],
		city: '1',
		date: formatDate(),
		nameError: '',
		dateError: '',
		phoneError: '',
		idNumberError: '',
		cityError: '',
		provinceError: ''
	};

	async componentWillMount() {
		trackScreen(pageName);
		await this.props.getProvinceLists();
		await this.props.editOnWillMount();
		this.props.getCityLists(this.props.province_id);
	}

	onImageChanged(string) {
		this.props.editImageReplaced(string);
	}

	onNameChanged(text) {
		this.props.editNameChanged(text);
	}

	onGenderChanged(text) {
		this.props.editGenderChanged(text);
	}

	onDateChanged(text) {
		this.props.editBirthdateChanged(text);
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

	onProvinceChange(value) {
		this.props.editProvinceChanged(value);
		this.props.getCityLists(value);
	}

	onCityChange(value) {
		this.props.editCityChanged(value);
	}

	onEmailChange(value) {
		this.props.editEmailChanged(value);
	}

	onReferalChanged(value) {
		this.props.editReferalChanged(value);
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
		) && this.props.isOver ? validateClass(
			'idNumber',
			this.props.id_number.trim(),
			validation,
			'idNumber'
		) : null;
		const cityError = validateClass(
			'city',
			this.props.city_id,
			validation,
			'city'
		);
		const provinceError = validateClass(
			'province',
			this.props.province_id,
			validation,
			'province'
		);
		this.setState({
			nameError: nameError,
			phoneError: phoneError,
			dateError: dateError,
			idNumberError: idNumberError,
			cityError: cityError,
			provinceError: provinceError
		});
		if (!nameError && !phoneError && !dateError && !idNumberError && !provinceError && !cityError) {
			const payload = {
				name: this.props.name,
				gender: this.props.gender,
				birth_date: this.props.birth_date,
				id_number: this.props.id_number,
				phone: '+62' + this.props.phone,
				image: this.props.image,
				city_id: this.props.city_id,
				province_id: this.props.province_id,
				email: this.props.email,
				refferal_code: this.props.referral_code
			};
			this.props.submitEdit(payload);
		}
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

	renderKtp() {
		if (this.props.isOver) {
			return (
				<View style={globalStyles.phoneRow}>
					<Input
						placeholder="Nomor KTP"
						onChangeText={this.onKtpChanged.bind(this)}
						value={this.props.id_number}
						error={this.state.idNumberError}
					/>
				</View>
			);
		}
	}

	renderRefferalCode() {
			return (
				<View style={globalStyles.phoneRow}>
					<Input
						placeholder="Kode Referensi"
						onChangeText={this.onReferalChanged.bind(this)}
						value={this.props.referral_code}
						editable={this.props.already_referral ? false : true}
					/>
				</View>
			);
	}


	render() {
		if (this.props.profileLoaded) {
			return (
				<ScrollView contentContainerStyle={styles.container}>
					<View style={[globalStyles.phoneRow, { marginLeft: 16, flex: 1, justifyContent: 'flex-start' }]}>
						{/* <TouchableOpacity style={styles.avaPlaceHolder} onPress={this.onCameraPressed.bind(this)}>
							<Icon name="add-a-photo" size={30} />
						</TouchableOpacity> */}
						<PhotoUpload
							containerStyle={styles.avaPlaceHolder}
							onPhotoSelect={avatar => {
								if (avatar) {
									this.onImageChanged(avatar);
								}
							}}
						>
							<Image
								source={{
									uri: this.props.image_url
								}}
								style={{
									height: 85,
									width: 85,
									resizeMode: 'cover',
									borderWidth: 1,
									borderRadius: 8,
									borderColor: '#ececec'
								}}
							/>
						</PhotoUpload>
						<View style={{ flex: 3 }}>
							<Text style={[styles.avaPlaceHolderText, { color: '#000' }]}>Foto Profil</Text>
							<Text style={styles.avaPlaceHolderText}>
								Ukuran Maksimal 2Mb JPG, PNG
							</Text>
						</View>
					</View>
					<View style={globalStyles.phoneRow}>
						<Input
							placeholder="Nama Lengkap"
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
							initial={this.props.gender === 'male' ? 0 : 1}
							formHorizontal={true}
							labelHorizontal={true}
							buttonColor={'#DC1E2D'}
							buttonSize={14}
							selectedButtonColor={'#DC1E2D'}
							animation={false}
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
						<Datepicker
							date={this.props.birth_date}
							onDateChange={this.onDateChanged.bind(this)}
							error={this.state.dateError}
						/>
					</View>
					{this.props.isOver && !this.props.globalProfile.id_number ? <Text style={[globalStyles.validationText, { margin: 10, textAlign: 'left' }]}>
						Lengkapi nomor KTP anda
				</Text> : null}
					{this.renderKtp()}
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
					<View style={globalStyles.phoneRow}>
						<Input
							placeholder="Alamat Email"
							onChangeText={this.onEmailChange.bind(this)}
							value={this.props.email}
						/>
					</View>
					{this.renderRefferalCode()}
					<Button onPress={this.submitEdit.bind(this)}>KIRIM</Button>
					<Loader visible={this.props.baseLoading} text="updating..." />
				</ScrollView>
			);
		}
		return (
			<ScrollView contentContainerStyle={styles.container} />
		);
	}
}
const mapStateToProps = (state) => {
	const newProps = {
		name: state.editUserReducer.name,
		gender: state.editUserReducer.gender,
		birth_date: state.editUserReducer.birth_date,
		id_number: state.editUserReducer.id_number,
		phone: state.editUserReducer.phone,
		image_url: state.editUserReducer.image_url,
		profileLoaded: state.editUserReducer.profileLoaded,
		image: state.editUserReducer.image,
		baseLoading: state.editUserReducer.baseLoading,
		province_id: state.editUserReducer.province_id,
		city_id: state.editUserReducer.city_id,
		cities: state.editUserReducer.cities,
		provinces: state.editUserReducer.provinces,
		isOver: state.editUserReducer.isOver,
		email: state.editUserReducer.email,
		referral_code: state.editUserReducer.referral_code,
		already_referral: state.editUserReducer.already_referral,
		globalProfile: state.globalReducer.globalProfile
	};
	return newProps;
};

export default connect(mapStateToProps, actions)(EditProfileComponent);
