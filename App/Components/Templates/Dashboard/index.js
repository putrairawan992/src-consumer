import React, { Component } from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import globalStyles from '../../../GlobalStyles';
import styles from './styles';

const ayoImg = require('@images/home-logo.png');
const personFace = require('@images/person-face.jpeg');

class DashboardComponent extends Component {
	render() {
		return (
			<View style={styles.container}>
				<LinearGradient
					style={globalStyles.profileInfo}
					colors={['#DC1E2D', '#B11522']}
					location={[0, 1]}
				>
					<View style={globalStyles.imgPadder}>
						<Image style={globalStyles.logoImg} source={ayoImg} />
					</View>
					<View style={globalStyles.detailContainer}>
						<Image
							style={globalStyles.personImg}
							source={personFace}
						/>
						<Text style={globalStyles.detailText}>
							Michael Robinson
						</Text>
					</View>
				</LinearGradient>
				<LinearGradient
					style={globalStyles.couponChildren}
					colors={['#DC1E2D', '#B11522']}
					location={[0, 1]}
				>
					<Text style={globalStyles.couponChildrenText}>My Coupouns</Text>
				</LinearGradient>
				<View style={globalStyles.couponContainer}><Text style={globalStyles.couponContainerText}>2.250</Text></View>
				<View style={globalStyles.mainContainer} />
			</View>
		);
	}
}

export default DashboardComponent;