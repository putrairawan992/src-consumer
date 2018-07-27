import request from '@helpers/api';

const getCities = () => {
	return request({
		url: 'general/city',
		method: 'GET'
	});
};

const getProvinces = (page = null) => {
	return request({
		url: 'general/province',
		method: 'GET',
		params: {
			page: (page) ? page : 'all'
		}
	})
}

const CommonService = {
	getCities,
	getProvinces
}

export default CommonService;
