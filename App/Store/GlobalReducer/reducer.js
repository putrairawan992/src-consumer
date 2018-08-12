import { GLOBAL_FETCH_PROFILE, GLOBAL_REFRESH_PROFILE, GLOBAL_REVOKE_PROFILE } from './types';

const INITIAL_STATE = {
    globalProfile: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GLOBAL_FETCH_PROFILE:
            return { ...state, globalProfile: action.payload };
        case GLOBAL_REFRESH_PROFILE:
            return { ...state, globalProfile: action.payload };
        case GLOBAL_REVOKE_PROFILE:
            return { ...state, globalProfile: {} };
        default:
            return state;
    }
};
