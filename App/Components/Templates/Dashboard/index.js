import React, { Component } from 'react';
import { ScrollView, View, Image, Text, ImageBackground, ActivityIndicator, TouchableWithoutFeedback, RefreshControl } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import { WideButton, NewsCard } from '@partials';
import PermissionHelpers from '@helpers/Permission';
import CustomAlert from '@helpers/CustomAlert';
import { trackScreen } from '@helpers/analytic';
import { CommonService } from '@services';
import globalStyles from '../../../GlobalStyles';
import * as globalActions from '../../../Store/GlobalReducer/actions';
import styles from './styles';


const ayoImg = require('@images/ayo-src-logo-w.png');

const pageName = this.pageName = 'dashboard';

class DashboardComponent extends Component {
	state = {
		loaded: false,
		banners: [],
		news: [],
		refreshing: false
	}
	componentWillMount() {
		trackScreen(pageName);
		this.retrieveData();
	}

	async refreshView() {
		this.setState({
			refreshing: true
		});
		await this.retrieveData();
		this.setState({
			refreshing: false
		});
	}

	retrieveData() {
		return new Promise((resolve) => {
			this.props.fetchProfile();
			CommonService.getDashboard().then((home) => {
				this.setState({
					banners: home.banners,
					news: home.news,
					loaded: true
				});
				resolve(home);
			});
		});
	}

	redirectStatic(banner) {
		if (banner.target_page.type === 'static_page') {
			Actions.Static({ banner: banner });
		}
	}

	async redirectNearby() {
		const locationStatus = await PermissionHelpers.requestLocationPermission();
		if (locationStatus === true) {
			navigator.geolocation.getCurrentPosition((info) => {
				const locationPayload = {
					latitude: info.coords.latitude,
					longitude: info.coords.longitude
				};
				this.props.createLocation(locationPayload);
				Actions.Nearby();
			}, (err) => {
				CustomAlert(null, 'Terjadi Kesalahan saat memuat lokasi. Izinkan perangkat untuk mendapatkan lokasi atau coba beberapa saat lagi ', [{ text: 'OK' }]);
				console.log('location error', err);
			}, {
					enableHighAccuracy: false
				});
		}
		else {
			CustomAlert(null, 'Terjadi Kesalahan saat memuat lokasi. Izinkan perangkat untuk mendapatkan lokasi atau coba beberapa saat lagi ', [{ text: 'OK' }]);
		}
		// Actions.Nearby();
	}

	renderBanner() {
		return this.state.banners.map((val) => {
			return (
				<TouchableWithoutFeedback
					onPress={() => {
						this.redirectStatic(val);
					}}
					key={val.id}
				>
					<Image
						source={{ uri: val.image_url }}
						style={globalStyles.sliderImg}
					/>
				</TouchableWithoutFeedback>
			);
		});
	}

	renderNews() {
		return this.state.news.map((val) => {
			return (
				<NewsCard item={val} key={val.id} />
			);
		});
	}

	render() {
		if (this.state.loaded) {
			return (
				<View style={styles.container}>
					<ScrollView
						refreshControl={
						<RefreshControl
							refreshing={this.state.refreshing}
							onRefresh={this.refreshView.bind(this)}
						/>}
					>
						<ImageBackground
							style={globalStyles.profileInfo}
							source={require('@images/profile-bg.png')}
						>
							<View style={globalStyles.imgPadder}>
								<Image
									style={globalStyles.logoImg}
									source={ayoImg}
								/>
							</View>
							<TouchableWithoutFeedback
								onPress={() => {
									Actions.EditProfile();
								}}
							>
								<View style={globalStyles.detailContainer}>
									<Image
										style={globalStyles.personImg}
										source={{ uri: this.props.globalProfile.image_url }}
									/>
									<Text style={globalStyles.detailText}>
										{this.props.globalProfile.fullname}
									</Text>
								</View>
							</TouchableWithoutFeedback>
						</ImageBackground>
						{/* <LinearGradient
							style={globalStyles.couponChildren}
							colors={['#DC1E2D', '#B11522']}
							location={[0, 1]}
						> */}
						{/* <Text style={globalStyles.couponChildrenText}>
								My Coupouns
							</Text> */}
						{/* </LinearGradient> */}
						{/* <View style={globalStyles.couponContainer}>
							<Text style={globalStyles.couponContainerText}>
								2.250
							</Text>
						</View> */}
						<View style={globalStyles.mainContainer}>
							<View style={globalStyles.menuRow}>
								<WideButton onPress={this.redirectNearby.bind(this)} />
							</View>
							<View style={{ flexDirection: 'row' }} >
								<Swiper
									style={globalStyles.horizontalSlider} dotColor="#fff" activeDotColor="#DC1E2D"
								>
									{this.renderBanner()}
								</Swiper>
							</View>

							<View style={globalStyles.newsFeedContainer}>
								{this.renderNews()}
							</View>
						</View>
					</ScrollView>
				</View >
			);
		}
		return (
			<View style={[styles.container, { flex: 1 }]}>
				<ActivityIndicator size="large" color="#DC1E2D" />
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		globalProfile: state.globalReducer.globalProfile
	};
};

export default connect(mapStateToProps, globalActions)(DashboardComponent);
