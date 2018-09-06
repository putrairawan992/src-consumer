import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
	container: {
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	map: {
		...StyleSheet.absoluteFillObject
	}
});

class CustomMapView extends Component {
	getMarkers(locations) {
		return locations.map((value) => {
			return {
				coordinate: { latitude: parseFloat(value.latitude), longitude: parseFloat(value.longitude) },
				name: value.name,
				key: value.id
			};
		});
	}
	redirectDetail(id) {
		Actions.ShopDetail({ item: this.props.locations.find((location) => {
			return location.id === id;
		}) });
	}
	renderMarker(markers) {
		return markers.map((marker, idx) => (
			<Marker
				key={idx.toString()}
				coordinate={marker.coordinate}
				image={require('@images/map-marker.png')}
				onPress={() => {
					this.redirectDetail(marker.key);
				}}
			/>
		));
	}

	render() {
		const markers = this.getMarkers(this.props.locations);
		return (
			<View style={[styles.container, this.props.containerStyle]}>
				<MapView
					style={[styles.map, this.props.mapStyle]}
					region={{
						latitude: parseFloat(this.props.initialLocation.latitude),
						longitude: parseFloat(this.props.initialLocation.longitude),
						latitudeDelta: 0.00522,
						longitudeDelta:
							(Dimensions.get('window').width /
								Dimensions.get('window').height) *
							0.00522
					}}
				>
					{this.renderMarker(markers)}
				</MapView>
			</View>
		);
	}
}

export default CustomMapView;
