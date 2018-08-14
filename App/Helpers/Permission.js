import Permissions from 'react-native-permissions';

const requestCameraPermission = async () => {
    const permissionStatus = await Permissions.checkMultiple(['camera', 'photo']);
    let cameraStatus = false;
    let photoStatus = false;
    if (permissionStatus.camera !== 'authorized') {
        const cameraGranted = await Permissions.request('camera');
        if (cameraGranted === 'authorized') {
            cameraStatus = true;
        }
        else {
            cameraStatus = false;
        }
    }
    else {
        cameraStatus = true;
    }
    if (permissionStatus.photo !== 'authorized') {
        const photoGranted = await Permissions.request('photo');
        if (photoGranted === 'authorized') {
            photoStatus = true;
        }
        else {
            photoStatus = false;
        }
    }
    else {
        photoStatus = true;
    }
    if (cameraStatus && photoStatus) {
        return true;
    }
    return false;
};

const requestLocationPermission = async () => {
    const locationPermissionStatus = await Permissions.check('location');
    if (locationPermissionStatus !== 'authorized') {
        const locationGranted = await Permissions.request('location');
        if (locationGranted === 'authorized') {
            return true;
        }
        return false;
    }
    return true;
};

const PermissionHelpers = {
    requestCameraPermission,
    requestLocationPermission
};

export default PermissionHelpers;
