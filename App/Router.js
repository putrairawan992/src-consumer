import React from 'react';
import { View, Text } from 'react-native';
import { Scene, Router, Stack } from 'react-native-router-flux';
import {
	IntroComponent,
	WelcomeScreenComponent,
	LoginComponent,
	MainConsumerComponent,
	ForgotPasswordComponent,
	OtpResetPasswordComponent,
	SuccessResetPasswordComponent
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
			<Stack key="root" hideNavBar navBar={CustomNavBar}>
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
			</Stack>
		</Router>
	);
};

export default routerComponent;