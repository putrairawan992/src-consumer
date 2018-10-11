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

const checkFirstLaunch = async () => {
	try {
		const value = await AsyncStorage.getItem('first_launch');
		if (value === null) {
			AsyncStorage.setItem('first_launch', 'first_time');
			return 'first_time';
		}
		return 'not_first_time';
	} catch (error) {
		console.log('something went wrong');
		return 'not_first_time';
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

const getExpiry = () => {
	return new Promise(async (resolve) => {
		const expiry = await AsyncStorage.getItem('otp_expiry');
		resolve(expiry);
	});
};

const removeAuthFromStorage = async () => {
	try {
		const remove = await AsyncStorage.multiRemove(['authorization', 'profile', 'otp_expiry']);
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

const storeExpiryDate = async (expire) => {
	try {
		await AsyncStorage.setItem('otp_expiry', expire);
		return expire;
	}
	catch (err) {
		console.error('Error While store expiry', err);
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
	removeAuthFromStorage,
	checkFirstLaunch,
	storeExpiryDate,
	getExpiry
};
