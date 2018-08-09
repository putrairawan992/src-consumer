import React, { Component } from 'react';
import { ScrollView, View, Image, Text, ImageBackground } from 'react-native';
import { MenuListButton, LinkText } from '@partials';
import { Actions } from 'react-native-router-flux';
import globalStyles from '../../../GlobalStyles';
import styles from './styles';

const personFace = require('@images/person-face.jpeg');

class ProfileComponent extends Component {
	redirectEditProfile() {
		Actions.EditProfile();
	}

	redirectChangePassword() {
		Actions.ForgotPassword({ title: 'Atur ulang kata sandi', isReset: true });
	}

	redirectDelete() {
		Actions.DeleteAccount();
	}

	render() {
		return (
			<View style={styles.container}>
				<ScrollView>
					<ImageBackground
						source={require('@images/profile-bg.png')}
						style={[
							globalStyles.profileInfo,
							{ justifyContent: 'center', height: 250 }
						]}
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
					</ImageBackground>
					<View style={globalStyles.cardContainer}>
						<Image source={require('@images/card.png')} style={globalStyles.cardImg} />
						<View style={globalStyles.cardText}>
						  <Text style={[globalStyles.innerText]}>0812 777 456 2637</Text>
						  <Text style={[globalStyles.innerText, { fontFamily: 'ProximaNova-Regular' }]}>Rizki Adrian</Text>
						</View>
					</View>
					{/* <LinearGradient
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
					</View> */}
					<View style={globalStyles.mainContainer}>
						<View style={globalStyles.listContainer}>
							<MenuListButton onPress={this.redirectEditProfile.bind(this)}>Ubah Profil</MenuListButton>
							<MenuListButton onPress={this.redirectChangePassword.bind(this)}>Ubah Kata Sandi</MenuListButton>
							<MenuListButton>Keluar</MenuListButton>
						</View>
					</View>
					<LinkText style={{ alignSelf: 'center' }} onPress={this.redirectDelete.bind(this)}>Delete my account</LinkText>
				</ScrollView>
			</View>
		);
	}
}

export default ProfileComponent;
