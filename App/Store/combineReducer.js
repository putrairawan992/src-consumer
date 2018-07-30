import { combineReducers } from 'redux';
import SignUpReducer from '@templates/Register/reducer';
import SignInReducer from '@templates/Login/reducer';

export default combineReducers({
	defaultReducer: () => [],
	signUpReducer: SignUpReducer,
	signInReducer: SignInReducer
});
