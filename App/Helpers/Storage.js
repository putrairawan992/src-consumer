import { AsyncStorage } from 'react-native';
import SInfo from 'react-native-sensitive-info';
import CryptoJS from 'crypto-js';
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
		const encrypt = CryptoJS.AES.encrypt(JSON.stringify(value), 'SAMP-CRYPT').toString();
		await SInfo.setItem('authorization', encrypt, {});
	} catch (error) {
		console.error('Error Saving Data', error);
	}
};

const getAuthorization = async () => {
	try {
		const auth = await SInfo.getItem('authorization', {});
		if (auth !== null) {
			const bytes = CryptoJS.AES.decrypt(auth, 'SAMP-CRYPT');
			return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
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
		await AsyncStorage.multiRemove(['otp_expiry', 'session']);
		await SInfo.deleteItem('authorization', {});
		await SInfo.deleteItem('profile', {});
		return true;
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
		const encrypt = CryptoJS.AES.encrypt(JSON.stringify(profile), 'SAMP-CRYPT-PROFILE').toString();
		await SInfo.setItem('profile', encrypt, {});
		return profile;
	} catch (err) {
		console.error('something went wrong', err);
		return null;
	}
};

const getProfileFromStorage = async () => {
	try {
		const profile = await SInfo.getItem('profile', {});
		if (profile !== null) {
			const bytes = CryptoJS.AES.decrypt(profile, 'SAMP-CRYPT-PROFILE');
			return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
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

const storeSession = async (phone, type) => {
	try {
		const data = {
			phone,
			type
		};
		await AsyncStorage.setItem('session', JSON.stringify(data));
		return phone;
	}
	catch (err) {
		console.error('Error while store session', err);
		return null;
	}
};

const hasSession = async () => {
	try {
		const session = await AsyncStorage.getItem('session');
		return JSON.parse(session);
	}
	catch (err) {
		console.error('Error while retrieve session', err);
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
	getExpiry,
	storeSession,
	hasSession
};
