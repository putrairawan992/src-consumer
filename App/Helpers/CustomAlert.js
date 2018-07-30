import { Alert } from 'react-native';

const callAlert = (title = null, message = null, menu = null) => {
	Alert.alert(title, message, menu, { cancelable: false });
};

export default callAlert;