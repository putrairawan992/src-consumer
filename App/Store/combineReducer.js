import { combineReducers } from 'redux';
import SignUpReducer from '@templates/Register/reducer';

export default combineReducers({
	defaultReducer: () => [],
	signUpReducer: SignUpReducer
});
