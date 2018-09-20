import { NOTIFICATION_ON_SUCCESS, NOTIFICATION_ON_FAIL, NOTIFICATION_ON_PROCCESS, NOTIFICATION_REFRESH } from './types';

const INITIAL_STATE = {
    notifications: [],
    baseLoading: false,
    isRefreshing: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NOTIFICATION_ON_PROCCESS:
            return { ...state, baseLoading: true };
        case NOTIFICATION_ON_SUCCESS:
            return { ...state, notifications: action.payload, baseLoading: false, isRefreshing: false };
        case NOTIFICATION_REFRESH:
        return { ...state, notifications: action.payload, isRefreshing: false };
        case NOTIFICATION_ON_FAIL:
            return { ...state, notifications: action.payload, baseLoading: false };
        default:
            return state;
    }
};
