import {
	REGISTER_NAME_CHANGED,
	REGISTER_GENDER_CHANGED,
	REGISTER_CITY_CHANGED,
	REGISTER_BIRTHDATE_CHANGED,
	REGISTER_KTP_CHANGED,
	REGISTER_PHONE_CHANGED,
	REGISTER_PASSWORD_CHANGED,
	REGISTER_PASSWORD_CONFIRMATION_CHANGED,
	REGISTER_REFERENCE_CODE_CHANGED,
	REGISTER_IS_SMOKING,
	PROVINCES_RETRIEVED,
	REGISTER_PROVINCE_CHANGED
} from './types';

const INITIAL_STATE = {
	name: '',
	phone: '',
	password: '',
	password_confirmation: '',
	gender: '',
	birth_date: '',
	id_number: '',
	province: '',
	city: '',
	reference_code: '',
	is_smoking: 0,
	provinces: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case REGISTER_NAME_CHANGED:
			return { ...state, name: action.payload };
		case REGISTER_PHONE_CHANGED:
			return { ...state, phone: action.payload };
		case REGISTER_PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case REGISTER_PASSWORD_CONFIRMATION_CHANGED:
			return { ...state, password_confirmation: action.payload };
		case REGISTER_GENDER_CHANGED:
			return { ...state, gender: action.payload };
		case REGISTER_BIRTHDATE_CHANGED:
			return { ...state, birth_date: action.payload };
		case REGISTER_KTP_CHANGED:
			return { ...state, id_number: action.payload };
		case REGISTER_CITY_CHANGED:
			return { ...state, password: action.payload };
		case REGISTER_PROVINCE_CHANGED:
			return { ...state, province: action.payload };
		case REGISTER_REFERENCE_CODE_CHANGED:
			return { ...state, reference_code: action.payload };
		case REGISTER_IS_SMOKING:
			return { ...state, is_smoking: action.payload };
		case PROVINCES_RETRIEVED:
			return { ...state, provinces: action.payload.data };
		default:
			return state;
	}
};