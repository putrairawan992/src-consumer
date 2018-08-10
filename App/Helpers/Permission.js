import Permissions from 'react-native-permissions';
import { CameraRoll } from 'react-native';

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

const accessCamera = async () => {
    CameraRoll.getPhotos({
        first: 20,
        assetType: 'Photos',
    })
        .then(r => {
            console.log('check response', r);
        })
        .catch((err) => {
            console.log('error get photos', err);
        });
};

const PermissionHelpers = {
    requestCameraPermission,
    accessCamera
};

export default PermissionHelpers;
