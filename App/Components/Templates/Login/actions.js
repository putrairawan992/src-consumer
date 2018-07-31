import { Actions } from 'react-native-router-flux';
import { CommonService } from '@services';
import { setAuthorization, getAuthorization } from '@helpers/Storage';
import { LOGIN_PHONE_CHANGED, LOGIN_PASSWORD_CHANGED, SIGN_IN_PROCCESS, SIGN_IN_SUCCESS, SIGN_IN_FAIL, LOGIN_PAGE_UNMOUNT } from './types';

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

export const loginPageUnmount = () => {
	return {
		type: LOGIN_PAGE_UNMOUNT
	};
};

export const submitSignIn = payload => {
	return dispatch => {
		dispatch({ type: SIGN_IN_PROCCESS });
		CommonService.signIn(payload)
			.then(async (response) => {
               await setAuthorization(response);
               dispatch({ type: SIGN_IN_SUCCESS });
               Actions.MainConsumer();
			})
			.catch(() => {
				dispatch({ type: SIGN_IN_FAIL });
			});
	};
};
