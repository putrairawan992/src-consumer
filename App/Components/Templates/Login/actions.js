import { Actions } from 'react-native-router-flux';
import { CommonService } from '@services';
import { setAuthorization, setProfileFromRest } from '@helpers/Storage';
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
				const profile = await setProfileFromRest();
				if (profile.status === 'active') {
					checkPermissionVal();
					Actions.MainConsumer();
				}
				else {
					Actions.OtpResetPassword({ hideNavBar: false, title: 'Kode Verifikasi', phoneNumber: payload.username });
				}
				dispatch({ type: SIGN_IN_SUCCESS });
			})
			.catch(() => {
				dispatch({ type: SIGN_IN_FAIL });
			});
	};
};

const checkPermissionVal = async() => {
    const permission = await checkPermission();
    if (permission) {
      getToken();
    }
    else {
      requestPermission();
    }
};
