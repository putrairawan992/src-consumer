import { Actions } from 'react-native-router-flux';
import { CommonService } from '@services';
import { setAuthorization } from '@helpers/Storage';
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
	REGISTER_IS_TERM_CONDITION_APPROVED,
	PROVINCES_RETRIEVED,
	REGISTER_PROVINCE_CHANGED,
	REGISTER_EMAIL_CHANGED,
	CITIES_RETRIEVED,
	REGISTER_PAGE_UNMOUNT,
	SIGN_UP_PROCCESS,
	SIGN_UP_SUCCESS,
	SIGN_UP_FAIL
} from './types';

export const registerNameChanged = text => {
	return {
		type: REGISTER_NAME_CHANGED,
		payload: text
	};
};

export const registerGenderChanged = value => {
	return {
		type: REGISTER_GENDER_CHANGED,
		payload: value
	};
};

export const registerCityChanged = text => {
	return {
		type: REGISTER_CITY_CHANGED,
		payload: text
	};
};

export const registerProvinceChanged = text => {
	return {
		type: REGISTER_PROVINCE_CHANGED,
		payload: text
	};
};

export const registerBirthdateChanged = text => {
	return {
		type: REGISTER_BIRTHDATE_CHANGED,
		payload: text
	};
};

export const registerKtpChanged = text => {
	return {
		type: REGISTER_KTP_CHANGED,
		payload: text
	};
};

export const registerPhoneChanged = text => {
	return {
		type: REGISTER_PHONE_CHANGED,
		payload: text
	};
};

export const registerPasswordChanged = text => {
	return {
		type: REGISTER_PASSWORD_CHANGED,
		payload: text
	};
};

export const registerPasswordConfirmationChanged = text => {
	return {
		type: REGISTER_PASSWORD_CONFIRMATION_CHANGED,
		payload: text
	};
};

export const registerReferenceCodeChanged = text => {
	return {
		type: REGISTER_REFERENCE_CODE_CHANGED,
		payload: text
	};
};

export const registerEmailChanged = text => {
	return {
		type: REGISTER_EMAIL_CHANGED,
		payload: text
	};
};

export const registerIsSmoking = value => {
	return {
		type: REGISTER_IS_SMOKING,
		payload: value
	};
};

export const registerIsTermAndConditionApproved = value => {
	return {
		type: REGISTER_IS_TERM_CONDITION_APPROVED,
		payload: value
	};
};

export const registerPageUnmount = () => {
	return {
		type: REGISTER_PAGE_UNMOUNT
	};
};

export const getProvinceLists = () => {
	return dispatch => {
		CommonService.getProvinces().then(provinces => {
			dispatch({ type: PROVINCES_RETRIEVED, payload: provinces });
		});
	};
};

export const getCityLists = (provinceId = null) => {
	return dispatch => {
		CommonService.getCities(provinceId).then(cities => {
			dispatch({ type: CITIES_RETRIEVED, payload: cities });
		});
	};
};

export const submitSignUp = payload => {
	return dispatch => {
		dispatch({ type: SIGN_UP_PROCCESS });
		CommonService.signUp(payload)
			.then(() => {
				const loginPayload = {
					username: payload.phone,
					password: payload.password
				};
				CommonService.signIn(loginPayload).then(async (loginResponse) => {
					await setAuthorization(loginResponse);
					dispatch({ type: SIGN_UP_SUCCESS });
					Actions.OtpResetPassword({ hideNavBar: false, title: 'Kode Verifikasi', phoneNumber: payload.phone });
				});
			})
			.catch(() => {
				dispatch({ type: SIGN_UP_FAIL });
			});
	};
};
