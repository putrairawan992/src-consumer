import { Alert } from 'react-native';

const callAlert = errorValue => {
	Alert.alert(null, Object.values(errorValue)[0][0], [{ text: 'OK' }], { cancelable: false });
};

export default callAlert;