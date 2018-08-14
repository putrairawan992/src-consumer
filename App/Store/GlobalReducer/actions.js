import { getProfileFromStorage, setProfileFromRest } from '@helpers/Storage';
import {
    GLOBAL_FETCH_PROFILE,
    GLOBAL_REFRESH_PROFILE,
    GLOBAL_REVOKE_PROFILE,
    GLOBAL_CREATE_LOCATION
} from './types';

export const fetchProfile = () => {
    return async (dispatch) => {
        const profile = await getProfileFromStorage();
        dispatch({ type: GLOBAL_FETCH_PROFILE, payload: profile });
    };
};

export const refreshProfile = () => {
    return async (dispatch) => {
        const profile = await setProfileFromRest();
        dispatch({ type: GLOBAL_REFRESH_PROFILE, payload: profile });
    };
};

export const revokeProfile = () => {
    return {
        type: GLOBAL_REVOKE_PROFILE
    };
};

export const createLocation = (location) => {
    return {
        type: GLOBAL_CREATE_LOCATION,
        payload: location
    };
};
