import { CommonService } from '@services';
import { setProfileFromRest } from '@helpers/Storage';
import {
    EDIT_NAME_CHANGED,
    EDIT_GENDER_CHANGED,
    EDIT_BIRTHDATE_CHANGED,
    EDIT_KTP_CHANGED,
    EDIT_PHONE_CHANGED,
    EDIT_PAGE_UNMOUNT,
    EDIT_PROCCESS,
    EDIT_SUCCESS,
    EDIT_FAIL
} from './types';

export const editNameChanged = text => {
    return {
        type: EDIT_NAME_CHANGED,
        payload: text
    };
};

export const editGenderChanged = value => {
    return {
        type: EDIT_GENDER_CHANGED,
        payload: value
    };
};

export const editBirthdateChanged = text => {
    return {
        type: EDIT_BIRTHDATE_CHANGED,
        payload: text
    };
};

export const editKtpChanged = text => {
    return {
        type: EDIT_KTP_CHANGED,
        payload: text
    };
};

export const editPhoneChanged = text => {
    return {
        type: EDIT_PHONE_CHANGED,
        payload: text
    };
};

export const editPageUnmount = () => {
    return {
        type: EDIT_PAGE_UNMOUNT
    };
};

export const submitEdit = payload => {
    return dispatch => {
        dispatch({ type: EDIT_PROCCESS });
        CommonService.editProfile(payload)
            .then(async() => {
                await setProfileFromRest();
                dispatch({ type: EDIT_SUCCESS });
            })
            .catch(() => {
                dispatch({ type: EDIT_FAIL });
            });
    };
};
