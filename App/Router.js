import React from 'react';
import { View, Text } from 'react-native';
import { Scene, Router, Stack } from 'react-native-router-flux';
import {
	IntroComponent,
	WelcomeScreenComponent,
	LoginComponent,
	MainConsumerComponent
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
				<Stack key="auth">
					<Scene
						key="WelcomeScreen"
						component={WelcomeScreenComponent}
						initial
						hideNavBar
					/>
					<Scene key="Intro" component={IntroComponent} hideNavBar />
					<Scene key="Login" component={LoginComponent} title="Masuk" />
				</Stack>
				<Stack key="main" type="reset">
					<Scene key="MainConsumer" component={MainConsumerComponent} hideNavBar initial />
				</Stack>
			</Stack>
		</Router>
	);
};

export default routerComponent;