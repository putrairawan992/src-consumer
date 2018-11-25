import { PHONE_NUMBER_CHANGED, VERIFY_PHONE_PROCCESS, VERIFY_PHONE_FINISH } from './types';

const INITIAL_STATE = {
    phone: '',
    baseLoading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PHONE_NUMBER_CHANGED:
            return { ...state, phone: action.payload };
        case VERIFY_PHONE_PROCCESS:
            return { ...state, baseLoading: true };
        case VERIFY_PHONE_FINISH:
            return { ...state, baseLoading: false, phone: '' };
        default:
            return state;
    }
};
