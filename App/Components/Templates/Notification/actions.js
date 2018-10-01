import { CommonService } from '@services';
import { refreshProfile } from '../../../Store/GlobalReducer/actions';
import { NOTIFICATION_ON_PROCCESS, NOTIFICATION_ON_SUCCESS, NOTIFICATION_REFRESH, NOTIFICATION_VALUE_CHANGED } from './types';

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

export const updateNotification = (notifId) => {
    return (dispatch, getState) => {
        const dupNotification = getState().notificationReducer.notifications;
        const newNotification = dupNotification.find((notif) => {
            return notif.id === notifId;
        });
        newNotification.status = 'read';
        dispatch(refreshProfile());
        dispatch({ type: NOTIFICATION_VALUE_CHANGED, payload: dupNotification });
    };
};

