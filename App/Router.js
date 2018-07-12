import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import { IntroComponent } from '@templates';

const routerComponent = () => {
	return (
		<Router>
			<Stack key="root" hideNavBar>
				<Stack key="auth">
					<Scene key="intro" component={IntroComponent} initial />
				</Stack>
			</Stack>
		</Router>
	);
};

export default routerComponent;
