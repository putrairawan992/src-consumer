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
	REGISTER_PROVINCE_CHANGED,
	CITIES_RETRIEVED,
	REGISTER_PAGE_UNMOUNT,
	REGISTER_IS_TERM_CONDITION_APPROVED,
	SIGN_UP_PROCCESS,
	SIGN_UP_SUCCESS,
	SIGN_UP_FAIL
} from './types';

const INITIAL_STATE = {
	name: '',
	phone: '',
	password: '',
	password_confirmation: '',
	gender: 'male',
	birth_date: '',
	id_number: '',
	province_id: '',
	city_id: '',
	reference_code: '',
	is_smoking: false,
	is_approved: false,
	provinces: [],
	cities: [],
	baseLoading: false
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
		case REGISTER_PROVINCE_CHANGED:
			return { ...state, province_id: action.payload, cities: [], city_id: '' };
		case REGISTER_REFERENCE_CODE_CHANGED:
			return { ...state, reference_code: action.payload };
		case REGISTER_IS_SMOKING:
			return { ...state, is_smoking: !state.is_smoking };
		case REGISTER_IS_TERM_CONDITION_APPROVED:
			return { ...state, is_approved: !state.is_approved };
		case PROVINCES_RETRIEVED:
			return { ...state, provinces: action.payload.data };
		case CITIES_RETRIEVED:
			return { ...state, cities: action.payload.data };
		case REGISTER_CITY_CHANGED:
			return { ...state, city_id: action.payload };
		case SIGN_UP_PROCCESS:
			return { ...state, baseLoading: true };
		case SIGN_UP_SUCCESS:
			return { ...state, baseLoading: false }; 
		case SIGN_UP_FAIL:
			return { ...state, baseLoading: false };
		case REGISTER_PAGE_UNMOUNT:
			return INITIAL_STATE;
		default:
			return state;
	}
};
