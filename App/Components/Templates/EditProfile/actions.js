import { Actions } from 'react-native-router-flux';
import { CommonService } from '@services';
import { ToastAndroid } from 'react-native';
import { setProfileFromRest, getProfileFromStorage } from '@helpers/Storage';
// import PermissionHelpers from '@helpers/Permission';
import {
    EDIT_NAME_CHANGED,
    EDIT_GENDER_CHANGED,
    EDIT_BIRTHDATE_CHANGED,
    EDIT_KTP_CHANGED,
    EDIT_PHONE_CHANGED,
    EDIT_PAGE_UNMOUNT,
    EDIT_PROCCESS,
    EDIT_SUCCESS,
    EDIT_FAIL,
    EDIT_ON_WILL_MOUNT,
    EDIT_IMAGE_REPLACED,
    EDIT_CITY_CHANGED,
    EDIT_PROVINCE_CHANGED,
    EDIT_PROVINCES_RETRIEVED,
    EDIT_CITIES_RETRIEVED,
    EDIT_EMAIL_CHANGED
} from './types';
import { refreshProfile } from '../../../Store/GlobalReducer/actions';
 
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

export const editCityChanged = text => {
	return {
		type: EDIT_CITY_CHANGED,
		payload: text
	};
};

export const editProvinceChanged = text => {
	return {
		type: EDIT_PROVINCE_CHANGED,
		payload: text
	};
};

export const editEmailChanged = text => {
    return {
        type: EDIT_EMAIL_CHANGED,
        payload: text
    };
};

export const editImageReplaced = (base64) => {
    return {
        type: EDIT_IMAGE_REPLACED,
        payload: base64
    };
};

export const editPageUnmount = () => {
    return {
        type: EDIT_PAGE_UNMOUNT
    };
};

export const getProvinceLists = () => {
	return dispatch => {
		CommonService.getProvinces().then(provinces => {
			dispatch({ type: EDIT_PROVINCES_RETRIEVED, payload: provinces });
		});
	};
};

export const getCityLists = (provinceId = null) => {
	return dispatch => {
		CommonService.getCities(provinceId).then(cities => {
			dispatch({ type: EDIT_CITIES_RETRIEVED, payload: cities });
		});
	};
};

export const editOnWillMount = () => {
    return async (dispatch) => {
        const profile = await getProfileFromStorage();
        dispatch({ type: EDIT_ON_WILL_MOUNT, payload: profile });
    };
};

export const submitEdit = payload => {
    return dispatch => {
        dispatch({ type: EDIT_PROCCESS });
        CommonService.editProfile(payload)
            .then(async () => {
                await setProfileFromRest();
                dispatch({ type: EDIT_SUCCESS });
                dispatch(refreshProfile());
                ToastAndroid.show('Sukses Memperbarui Profil', ToastAndroid.SHORT);
                Actions.pop();
            })
            .catch(() => {
                dispatch({ type: EDIT_FAIL });
            });
    };
};
