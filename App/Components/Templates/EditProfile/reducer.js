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
    EDIT_IMAGE_REPLACED
} from './types';

const INITIAL_STATE = {
    name: '',
    gender: 'male',
    birth_date: '',
    id_number: '',
    phone: '',
    baseLoading: false,
    image_url: '',
    profileLoaded: false,
    image: ''
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
        case EDIT_ON_WILL_MOUNT:
            return { ...state, name: action.payload.fullname, gender: action.payload.gender, birth_date: action.payload.birth_date, id_number: action.payload.id_number, phone: action.payload.phone.substring(3), image_url: action.payload.image_url, profileLoaded: true };
        case EDIT_IMAGE_REPLACED:
            return { ...state, image: action.payload };
        default:
            return state;
    }
};
