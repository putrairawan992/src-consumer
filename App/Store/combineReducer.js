import { combineReducers } from 'redux';
import SignUpReducer from '@templates/Register/reducer';
import ForgotPasswordReducer from '@templates/ForgotPassword/reducer';
import ChangePasswordReducer from '@templates/ChangePassword/reducer';
import EditUserReducer from '@templates/EditProfile/reducer';
import NotificationReducer from '@templates/Notification/reducer';
import LoginReducer from '@templates/LoginPage/reducer';
import GlobalReducer from './GlobalReducer/reducer';

export default combineReducers({
	defaultReducer: () => [],
	signUpReducer: SignUpReducer,
	forgotPasswordReducer: ForgotPasswordReducer,
	changePasswordReducer: ChangePasswordReducer,
	editUserReducer: EditUserReducer,
	notificationReducer: NotificationReducer,
	loginReducer: LoginReducer,
	globalReducer: GlobalReducer
});
