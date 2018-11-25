import { combineReducers } from 'redux';
import SignUpReducer from '@templates/Register/reducer';
import EditUserReducer from '@templates/EditProfile/reducer';
import NotificationReducer from '@templates/Notification/reducer';
import LoginReducer from '@templates/LoginPage/reducer';
import GlobalReducer from './GlobalReducer/reducer';

export default combineReducers({
	defaultReducer: () => [],
	signUpReducer: SignUpReducer,
	editUserReducer: EditUserReducer,
	notificationReducer: NotificationReducer,
	loginReducer: LoginReducer,
	globalReducer: GlobalReducer
});
