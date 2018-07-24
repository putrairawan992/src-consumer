import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image, Text } from 'react-native';
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
	state = {
		markers: [
			{
				coordinate: { latitude: -6.214339, longitude: 106.814879 },
				name: 'Teras Benhil',
				key: '1'
			},
			{
				coordinate: { latitude: -6.210966, longitude: 106.810939 },
				name: 'RS Mitoharjo',
				key: '2'
			},
			{
				coordinate: { latitude: -6.20654, longitude: 106.809835 },
				name: 'Uteesme',
				key: '3'
			},
			{
				coordinate: { latitude: -6.208787, longitude: 106.81005 },
				name: 'Danau Toba',
				key: '4'
			}
		]
	};
	render() {
		return (
			<View style={[styles.container, this.props.containerStyle]}>
				<MapView
					style={[styles.map, this.props.mapStyle]}
					region={{
						latitude: -6.20889,
						longitude: 106.807514,
						latitudeDelta: 0.00522,
						longitudeDelta:
							(Dimensions.get('window').width /
								Dimensions.get('window').height) *
							0.00522
					}}
				>
					{this.renderMarker()}
				</MapView>
			</View>
		);
	}

	renderMarker() {
		return this.state.markers.map((marker, idx) => (
			<Marker
				key={idx.toString()}
				coordinate={marker.coordinate}
				image={require('@images/map-marker.png')}
			>
			</Marker>
		));
	}
}

export default CustomMapView;