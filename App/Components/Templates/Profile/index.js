import React, { Component } from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { MenuListButton, LinkText } from '@partials';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import globalStyles from '../../../GlobalStyles';
import styles from './styles';

const personFace = require('@images/person-face.jpeg');

class ProfileComponent extends Component {
	render() {
		console.log(globalStyles.page);
		return (
			<View style={styles.container}>
				<ScrollView>
					<LinearGradient
						style={[
							globalStyles.profileInfo,
							{ justifyContent: 'center', height: 250 }
						]}
						colors={['#DC1E2D', '#B11522']}
						location={[0, 1]}
					>
						<View
							style={[
								globalStyles.detailContainer,
								{ paddingTop: 0 }
							]}
						>
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
						style={[globalStyles.couponChildren, { top: 220 - 10 }]}
						colors={['#DC1E2D', '#B11522']}
						location={[0, 1]}
					>
						<Text style={globalStyles.couponChildrenText}>
							My Coupouns
						</Text>
					</LinearGradient>
					<View style={[globalStyles.couponContainer, { top: 220 }]}>
						<Text style={globalStyles.couponContainerText}>
							2.250
						</Text>
					</View>
					<View style={globalStyles.mainContainer}>
						<View style={globalStyles.listContainer}>
							<MenuListButton onPress={this.redirectEditProfile.bind(this)}>Ubah Profil</MenuListButton>
							<MenuListButton onPress={this.redirectChangePassword.bind(this)}>Ubah Kata Sandi</MenuListButton>
                            <MenuListButton>Keluar</MenuListButton>
						</View>
					</View>
				</ScrollView>
				<LinkText style={{ alignSelf: 'center'}}>Delete my account</LinkText>
			</View>
		);
	}

	redirectEditProfile() {
		Actions.EditProfile();
	}

	redirectChangePassword() {
		Actions.ForgotPassword({ title: 'Atur ulang kata sandi', isReset: true });
	}
}

export default ProfileComponent;