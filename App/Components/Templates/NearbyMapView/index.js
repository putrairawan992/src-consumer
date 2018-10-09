import React, { Component } from 'react';
import { FlatList, Dimensions, View, ActivityIndicator, Text } from 'react-native';
import { CustomMapView, AddressCard } from '@partials';
import { CommonService } from '@services';
import { trackScreen } from '@helpers/analytic';
import { CustomAlert } from '@helpers/CustomAlert';
import styles from './styles';

const pageName = this.pageName = 'nearby-map-view';

const PAGE_WIDTH = Dimensions.get('window').width;

class NearbyMapViewComponent extends Component {
	state = {
		loaded: false,
		isRefreshing: false,
		last_page: null,
		page: 1,
		per_page: 20,
		locations: [],
		latitude: null,
		longitude: null

	}

	async componentWillMount() {
		trackScreen(pageName);
		await this.loadLocations(true);
		this.setState({ loaded: true });
	}

	handleLoadMore = () => {
		if (this.state.page < this.state.last_page) {
			this.setState({
				page: this.state.page + 1
			}, () => {
				this.loadLocations();
			});
		}
	};

	handleRefresh = () => {
		this.setState({
			page: 1
		}, () => {
			this.loadLocations();
		});
	}

	loadLocations(isInit = false) {
		return new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition((info) => {
				const locationPayload = {
					latitude: info.coords.latitude,
					longitude: info.coords.longitude
				};
				const nearbyParam = {
					page: this.state.page,
					per_page: this.state.per_page,
					latitude: locationPayload.latitude,
					longitude: locationPayload.longitude
				};
				CommonService.getNearby(nearbyParam).then((location) => {
					this.setState({
						locations: this.state.page === 1 ? location.data : [...this.state.locations, ...location.data],
						isRefreshing: false,
						latitude: locationPayload.latitude,
						longitude: locationPayload.longitude
					});
					if (isInit) {
						this.setState({
							last_page: location.last_page
						});
					}
					resolve(location);
				}).catch((err) => {
					reject(err);
				});
			}, (err) => {
				CustomAlert(null, 'Terjadi Kesalahan saat memuat lokasi. Izinkan perangkat untuk mendapatkan lokasi atau coba beberapa saat lagi ', [{ text: 'OK' }]);
				console.log('location error', err);
			}, {
					enableHighAccuracy: false
				});
		});
	}

	renderItem(item) {
		return <AddressCard item={item.item} />;
	}

	render() {
		if (this.state.loaded) {
			if (this.state.locations.length > 0) {
				return (
					<View style={styles.container}>
						<CustomMapView locations={this.state.locations} initialLocation={{ latitude: this.state.latitude, longitude: this.state.longitude }} containerStyle={{ height: (PAGE_WIDTH >= 720 ? 350 : 200), width: '100%' }} />
						<FlatList
							data={this.state.locations}
							keyExtractor={i => i.id.toString()}
							renderItem={this.renderItem}
							onEndReached={this.handleLoadMore}
							onEndThreshold={0}
							refreshing={this.state.isRefreshing}
							onRefresh={this.handleRefresh}
							contentContainerStyle={{ backgroundColor: '#fff' }}
						/>
					</View>
				);
			}
			return (
				<View style={styles.container}>
					<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
						<Text style={{ fontFamily: 'ProximaNova-Regular', fontSize: 20, color: '#000' }}>Tidak ada toko di lokasi ini</Text>
					</View>
				</View>
			);
		}
		return (
			<View style={styles.container}>
				<ActivityIndicator size="large" color="#DC1E2D" />
			</View>
		);
	}
}

export default NearbyMapViewComponent;
