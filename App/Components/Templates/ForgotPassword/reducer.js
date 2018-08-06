import { FORGOT_PHONE_CHANGES, 
         FORGOT_PAGE_UNMOUNT,
         FORGOT_PROCCESS,
         FORGOT_SUCCESS, 
         FORGOT_FAIL } from './types';

const INITIAL_STATE = {
    phone: '',
    type: 'reset-password',
    baseLoading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FORGOT_PHONE_CHANGES:
            return { ...state, phone: action.payload };
        case FORGOT_PAGE_UNMOUNT:
            return INITIAL_STATE;
        case FORGOT_PROCCESS:
            return { ...state, baseLoading: true };
        case FORGOT_SUCCESS:
            return { ...state, baseLoading: false };
        case FORGOT_FAIL:
            return { ...state, baseLoading: false };
        default:
            return state;
    }
};

