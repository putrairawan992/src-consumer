import { CommonService } from '@services';
import { Actions } from 'react-native-router-flux';
import { setProfileFromRest } from '@helpers/Storage';
import {
    CHANGE_PASS_PASSWORD_CHANGES,
    CHANGE_PASS_PASSWORD_CONFIRMATION_CHANGES,
    CHANGE_PASS_PAGE_UNMOUNT,
    CHANGE_PASS_PROCCESS,
    CHANGE_PASS_SUCCESS,
    CHANGE_PASS_FAIL
} from './types';

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

export const submitChangePassword = (payload) => {
    return dispatch => {
        dispatch({ type: CHANGE_PASS_PROCCESS });
        CommonService.changePassword(payload).then(async() => {
            await setProfileFromRest();
            dispatch({ type: CHANGE_PASS_SUCCESS });
            Actions.MainConsumer();
        }).catch(() => {
            dispatch({ type: CHANGE_PASS_FAIL });
        });
    };
};

