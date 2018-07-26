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
    REGISTER_IS_TERM_CONDITION_APPROVED
} from './types';

export const registerNameChanged = (text) => {
	return {
		type: REGISTER_NAME_CHANGED,
		payload: text
	};
};

export const registerGenderChanged = (value) => {
	return {
		type: REGISTER_GENDER_CHANGED,
		payload: value
	};
};

export const registerCityChanged = (text) => {
	return {
		type: REGISTER_CITY_CHANGED,
		payload: text
	};
};

export const registerBirthdateChanged = (text) => {
	return {
		type: REGISTER_BIRTHDATE_CHANGED,
		payload: text
	};
};

export const registerKtpChanged = (text) => {
	return {
		type: REGISTER_KTP_CHANGED,
		payload: text
	};
};

export const registerPhoneChanged = (text) => {
	return {
		type: REGISTER_PHONE_CHANGED,
		payload: text
	};
};

export const registerPasswordChanged = (text) => {
	return {
		type: REGISTER_PASSWORD_CHANGED,
		payload: text
	};
};

export const registerPasswordConfirmationChanged = (text) => {
	return {
		type: REGISTER_PASSWORD_CONFIRMATION_CHANGED,
		payload: text
	};
};

export const registerReferenceCodeChanged = (text) => {
	return {
		type: REGISTER_REFERENCE_CODE_CHANGED,
		payload: text
	};
};

export const registerIsSmoking = (value) => {
	return {
		type: REGISTER_IS_SMOKING,
		payload: value
	};
};

export const registerIsTermAndConditionApproved = (value) => {
	return {
		type: REGISTER_IS_TERM_CONDITION_APPROVED,
		payload: value
	};
};
