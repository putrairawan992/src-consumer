import React, { Component } from 'react';
import { ScrollView, View, Image, Text, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { MenuListButton, Loader } from '@partials';
import { CommonService } from '@services';
import { removeAuthFromStorage } from '@helpers/Storage';
import { Actions } from 'react-native-router-flux';
import { trackScreen } from '@helpers/analytic';
import globalStyles from '../../../GlobalStyles';
import * as globalActions from '../../../Store/GlobalReducer/actions';
import styles from './styles';

const pageName = this.pageName = 'profile';

class ProfileComponent extends Component {
	state = {
		baseLoading: false
	};

	componentWillMount() {
		trackScreen(pageName);
		this.retrieveData();
	}

	redirectEditProfile() {
		Actions.EditProfile();
	}

	redirectDelete() {
		Actions.DeleteAccount();
	}

	redirectPrivacy() {
		Actions.Privacy();
	}

	retrieveData() {
		this.props.fetchProfile();
	}

	submitLogout() {
		this.setState({ baseLoading: true });
		CommonService.signOut().then(async () => {
			await removeAuthFromStorage();
			this.props.revokeProfile();
			this.setState({ baseLoading: false });
			Actions.reset('LoginPage');
		}).catch(() => {
			this.setState({ baseLoading: false });
		});
	}

	isNotComplete() {
		if (this.props.globalProfile.fullname && this.props.globalProfile.phone && this.props.globalProfile.gender && this.props.globalProfile.birth_date && (calculateAge(this.props.globalProfile.birth_date) >= 18 ? this.props.globalProfile.id_number : true) && this.props.globalProfile.city_id && this.props.globalProfile.province_id && this.props.globalProfile.email) {
			return false;
		}
		return true;
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
							<TouchableWithoutFeedback
								onPress={() => {
									Actions.EditProfile();
								}}
							>
								<Image
									style={globalStyles.personImg}
									source={{ uri: this.props.globalProfile.image_url }}
								/>
							</TouchableWithoutFeedback>
							<Text style={globalStyles.detailText}>
								{this.props.globalProfile.fullname}
							</Text>
						</View>
					</ImageBackground>
					<View style={globalStyles.cardContainer}>
						<Image source={require('@images/card.png')} style={globalStyles.cardImg} />
						<View style={globalStyles.cardText}>
							<Text style={[globalStyles.innerText]}>{(this.props.globalProfile.phone) ? 0 + this.props.globalProfile.phone.slice(3) : null}</Text>
							<Text style={[globalStyles.innerText, { fontFamily: 'ProximaNova-Regular' }]}>{this.props.globalProfile.fullname}</Text>
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
							<MenuListButton onPress={this.redirectEditProfile.bind(this)} bubble={this.isNotComplete()}>Ubah Profil</MenuListButton>
							<MenuListButton onPress={this.redirectPrivacy.bind(this)}>Pengaturan Privasi</MenuListButton>
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

const calculateAge = (birthday) => {
	return Math.floor((new Date() - new Date(birthday)) / 1000 / 60 / 60 / 24 / 365.25);
};

export default connect(mapStateToProps, globalActions)(ProfileComponent);
