import { CommonService } from '@services';
import { Actions } from 'react-native-router-flux';
import { storeExpiryDate } from '@helpers/Storage';
import {
    FORGOT_PHONE_CHANGES,
    FORGOT_PAGE_UNMOUNT,
    FORGOT_PROCCESS,
    FORGOT_SUCCESS,
    FORGOT_FAIL
} from './types';

export const phoneChanged = (text) => {
    return {
        type: FORGOT_PHONE_CHANGES,
        payload: text
    };
};

export const forgotPageUnmount = () => {
    return {
        type: FORGOT_PAGE_UNMOUNT
    };
};

export const submitForgotPassword = (payload, isReset = false) => {
    return dispatch => {
        dispatch({ type: FORGOT_PROCCESS });
        CommonService.resendActivationCode(payload).then(async (response) => {
            await storeExpiryDate(response.expiry_at);
            dispatch({ type: FORGOT_SUCCESS });
            if (isReset) {
                Actions.OtpResetPassword({
                    hideNavBar: false,
                    title: 'Kode verifikasi',
                    phoneNumber: payload.phone,
                    requestReset: true
                });
            }
            else {
                Actions.OtpResetPassword({
                    hideNavBar: true,
                    phoneNumber: payload.phone,
                    requestReset: true
                });
            }
        }).catch(() => {
            dispatch({ type: FORGOT_FAIL });
        });
    };
};

