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

const signOut = () => {
	return request({
		url: 'oauth/token/revoke',
		method: 'POST'
	});
};

const editProfile = (payload) => {
	return request({
		url: 'api/customer/user/update',
		method: 'PUT',
		data: payload
	});
};

const getDashboard = () => {
	return request({
		url: 'api/customer/home',
		method: 'get'
	});
};

const getNewsCategories = () => {
	return request({
		url: 'api/general/newsfeed/category',
		method: 'get'
	});
};

const getNews = (param) => {
	return request({
		url: 'api/general/newsfeed',
		method: 'get',
		params: param
	});
};

const getNearby = (param) => {
	return request({
		url: 'api/customer/nearby',
		method: 'get',
		params: param
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
	getProfile,
	editProfile,
	signOut,
	getDashboard,
	getNewsCategories,
	getNews,
	getNearby
};

export default CommonService;
