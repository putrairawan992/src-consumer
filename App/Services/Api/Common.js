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
		url: 'oauth/token',
		method: 'POST',
		data: { ...constants.oauth_identifier, ...payload }
	});
};

const CommonService = {
	getCities,
	getProvinces,
	signUp,
	signIn
};

export default CommonService;
