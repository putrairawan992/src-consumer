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
    EDIT_PROVINCE_CHANGED,
    EDIT_PROVINCES_RETRIEVED,
    EDIT_CITIES_RETRIEVED,
    EDIT_CITY_CHANGED,
    EDIT_EMAIL_CHANGED,
    EDIT_REFERRAL_CHANGED
} from './types';

const INITIAL_STATE = {
    name: '',
    gender: 'male',
    birth_date: '',
    id_number: '',
    phone: '',
    province_id: '',
    city_id: '',
    cities: [],
    provinces: [],
    baseLoading: false,
    image_url: '',
    profileLoaded: false,
    image: '',
    isOver: false,
    email: '',
    referral_code: '',
    already_referral: false
};

const calculateAge = (birthday) => {
    return Math.floor((new Date() - new Date(birthday)) / 1000 / 60 / 60 / 24 / 365.25);
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EDIT_NAME_CHANGED:
            return { ...state, name: action.payload };
        case EDIT_GENDER_CHANGED:
            return { ...state, gender: action.payload };
        case EDIT_BIRTHDATE_CHANGED: {
            const myAge = calculateAge(action.payload);
            let virOver = false;
            if (myAge >= 18) {
                virOver = true;
            }
            return { ...state, birth_date: action.payload, isOver: virOver };
        }
        case EDIT_KTP_CHANGED:
            return { ...state, id_number: action.payload };
        case EDIT_PROVINCE_CHANGED:
            return { ...state, province_id: action.payload, cities: [], city_id: '' };
        case EDIT_PHONE_CHANGED:
            return { ...state, phone: action.payload };
        case EDIT_EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case EDIT_PAGE_UNMOUNT:
            return INITIAL_STATE;
        case EDIT_PROVINCES_RETRIEVED:
            return { ...state, provinces: action.payload.data };
        case EDIT_CITIES_RETRIEVED:
            return { ...state, cities: action.payload.data };
        case EDIT_CITY_CHANGED:
            return { ...state, city_id: action.payload };
        case EDIT_PROCCESS:
            return { ...state, baseLoading: true };
        case EDIT_SUCCESS:
            return { ...state, baseLoading: false };
        case EDIT_FAIL:
            return { ...state, baseLoading: false };
        case EDIT_REFERRAL_CHANGED:
            return { ...state, referral_code: action.payload };
        case EDIT_ON_WILL_MOUNT:
            return { ...state, name: action.payload.fullname, gender: action.payload.gender, birth_date: action.payload.birth_date, id_number: action.payload.id_number, phone: action.payload.phone.substring(3), image_url: action.payload.image_url, city_id: action.payload.city_id, province_id: action.payload.province_id, profileLoaded: true, isOver: (calculateAge(action.payload.birth_date) >= 18 ? true : false), email: action.payload.email, referral_code: action.payload.refferal_code, already_referral: action.payload.refferal_code ? true : false };
        case EDIT_IMAGE_REPLACED:
            return { ...state, image: action.payload };
        default:
            return state;
    }
};
