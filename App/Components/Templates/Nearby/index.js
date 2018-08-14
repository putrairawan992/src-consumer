import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { NearbyCard } from '@partials';
import { CommonService } from '@services';
import * as globalActions from '../../../Store/GlobalReducer/actions';
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
			const nearbyParam = {
				page: this.state.page,
				per_page: this.state.per_page,
				latitude: this.props.latitude,
				longitude: this.props.longitude
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
		});
	}

	renderItem(item) {
		return <NearbyCard item={item.item} />;
	}

	render() {
		if (this.state.loaded) {
			return (
				<View style={styles.container}>
					<FlatList
						data={this.state.locations}
						keyExtractor={i => i.id.toString()}
						renderItem={this.renderItem}
						onEndReached={this.handleLoadMore}
						onEndThreshold={0}
						refreshing={this.state.isRefreshing}
						onRefresh={this.handleRefresh}
					/>
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

const mapStateToProps = (state) => {
	return {
		latitude: state.globalReducer.location.latitude,
		longitude: state.globalReducer.location.longitude
	};
};

export default connect(mapStateToProps, globalActions)(NearbyComponent);
