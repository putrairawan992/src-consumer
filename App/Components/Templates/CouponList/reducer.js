import { COUPON_UNMOUNT, COUPON_ON_PROCCESS, COUPON_RETRIEVED, COUPON_INITIAL, COUPON_LOAD_MORE, COUPON_RETRIEVE_LAST_PAGE, COUPON_REFRESH } from './types';

const INITIAL_STATE = {
    coupons: [],
    isRefreshing: false,
    baseLoading: false,
    page: 1,
    per_page: 4,
    last_page: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case COUPON_ON_PROCCESS:
            return { ...state, baseLoading: true };
        case COUPON_RETRIEVED:
            return { ...state, coupons: state.page === 1 ? action.payload : [...state.coupons, ...action.payload], isRefreshing: false, baseLoading: false };
        case COUPON_INITIAL:
            return { ...state, page: 1, per_page: 4 };
        case COUPON_RETRIEVE_LAST_PAGE:
            return { ...state, last_page: action.payload };
        case COUPON_LOAD_MORE:
            return { ...state, page: state.page + 1 };
        case COUPON_REFRESH:
            return { ...state, page: 1 };
        case COUPON_UNMOUNT:
            return INITIAL_STATE;
        default:
            return state;
    }
};
