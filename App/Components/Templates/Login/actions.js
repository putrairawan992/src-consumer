import { Actions } from 'react-native-router-flux';
import { CommonService } from '@services';
import { setAuthorization, setProfileFromRest, storeSession } from '@helpers/Storage';
import { checkPermission, getToken, requestPermission } from '@helpers/firebase';
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
				await setProfileFromRest();
				checkPermissionVal();
				Actions.MainConsumer();
				dispatch({ type: SIGN_IN_SUCCESS });
			})
			.catch(async(err) => {
				dispatch({ type: SIGN_IN_FAIL });
				if (err.status === 412) {
					if (err.data.status === 'otp-verification') {
						await storeSession(err.data.phone);
						Actions.OtpResetPassword({ hideNavBar: false, title: 'Kode Verifikasi', phoneNumber: err.data.phone });
					}
				}
			});
	};
};

const checkPermissionVal = async () => {
	const permission = await checkPermission();
	if (permission) {
		getToken();
	}
	else {
		requestPermission();
	}
};
