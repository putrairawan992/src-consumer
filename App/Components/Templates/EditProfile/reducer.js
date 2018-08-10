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

const INITIAL_STATE = {
    name: '',
    gender: '',
    birth_date: '',
    id_number: '',
    phone: '',
    baseLoading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EDIT_NAME_CHANGED:
            return { ...state, name: action.payload };
        case EDIT_GENDER_CHANGED:
            return { ...state, gender: action.payload };
        case EDIT_BIRTHDATE_CHANGED:
            return { ...state, birth_date: action.payload };
        case EDIT_KTP_CHANGED:
            return { ...state, id_number: action.payload };
        case EDIT_PHONE_CHANGED:
            return { ...state, phone: action.payload };
        case EDIT_PAGE_UNMOUNT:
            return INITIAL_STATE;
        case EDIT_PROCCESS:
            return { ...state, baseLoading: true };
        case EDIT_SUCCESS:
            return { ...state, baseLoading: false };
        case EDIT_FAIL:
            return { ...state, baseLoading: false };
        default:
            return state;
    }
};
