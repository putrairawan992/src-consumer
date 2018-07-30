import { Actions } from 'react-native-router-flux';
import { CommonService } from '@services';
import { LOGIN_PHONE_CHANGED, LOGIN_PASSWORD_CHANGED, SIGN_IN_PROCCESS, SIGN_IN_SUCCESS, SIGN_IN_FAIL } from './types';

export const loginPhoneChanged = text => {
	return {
		type: LOGIN_PHONE_CHANGED,
		payload: text
	};
};

export const loginPasswordChanged = text => {
	return {
		type: LOGIN_PASSWORD_CHANGED,
		payload: text
	};
};

export const submitSignIn = payload => {
	return dispatch => {
		dispatch({ type: SIGN_IN_PROCCESS });
		CommonService.signIn(payload)
			.then(() => {
               dispatch({ type: SIGN_IN_SUCCESS });
               Actions.MainConsumer();
			})
			.catch(() => {
				dispatch({ type: SIGN_IN_FAIL });
			});
	};
};
