import React, { Component } from 'react';
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
	SubmitSettingComponent,
	StaticContentComponent,
	TermConditionComponent,
	MyCouponComponent,
	CouponListComponent
} from '@templates';
import { CustomNavBar } from '@partials';
import { getProfileFromStorage, checkFirstLaunch } from '@helpers/Storage';
import SplashScreen from 'react-native-splash-screen';

const checkLogin = async () => {
	const result = await getProfileFromStorage();
	if (result) {
		if (result.status === 'active') {
			return true;
		}
		else if (result.status === 'inactive') {
			setTimeout(() => {
				Actions.OtpResetPassword({ hideNavBar: false, title: 'Kode Verifikasi', phoneNumber: result.phone });
			}, 1000);
		}
	}
	return false;
};


class routerComponent extends Component {
	state = {
		isAuth: false,
		checking: true,
		isFirst: false
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
				this.setState({ isAuth: false });
				checkFirstLaunch().then((firstLaunch) => {
					console.log('check first launch', firstLaunch);
					if (firstLaunch === 'first_time') {
						this.setState({
							isFirst: true
						});
					}
					setTimeout(() => {
						this.setState({
							checking: false
						});
						SplashScreen.hide();
					});
				});
			}
		});
	}

	onBackPress() {
		if (Actions.state.index === 0) {
	return false;
		}
		Actions.pop();
		return true;
	}

	render() {
		if (!this.state.checking) {
			return (
				<Router backAndroidHandler={this.onBackPress}>
					<Stack key="root" navBar={CustomNavBar}>
						<Scene
							key="WelcomeScreen"
							component={WelcomeScreenComponent}
							initial={!this.state.isAuth && !this.state.isFirst}
							hideNavBar
						/>
						<Scene key="Intro" component={IntroComponent} hideNavBar initial={!this.state.isAuth && this.state.isFirst} />
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
							rightPress={() => { 
								Actions.pop();
								Actions.NearbyMapView(); }}
						/>
						<Scene
							key="NearbyMapView"
							component={NearbyMapViewComponent}
							title="Toko terdekat"
							withIcon={'grid-on'}
							rightPress={() => { 
								Actions.pop();
								Actions.Nearby(); }}
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
							key="Static"
							component={StaticContentComponent}
							title="Promo"
						/>
						<Scene
							key="SubmitSetting"
							component={SubmitSettingComponent}
						/>
						<Scene
							key="TermCondition"
							component={TermConditionComponent}
							hideNavBar
						/>
						<Scene
							key="MyCoupon"
							component={MyCouponComponent}
							title="Kupon Saya"
						/>
						<Scene
							key="CouponList"
							component={CouponListComponent}
							title="Kupon Saya"
						/>
					</Stack>
				</Router>
			);
		}
		return null;
	}
}

export default routerComponent;
