import { combineReducers } from 'redux';
import SignUpReducer from '@templates/Register/reducer';
import SignInReducer from '@templates/Login/reducer';
import ForgotPasswordReducer from '@templates/ForgotPassword/reducer';
import ChangePasswordReducer from '@templates/ChangePassword/reducer';
import EditUserReducer from '@templates/EditProfile/reducer';
import GlobalReducer from './GlobalReducer/reducer';

export default combineReducers({
	defaultReducer: () => [],
	signUpReducer: SignUpReducer,
	signInReducer: SignInReducer,
	forgotPasswordReducer: ForgotPasswordReducer,
	changePasswordReducer: ChangePasswordReducer,
	editUserReducer: EditUserReducer,
	globalReducer: GlobalReducer
});
