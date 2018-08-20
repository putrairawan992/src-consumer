import React, { Component } from 'react';
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
	ShopDetailComponent,
	NewsDetailComponent,
	HelpComponent,
	PrivacySettingComponent,
	SubmitSettingComponent
} from '@templates';
import { CustomNavBar } from '@partials';
import { getProfileFromStorage } from '@helpers/Storage';
import SplashScreen from 'react-native-splash-screen';

const checkLogin = async () => {
	const result = await getProfileFromStorage();
	if (result) {
		if (result.status === 'active') {
			return true;
		}
	}
	return false;
};


class routerComponent extends Component {
	state = {
		isAuth: false,
		checking: true
	}

	componentWillMount() {
		checkLogin().then((result) => {
			if (result) {
				this.setState({ isAuth: true, checking: false });
				setTimeout(() => {
					SplashScreen.hide();
				});
			}
			else {
				this.setState({ isAuth: false, checking: false });
				setTimeout(() => {
					SplashScreen.hide();
				});
			}
		});
	}

	render() {
		if (!this.state.checking) {
			return (
				<Router>
					<Stack key="root" navBar={CustomNavBar}>
						<Scene
							key="WelcomeScreen"
							component={WelcomeScreenComponent}
							initial={!this.state.isAuth}
							hideNavBar
						/>
						<Scene key="Intro" component={IntroComponent} hideNavBar />
						<Scene key="Login" component={LoginComponent} title="Masuk" />
						<Scene
							key="MainConsumer"
							component={MainConsumerComponent}
							hideNavBar
							type="reset"
							initial={this.state.isAuth}
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
						<Scene
							key="NewsDetail"
							component={NewsDetailComponent}
							title="Detil Berita"
						/>
						<Scene 
							key="Help"
							component={HelpComponent}
							title="Bantuan"
						/>
						<Scene 
							key="Privacy"
							component={PrivacySettingComponent}
							title="Pengaturan Privasi"
						/>
						<Scene
							key="SubmitSetting"
							component={SubmitSettingComponent}
						/>
					</Stack>
				</Router>
			);
		}
		return <View><Text>Loading....</Text></View>;
	}
}

export default routerComponent;
