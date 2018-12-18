import { AsyncStorage } from 'react-native';
import { CommonService } from '@services';
import firebase from 'react-native-firebase';
import DeviceInfo from 'react-native-device-info';

const checkPermission = async () => {
    try {
        const enabled = await firebase.messaging().hasPermission();
        if (enabled) {
            return true;
        }
        return false;
    }
    catch (err) {
        console.log('firebase error', err);
    }
};

const getToken = async () => {
    try {
        let fcmToken = await AsyncStorage.getItem('fcmToken');
        if (!fcmToken) {
            fcmToken = await firebase.messaging().getToken();
            if (fcmToken) {
                // user has a device token
                console.log('token from FCM', fcmToken);
                const payload = {
                    token: fcmToken,
                    version: DeviceInfo.getVersion(),
                    type: 'customer'
                };
                await CommonService.storeFCMToken(payload);
                await AsyncStorage.setItem('fcmToken', fcmToken);
            }
        }
        else {
            console.log('token from current storage', fcmToken);
            const payload = {
                token: fcmToken,
                version: DeviceInfo.getVersion(),
                type: 'customer'
            };
            await CommonService.storeFCMToken(payload);
        }
    }
    catch (err) {
        console.log('firebase error', err);
    }
};

const requestPermission = async () => {
    try {
        await firebase.messaging().requestPermission();
        // User has authorised
        this.getToken();
    } catch (error) {
        // User has rejected permissions
        console.log('permission rejected');
    }
};


export {
    checkPermission,
    getToken,
    requestPermission
};
