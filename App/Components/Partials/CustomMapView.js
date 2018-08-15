import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

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
	renderMarker(markers) {
		return markers.map((marker, idx) => (
			<Marker
				key={idx.toString()}
				coordinate={marker.coordinate}
				image={require('@images/map-marker.png')}
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
