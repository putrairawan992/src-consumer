import { CommonService } from '@services';
import {
    COUPON_ON_PROCCESS, COUPON_UNMOUNT, COUPON_RETRIEVED, COUPON_LOAD_MORE, COUPON_REFRESH, COUPON_RETRIEVE_LAST_PAGE, COUPON_INITIAL
} from './types';

export const loadMyCoupons = (initial = false, context) => {
    return (dispatch, getState) => {
        if (initial) {
            dispatch({ type: COUPON_ON_PROCCESS });
            dispatch({ type: COUPON_INITIAL });
        }
        const params = {
            page: getState().couponReducer.page,
            per_page: getState().couponReducer.per_page
        };
        CommonService.getPaguyubanCoupon(params, context).then((response) => {
            dispatch({ type: COUPON_RETRIEVED, payload: response.data });
            if (initial) {
                dispatch({ type: COUPON_RETRIEVE_LAST_PAGE, payload: response.last_page });
            }
        }).catch((err) => {
            console.log(err);
        });
    };
};

export const handleLoadMoreAct = (context) => {
    return (dispatch, getState) => {
        if (getState().couponReducer.page < getState().couponReducer.last_page) {
            dispatch({ type: COUPON_LOAD_MORE });
            dispatch(loadMyCoupons(false, context));
        }
    };
};

export const handleRefreshAct = (context) => {
    return (dispatch) => {
        dispatch({ type: COUPON_REFRESH });
        dispatch(loadMyCoupons(false, context));
    };
};


export const couponUnmount = () => {
    return {
        type: COUPON_UNMOUNT
    };
};
