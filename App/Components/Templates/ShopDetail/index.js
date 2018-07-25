import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { CustomMapView } from '@partials';
import styles from './styles';

class ShopDetailComponent extends Component {
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
						source={require('@images/shop-detail-example.png')}
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
					<Text style={styles.shopName}>Toko H.Husin</Text>
					<View style={{ flexDirection: 'column' }}>
						<Text style={styles.addressLabel}>Alamat</Text>
						<Text style={styles.addressValue}>
							Jl. Pulo Kemandoran No.88, RT.4/RW.15, Grogol Utara,
							Kby. Lama, Kota Jakarta Selatan, Daerah Khusus
							Ibukota Jakarta 12210
						</Text>
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
				</View>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<CustomMapView containerStyle={{ flex: 1, height: 180,marginTop: 10 }} />
				</View>
			</ScrollView>
		);
	}
}

export default ShopDetailComponent;