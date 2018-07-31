import { AsyncStorage } from 'react-native';

const storeCustomData = async (key, value) => {
	try {
		await AsyncStorage.setItem(key, JSON.stringify(value));
	} catch (error) {
		console.error('Error Saving Data', error);
	}
};

const retrieveCustomData = async key => {
	try {
		const value = await AsyncStorage.getItem(key);
		if (value !== null) {
			return JSON.parse(value);
		}
		return null;
	} catch (error) {
		console.error('Error Retrieving Data', error);
	}
};

const setAuthorization = async value => {
	try {
		await AsyncStorage.setItem('authorization', JSON.stringify(value));
	} catch (error) {
		console.error('Error Saving Data', error);
	}
};

const getAuthorization = async () => {
	try {
		const auth = await AsyncStorage.getItem('authorization');
		if (auth !== null) {
			return JSON.parse(auth);
		}
		return null;
	} catch (error) {
		console.error('Error Retrieving Data', error);
	}
};

export {
	storeCustomData,
	retrieveCustomData,
	setAuthorization,
	getAuthorization
};
