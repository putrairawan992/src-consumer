import { CommonService } from '@services';
import { NOTIFICATION_ON_PROCCESS, NOTIFICATION_ON_SUCCESS, NOTIFICATION_REFRESH } from './types';

export const getNotifications = () => {
    return async(dispatch) => {
        dispatch({ type: NOTIFICATION_ON_PROCCESS });
       const notifications = await CommonService.getNotifications();
       dispatch({ type: NOTIFICATION_ON_SUCCESS, payload: notifications.result });
    };
};

export const refreshNotifications = () => {
    return async(dispatch) => {
       const notifications = await CommonService.getNotifications();
       dispatch({ type: NOTIFICATION_REFRESH, payload: notifications.result });
    };
};

