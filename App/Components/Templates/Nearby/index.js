import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { NearbyCard } from '@partials';
import { CommonService } from '@services';
import CustomAlert from '@helpers/CustomAlert';
import styles from './styles';

class NearbyComponent extends Component {
	state = {
		loaded: false,
		isRefreshing: false,
		last_page: null,
		page: 1,
		per_page: 3,
		locations: []
	};

	async componentWillMount() {
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
						isRefreshing: false
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
		return <NearbyCard item={item.item} />;
	}

	renderFlatList() {
		if (this.state.locations.length > 0) {
			return (
				<FlatList
					data={this.state.locations}
					keyExtractor={i => i.id.toString()}
					renderItem={this.renderItem}
					onEndReached={this.handleLoadMore}
					onEndThreshold={0}
					refreshing={this.state.isRefreshing}
					onRefresh={this.handleRefresh}
				/>
			);
		}
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text style={{ fontFamily: 'ProximaNova-Regular', fontSize: 20, color: '#000' }}>Tidak ada toko di lokasi ini</Text>
			</View>
		);
	}

	render() {
		if (this.state.loaded) {
			return (
				<View style={styles.container}>
                   {this.renderFlatList()}
				</View>
			);
		}
		return (
			<View style={[styles.container, { flex: 1 }]}>
				<ActivityIndicator size="large" color="#DC1E2D" />
			</View>
		);
	}
}

export default NearbyComponent;
