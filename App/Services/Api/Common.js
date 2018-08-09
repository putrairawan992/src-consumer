import request from '@helpers/api';
import constants from '@helpers/constants';

const getCities = (provinceId = null, page = null) => {
	return request({
		url: 'api/general/city',
		method: 'GET',
		params: {
			page: page || 'all',
			province_id: provinceId
		}
	});
};

const getProvinces = (page = null) => {
	return request({
		url: 'api/general/province',
		method: 'GET',
		params: {
			page: page || 'all'
		}
	});
};

const signUp = (payload) => {
	return request({
		url: 'api/customer/user',
		method: 'POST',
		data: payload
	});
};

const signIn = (payload) => {
	return request({
		url: 'api/customer/token',
		method: 'POST',
		data: { ...constants.oauth_identifier, ...payload }
	});
};

const resendActivationCode = (payload) => {
	return request({
		url: 'api/general/otp/send',
		method: 'POST',
		data: payload
	});
};

const verifyUser = (payload) => {
	return request({
		url: 'api/general/otp/verify-account',
		method: 'POST',
		data: payload
	});
};

const resetPassword = (payload) => {
	return request({
		url: 'api/general/otp/reset-password',
		method: 'POST',
		data: payload
	});
};

const changePassword = (payload) => {
	return request({
		url: 'api/general/otp/change-password',
		method: 'POST',
		data: payload
	});
};

const getProfile = () => {
	return request({
		url: 'oauth/user',
		method: 'GET',
	});
};

const CommonService = {
	getCities,
	getProvinces,
	signUp,
	signIn,
	resendActivationCode,
	verifyUser,
	resetPassword,
	changePassword,
	getProfile
};

export default CommonService;
