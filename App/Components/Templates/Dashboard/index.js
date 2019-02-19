import React, { Component } from 'react';
import { ScrollView, View, Image, Text, ImageBackground, ActivityIndicator, TouchableWithoutFeedback, RefreshControl } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import { MenuButton, NewsCard, Button } from '@partials';
import PermissionHelpers from '@helpers/Permission';
import CustomAlert from '@helpers/CustomAlert';
import Modal from 'react-native-modal';
import { trackScreen } from '@helpers/analytic';
import { CommonService } from '@services';
import globalStyles from '../../../GlobalStyles';
import * as globalActions from '../../../Store/GlobalReducer/actions';
import styles from './styles';


const ayoImg = require('@images/login-logo-dev.png');
const terdekatImg = require('@images/map-mini-icon.png');
const qrImg = require('@images/qr-icon.png');
const couponImg = require('@images/coupon-icon.png');

const pageName = this.pageName = 'dashboard';

class DashboardComponent extends Component {
	state = {
		loaded: false,
		banners: [],
		news: [],
		refreshing: false,
		checkNotif: null
	}
	async componentWillMount() {
		trackScreen(pageName);
		this.retrieveData();
		const checkNotif = await CommonService.checkNotif();
		if (checkNotif.updated === true) {
			this.setState({
				checkNotif
			});
		}
	}

	reopenCallBack() {
		this.setState({
			checkNotif: { ...this.state.checkNotif, updated: true }
		 });
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

	redirectTerm(type) {
		this.setState({
           checkNotif: { ...this.state.checkNotif, updated: false }
		});
		Actions.TermCondition({ termState: type, reopenCallback: this.reopenCallBack.bind(this) });
	}

	renderModalContent() {
		const a = this.state.checkNotif.content_types.includes('terms-conditions');
		const b = this.state.checkNotif.content_types.includes('privacy-policy')
        if (a && b) {
			return (
				<View style={{ marginTop: 12 }}>
					<Text style={styles.modalText}>Saya Telah membaca dan menyetujui <Text style={[styles.modalText, { color: '#DC1E2D'}]} onPress={this.redirectTerm.bind(this,'term')}>Syarat & Ketentuan</Text>  serta <Text style={[styles.modalText, { color: '#DC1E2D'}]} onPress={this.redirectTerm.bind(this,'privacy')}>Kebijakan Privasi</Text></Text>
				</View>
			)
		}
		else if (a && !b) {
			return (<View style={{ marginTop: 12 }}>
					<Text style={styles.modalText}>Saya Telah membaca dan menyetujui <Text style={[styles.modalText, { color: '#DC1E2D'}]} onPress={this.redirectTerm.bind(this,'term')}>Syarat & Ketentuan</Text></Text>  
			</View>);
		}
		else if (!a && b) {
			return (<View style={{ marginTop: 12 }}>
					<Text style={styles.modalText}>Saya Telah membaca dan menyetujui <Text style={[styles.modalText, { color: '#DC1E2D'}]} onPress={this.redirectTerm.bind(this,'privacy')}>Kebijakan Privasu</Text></Text>  
			</View>);
		}
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

	redirectMyCoupon() {
		Actions.MyCoupon();
	}

	redirectMyQr() {
		Actions.MyQr();
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
								{/* <WideButton onPress={this.redirectNearby.bind(this)} /> */}
								<MenuButton image={couponImg} onPress={this.redirectMyCoupon.bind(this)}>
									KUPON SAYA
								</MenuButton>
								<MenuButton image={qrImg} onPress={this.redirectMyQr.bind(this)} >
									KODE QR
								</MenuButton>
								<MenuButton image={terdekatImg} onPress={this.redirectNearby.bind(this)}>
									TERDEKAT
								</MenuButton>
							</View>
							<View style={{ flexDirection: 'row' }} >
								<Swiper
									style={globalStyles.horizontalSlider} dotColor="#fff" activeDotColor="#DC1E2D" autoplay autoplayTimeout={4}
								>
									{this.renderBanner()}
								</Swiper>
							</View>

							<View style={globalStyles.newsFeedContainer}>
								{this.renderNews()}
							</View>
						</View>
					</ScrollView>
					<Modal isVisible={this.state.checkNotif ? this.state.checkNotif.updated : false}>
						<View style={styles.modalContent}>
							<Text style={styles.modalTextHeader}>Syarat & Ketentuan diperbarui</Text>
							{this.state.checkNotif ? this.renderModalContent() : false}
							<Text style={[styles.modalText, { color: '#DC1E2D', textAlign: 'right', alignSelf: 'flex-end', marginTop: 24}]} onPress={async () => {
							   const payload = {
								   content_types: this.state.checkNotif.content_types,
								   from: 'customer'
							   };
							   await CommonService.updateContent(payload);
							   this.setState({
								   checkNotif: null
							   });
							}}>Setuju</Text>
						</View>
					</Modal>
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
