import React, { Component } from 'react';
import { ScrollView, View, Image, Text, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { MenuListButton, Loader } from '@partials';
import { CommonService } from '@services';
import { removeAuthFromStorage } from '@helpers/Storage';
import { Actions } from 'react-native-router-flux';
import globalStyles from '../../../GlobalStyles';
import * as globalActions from '../../../Store/GlobalReducer/actions';
import styles from './styles';

class ProfileComponent extends Component {
	state = {
		baseLoading: false
	};

	componentWillMount() {
		this.retrieveData();
	}

	redirectEditProfile() {
		Actions.EditProfile();
	}

	redirectChangePassword() {
		Actions.ForgotPassword({ title: 'Atur ulang kata sandi', isReset: true });
	}

	redirectDelete() {
		Actions.DeleteAccount();
	}

	retrieveData() {
		this.props.fetchProfile();
	}

	submitLogout() {
		this.setState({ baseLoading: true });
		CommonService.signOut().then(async() => {
			await removeAuthFromStorage();
			this.props.revokeProfile();
			this.setState({ baseLoading: false });
			Actions.reset('WelcomeScreen');
		}).catch(() => {
			this.setState({ baseLoading: false });
		});
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
								source={{ uri: this.props.globalProfile.image_url }}
							/>
							<Text style={globalStyles.detailText}>
								{this.props.globalProfile.fullname}
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
							<MenuListButton onPress={this.redirectChangePassword.bind(this)}>Pengaturan Privasi</MenuListButton>
							<MenuListButton onPress={this.submitLogout.bind(this)}>Keluar</MenuListButton>
						</View>
					</View>
				</ScrollView>
				<Loader visible={this.state.baseLoading} text="Logout..." />
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		globalProfile: state.globalReducer.globalProfile
	};
};

export default connect(mapStateToProps, globalActions)(ProfileComponent);
