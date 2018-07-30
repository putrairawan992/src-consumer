import request from '@helpers/api';

const getCities = (provinceId = null, page = null) => {
	return request({
		url: 'general/city',
		method: 'GET',
		params: {
			page: page ? page : 'all',
			province_id: provinceId
		}
	});
};

const getProvinces = (page = null) => {
	return request({
		url: 'general/province',
		method: 'GET',
		params: {
			page: page ? page : 'all'
		}
	});
};

const signUp = (payload) => {
	return request({
		url: 'customer/user',
		method: 'POST',
		data: payload
	});
};

const CommonService = {
	getCities,
	getProvinces,
	signUp
};

export default CommonService;