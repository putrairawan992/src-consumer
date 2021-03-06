import request from '@helpers/api';
import constants from '@helpers/constants';

const getCities = (provinceId = null, page = null) => {
	return request({
		url: 'api/v2/general/city',
		method: 'GET',
		params: {
			page: page || 'all',
			province_id: provinceId
		}
	});
};

const getProvinces = (page = null) => {
	return request({
		url: 'api/v2/general/province',
		method: 'GET',
		params: {
			page: page || 'all'
		}
	});
};

const signUp = (payload) => {
	return request({
		url: 'api/v2/customer/user',
		method: 'POST',
		data: payload
	});
};

const signIn = (payload) => {
	return request({
		url: 'api/v2/customer/token-v3',
		method: 'POST',
		data: { ...constants.oauth_identifier, ...payload }
	});
};

const resendActivationCode = (payload) => {
	return request({
		url: 'api/v2/general/otp/send',
		method: 'POST',
		data: payload
	});
};

const verifyUser = (payload) => {
	return request({
		url: 'api/v2/general/otp/verify-account',
		method: 'POST',
		data: payload
	});
};

const resetPassword = (payload) => {
	return request({
		url: 'api/v2/general/otp/reset-password',
		method: 'POST',
		data: payload
	});
};

const changePassword = (payload) => {
	return request({
		url: 'oauth/password/change-external',
		method: 'POST',
		data: payload
	});
};

const changeResetPassword = (payload) => {
	return request({
		url: 'api/v2/general/otp/change-password',
		method: 'post',
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
		url: 'api/v2/customer/user/update',
		method: 'PUT',
		data: payload
	});
};

const getDashboard = () => {
	return request({
		url: 'api/v2/customer/home',
		method: 'get'
	});
};

const getNewsCategories = () => {
	return request({
		url: 'api/v2/general/newsfeed/category',
		method: 'get'
	});
};

const getNews = (param) => {
	return request({
		url: 'api/v2/general/newsfeed',
		method: 'get',
		params: param
	});
};

const getNearby = (param) => {
	return request({
		url: 'api/v2/customer/nearby',
		method: 'get',
		params: param
	});
};

const getStaticContent = (param) => {
	return request({
		url: 'api/v2/general/content',
		method: 'get',
		params: param
	});
};

const likeNews = (param) => {
	return request({
		url: 'api/v2/general/newsfeed',
		method: 'post',
		params: param
	});
};

const likeContent = (context) => {
	return request({
		url: 'api/v2/general/content/' + context.content_id + '/like',
		method: 'post'
	});
};

const dislikeContent = (context) => {
	return request({
		url: 'api/v2/general/content/' + context.content_id + '/unlike',
		method: 'post'
	});
};

const submitPrivacy = (payload) => {
	return request({
		url: 'api/v2/general/content/privacy',
		method: 'post',
        data: payload
	});
};

const deleteUser = (payload) => {
	return request({
		url: 'oauth/user/delete',
		method: 'post',
        data: payload
	});
};

const getBannerDetail = (context) => {
	return request({
		url: 'api/v2/general/page/' + context.slug,
		method: 'get'
	});
};

const storeFCMToken = (payload) => {
	return request({
		url: 'api/v2/general/user_notif',
		method: 'post',
		data: payload
	});
};

const getNotifications = () => {
	return request({
		url: 'api/v2/general/user_notif',
		method: 'get'
	});
};

const updateNotification = (context) => {
	return request({
		url: 'api/v2/general/user_notif/' + context.id,
		method: 'put'
	});
};

const checkAppVersion = (param) => {
	return request({
		url: 'api/v2/general/mobile-apps/check',
		params: param,
		method: 'get'
	});
};

const getPaguyuban = (param) => {
	return request({
		url: 'api/v2/customer/coupon',
		params: param,
		method: 'get'
	});
};

const getPaguyubanCoupon = (param, context) => {
	return request({
		url: 'api/v2/customer/coupon/' + context.group_id,
		params: param,
		method: 'get'
	});
};

const getCouponHistory = () => {
	return request({
		url: 'api/v2/customer/coupon/get/riwayat',
		method: 'get'
	});
};

const sendDeleteOtp = (payload) => {
	return request({
		url: '/api/v2/general/otp/send-v2',
		method: 'post',
		data: payload
	});
};

const checkNotif = () => {
	return request({
		url: 'api/v2/general/content/notif?from=customer',
		method: 'get'
	});
};

const updateContent = (payload) => {
	return request({
		url: '/api/v2/general/content/notif',
		method: 'post',
		data: payload
	});
};


const deleteProfile = (payload) => {
	return request({
		url: '/oauth/user/delete-v2',
		method: 'post',
		data: payload
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
	getNearby,
	getStaticContent,
	likeNews,
	likeContent,
	dislikeContent,
	submitPrivacy,
	deleteUser,
	getBannerDetail,
	changeResetPassword,
	storeFCMToken,
	getNotifications,
	updateNotification,
	checkAppVersion,
	getPaguyuban,
	getPaguyubanCoupon,
	getCouponHistory,
	sendDeleteOtp,
	deleteProfile,
	checkNotif,
	updateContent
};

export default CommonService;
