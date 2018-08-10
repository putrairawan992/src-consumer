import { AsyncStorage } from 'react-native';
import CommonService from '../Services/Api/Common';

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
		return null;
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
		return null;
	}
};

const removeAuthFromStorage = async () => {
	try {
		const remove = await AsyncStorage.multiRemove(['authorization', 'profile']);
		if (remove) {
			return true;
		}
		return false;
	} catch (err) {
		console.error('Error while removing data', err);
		return false;
	}
};

const debugStorage = async () => {
	try {
		const datas = await AsyncStorage.getAllKeys();
		return datas;
	} catch (err) {
		console.error('Error while debug async storage', err);
	}
};

const setProfileFromRest = async () => {
	try {
		const profile = await CommonService.getProfile();
		await AsyncStorage.setItem('profile', JSON.stringify(profile));
		return profile;
	} catch (err) {
		console.error('something went wrong', err);
		return null;
	}
};

const getProfileFromStorage = async () => {
	try {
		const profile = await AsyncStorage.getItem('profile');
		if (profile !== null) {
          return JSON.parse(profile);
		}
		return null;
	} catch (error) {
		console.error('Error retrieving data', error);
		return null;
	}
};


export {
	storeCustomData,
	retrieveCustomData,
	setAuthorization,
	getAuthorization,
	debugStorage,
	setProfileFromRest,
	getProfileFromStorage,
	removeAuthFromStorage
};
