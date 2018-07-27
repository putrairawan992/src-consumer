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

const CommonService = {
	getCities,
	getProvinces
};

export default CommonService;