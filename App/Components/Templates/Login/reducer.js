import { LOGIN_PHONE_CHANGED, LOGIN_PASSWORD_CHANGED, SIGN_IN_SUCCESS, SIGN_IN_PROCCESS, SIGN_IN_FAIL, LOGIN_PAGE_UNMOUNT } from './types';

const INITIAL_STATE = {
	phone: '',
	password: '',
	baseLoading: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOGIN_PHONE_CHANGED:
			return { ...state, phone: action.payload };
		case LOGIN_PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case LOGIN_PAGE_UNMOUNT:
			return INITIAL_STATE;
		case SIGN_IN_PROCCESS:
			return { ...state, baseLoading: true };
		case SIGN_IN_SUCCESS:
			return { state: INITIAL_STATE, baseLoading: false }; 
		case SIGN_IN_FAIL:
			return { ...state, baseLoading: false };
		default:
			return state;
	}
};
