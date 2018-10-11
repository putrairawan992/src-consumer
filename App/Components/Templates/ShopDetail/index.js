import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomAlert from '@helpers/CustomAlert';
import { trackScreen } from '@helpers/analytic';
import styles from './styles';

const pageName = this.pageName = 'nearby-list-view';

class ShopDetailComponent extends Component {

	componentWillMount() {
		const displayName = pageName + '-' + this.props.item.id;
		trackScreen(displayName);
	}
	

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

	linkWhatsapp(param) {
		const link = 'https://api.whatsapp.com/send?phone=' + param.substring(1);
        Linking.canOpenURL(link).then((supported) => {
            if (!supported) {
                CustomAlert(null, 'Perangkat tidak mendukung', [{ text: 'OK' }]);
            }
            else {
                return Linking.openURL(link);
            }
        });
    }

	redirectStatic(banner) {
		if (banner.target_page.type === 'static_page') {
			Actions.Static({ banner: banner });
		}
	}

	renderBanners() {
		return this.props.item.banners.map((value, index) => {
			return (
				<TouchableOpacity onPress={() => { this.redirectStatic(value); }} key={index} style={styles.bannerImageContainer}>
					<Image
						source={{ uri: value.image_url }}
						style={styles.bannerImage}
					/>
				</TouchableOpacity>
			);
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
						<View style={{ flexDirection: 'row' }}>
							<TouchableOpacity style={styles.buttonDirection} onPress={this.openLink.bind(this)}>
								<Icon name="directions" size={20} color={'#fff'} />
								<Text style={styles.textStyle}>Arahkan</Text>
							</TouchableOpacity>
							<TouchableOpacity style={[styles.buttonDirection, { backgroundColor: '#25D366', marginLeft: 12, width: 150 }]} onPress={() => {
								this.linkWhatsapp(this.props.item.phone);
							}}
							>
								<Icon name="phone" size={20} color={'#fff'} />
								<Text style={styles.textStyle}>{this.props.item.phone}</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View
					style={{
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						width: '95%'
					}}
				>
					{this.renderBanners()}
				</View>
			</ScrollView>
		);
	}
}

export default ShopDetailComponent;
