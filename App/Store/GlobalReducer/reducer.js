import { GLOBAL_FETCH_PROFILE, GLOBAL_REFRESH_PROFILE, GLOBAL_REVOKE_PROFILE, GLOBAL_CREATE_LOCATION } from './types';

const INITIAL_STATE = {
    globalProfile: {},
    location: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GLOBAL_FETCH_PROFILE:
            return { ...state, globalProfile: action.payload };
        case GLOBAL_REFRESH_PROFILE:
            return { ...state, globalProfile: action.payload };
        case GLOBAL_REVOKE_PROFILE:
            return { ...state, globalProfile: {} };
        case GLOBAL_CREATE_LOCATION:
            return { ...state, location: action.payload };
        default:
            return state;
    }
};
