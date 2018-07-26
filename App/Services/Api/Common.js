import request from '@helpers/api';

const getCities = () => {
	return request({
		url: 'general/city',
		method: 'GET'
	});
};

const CommonService = {
	getCities
}

export default CommonService;
