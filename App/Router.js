import React from 'react';
import { View, Text } from 'react-native';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import {
	IntroComponent,
	WelcomeScreenComponent,
	LoginComponent,
	MainConsumerComponent,
	ForgotPasswordComponent,
	OtpResetPasswordComponent,
	SuccessResetPasswordComponent,
	EditProfileComponent,
	ChangePasswordComponent,
	RegisterComponent,
	DeleteAccountComponent,
	NearbyComponent,
	NearbyMapViewComponent,
	ShopDetailComponent
} from '@templates';
import { CustomNavBar } from '@partials';

const styles = {
	navigationStyle: {
		backgroundColor: '#DC1E2D',
		height: 56
	}
};

const routerComponent = () => {
	return (
		<Router>
			<Stack key="root" navBar={CustomNavBar}>
				<Scene
					key="WelcomeScreen"
					component={WelcomeScreenComponent}
					initial
					hideNavBar
				/>
				<Scene key="Intro" component={IntroComponent} hideNavBar />
				<Scene key="Login" component={LoginComponent} title="Masuk" />
				<Scene
					key="MainConsumer"
					component={MainConsumerComponent}
					hideNavBar
					type="reset"
				/>
				<Scene
					key="ForgotPassword"
					component={ForgotPasswordComponent}
					title="Lupa kata sandi"
				/>
				<Scene
					key="OtpResetPassword"
					component={OtpResetPasswordComponent}
					hideNavBar
				/>
				<Scene
					key="SuccessResetPassword"
					component={SuccessResetPasswordComponent}
					hideNavBar
				/>
				<Scene
					key="EditProfile"
					component={EditProfileComponent}
					title="Edit Profil"
				/>
				<Scene
					key="ChangePassword"
					component={ChangePasswordComponent}
					title="Ubah kata sandi"
				/>
				<Scene
					key="Register"
					component={RegisterComponent}
					title="Daftar"
				/>
				<Scene
					key="DeleteAccount"
					component={DeleteAccountComponent}
					title="Hapus akun"
				/>
				<Scene
					key="Nearby"
					component={NearbyComponent}
					title="Toko terdekat"
					withIcon={'map'}
					rightPress={() => { Actions.NearbyMapView(); }}
				/>
				<Scene
					key="NearbyMapView"
					component={NearbyMapViewComponent}
					title="Toko terdekat"
				/>
				<Scene
					key="ShopDetail"
					component={ShopDetailComponent}
					title="Detil Toko"
				/>
			</Stack>
		</Router>
	);
};

export default routerComponent;