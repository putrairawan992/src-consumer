import {
    CHANGE_PASS_PASSWORD_CHANGES,
    CHANGE_PASS_PASSWORD_CONFIRMATION_CHANGES,
    CHANGE_PASS_PAGE_UNMOUNT,
    CHANGE_PASS_PROCCESS,
    CHANGE_PASS_SUCCESS,
    CHANGE_PASS_FAIL,
    CHANGE_PASS_OLD_PASSWORD_CHANGES
} from './types';

const INITIAL_STATE = {
    old_password: '',
    password: '',
    password_confirmation: '',
    baseLoading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_PASS_OLD_PASSWORD_CHANGES:
            return { ...state, old_password: action.payload };
        case CHANGE_PASS_PASSWORD_CHANGES:
            return { ...state, password: action.payload };
        case CHANGE_PASS_PASSWORD_CONFIRMATION_CHANGES:
            return { ...state, password_confirmation: action.payload };
        case CHANGE_PASS_PAGE_UNMOUNT:
            return INITIAL_STATE;
        case CHANGE_PASS_PROCCESS:
            return { ...state, baseLoading: true };
        case CHANGE_PASS_SUCCESS:
            return { ...state, baseLoading: false };
        case CHANGE_PASS_FAIL:
            return { ...state, baseLoading: false };
        default:
            return state;
    }
};

