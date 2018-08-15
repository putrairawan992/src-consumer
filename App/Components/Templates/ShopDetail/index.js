import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomAlert from '@helpers/CustomAlert';
import styles from './styles';

class ShopDetailComponent extends Component {

	openLink() {
		navigator.geolocation.getCurrentPosition((info) => {
			const locationPayload = {
				latitude: info.coords.latitude,
				longitude: info.coords.longitude
			};
			const urlParameter = 'https://www.google.com/maps/dir/?api=1&origin=' + parseFloat(locationPayload.latitude) + ',' + parseFloat(locationPayload.longitude) + '&destination=' + parseFloat(this.props.item.latitude) + ',' + parseFloat(this.props.item.longitude);
			Linking.openURL(urlParameter);
		}, () => {
			CustomAlert(null, 'Terjadi Kesalahan saat memuat lokasi. Izinkan perangkat untuk mendapatkan lokasi atau coba beberapa saat lagi ', [{ text: 'OK' }]);
		});
	}

	render() {
		return (
			<ScrollView contentContainerStyle={styles.container}>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<Image
						style={styles.shopDetailImage}
						source={{ uri: this.props.item.image_url }}
					/>
				</View>
				<View
					style={{
						flexDirection: 'column',
						marginHorizontal: 21,
						marginVertical: 26,
						alignItems: 'flex-start',
						justifyContent: 'flex-start',
						alignSelf: 'flex-start'
					}}
				>
					<Text style={styles.shopName}>{this.props.item.name}</Text>
					<View style={{ flexDirection: 'column' }}>
						<Text style={styles.addressLabel}>Alamat</Text>
						<Text style={styles.addressValue}>
							{this.props.item.address}
						</Text>
						<TouchableOpacity style={styles.buttonDirection} onPress={this.openLink.bind(this)}>
							<Icon name="directions" size={20} color={'#fff'} />
							<Text style={styles.textStyle}>Arahkan</Text>
						</TouchableOpacity>
					</View>
				</View>
				{/* <View
					style={{
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						width: '95%'
					}}
				>
					<Image
						source={require('@images/example-banner.png')}
						style={styles.bannerImage}
					/>
					<Image
						source={require('@images/example-banner.png')}
						style={styles.bannerImage}
					/>
					<Image
						source={require('@images/example-banner.png')}
						style={styles.bannerImage}
					/>
				</View> */}
			</ScrollView>
		);
	}
}

export default ShopDetailComponent;
