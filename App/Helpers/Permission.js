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

const PermissionHelpers = {
    requestCameraPermission
};

export default PermissionHelpers;
