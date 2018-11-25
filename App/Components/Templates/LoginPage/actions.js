import { CommonService } from '@services';
import { storeExpiryDate, storeSession } from '@helpers/Storage';
import { Actions } from 'react-native-router-flux';
import { PHONE_NUMBER_CHANGED, VERIFY_PHONE_PROCCESS, VERIFY_PHONE_FINISH } from './types';


export const phoneNumberChanged = (phone) => {
    return {
        type: PHONE_NUMBER_CHANGED,
        payload: phone
    };
};

export const submitPhone = (payload) => {
    return (dispatch) => {
        return new Promise((resolve) => {
            dispatch({ type: VERIFY_PHONE_PROCCESS });
            CommonService.resendActivationCode(payload).then(async (res) => {
                await storeSession(payload.phone, res.type);
                await storeExpiryDate(res.expiry_at);
                Actions.OtpResetPassword({ hideNavBar: false, title: 'Kode Verifikasi', phoneNumber: payload.phone });
                resolve(res);
            })
                .finally(() => {
                    dispatch({ type: VERIFY_PHONE_FINISH });
                });
        });
    };
};
