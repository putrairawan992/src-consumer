import { CommonService } from '@services';
import { Actions } from 'react-native-router-flux';
import { ToastAndroid } from 'react-native';
import { setProfileFromRest } from '@helpers/Storage';
import {
    CHANGE_PASS_PASSWORD_CHANGES,
    CHANGE_PASS_PASSWORD_CONFIRMATION_CHANGES,
    CHANGE_PASS_OLD_PASSWORD_CHANGES,
    CHANGE_PASS_PAGE_UNMOUNT,
    CHANGE_PASS_PROCCESS,
    CHANGE_PASS_SUCCESS,
    CHANGE_PASS_FAIL
} from './types';

export const oldPasswordChanged = (text) => {
    return {
        type: CHANGE_PASS_OLD_PASSWORD_CHANGES,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: CHANGE_PASS_PASSWORD_CHANGES,
        payload: text
    };
};

export const passwordConfirmationChanged = (text) => {
    return {
        type: CHANGE_PASS_PASSWORD_CONFIRMATION_CHANGES,
        payload: text
    };
};


export const changePassPageUnmount = () => {
    return {
        type: CHANGE_PASS_PAGE_UNMOUNT
    };
};

export const submitChangePassword = (payload, isReset) => {
    return dispatch => {
        dispatch({ type: CHANGE_PASS_PROCCESS });
        if (isReset) {
            delete payload['old_password'];
            CommonService.changeResetPassword(payload).then(async () => {
                await setProfileFromRest();
                dispatch({ type: CHANGE_PASS_SUCCESS });
                Actions.MainConsumer();
                ToastAndroid.show('Sukses Mengganti Kata Sandi', ToastAndroid.SHORT);
            }).catch(() => {
                dispatch({ type: CHANGE_PASS_FAIL });
            });
        }
        else {
            CommonService.changePassword(payload).then(async () => {
                await setProfileFromRest();
                dispatch({ type: CHANGE_PASS_SUCCESS });
                Actions.MainConsumer();
                ToastAndroid.show('Sukses Mengganti Kata Sandi', ToastAndroid.SHORT);
            }).catch(() => {
                dispatch({ type: CHANGE_PASS_FAIL });
            });
        }
    };
};

