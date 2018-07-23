import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button } from '@partials';
const PAGE_WIDTH = Dimensions.get('window').width;

const styles = {
	containerStyle: {
		flex: 1,
		flexDirection: 'column',
		height: 'auto',
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#ececec',
		paddingBottom: 22,
		elevation: 5,
		alignItems: 'center',
		borderRadius: 8,
		overflow: 'hidden',
		margin: 16
	},
	imageShop: {
		flex: 1,
		height: PAGE_WIDTH >= 768 ? 328 : 164,
		resizeMode: 'cover'
	},
	detailContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		paddingHorizontal: 20,
		marginTop: 21
	},
	shopName: {
		fontFamily: 'ProximaNova-Bold',
		fontSize: 14,
		lineHeight: 20,
		color: '#000'
	},
	descriptionName: {
		fontFamily: 'ProximaNova-Regular',
		color: '#000',
		fontSize: 12,
		lineHeight: 16,
		marginTop: 5
	},
	labelButton: {
		backgroundColor: '#DC1E2D',
		paddingVertical: 6,
		paddingHorizontal: 22,
		height: 'auto',
		borderRadius: 13,
		margin: 5,
		marginLeft: 0
	},
	redButtonText: {
		color: '#fff',
		fontFamily: 'ProximaNova-Regular',
		fontSize: 12
	},
	rangeText: {
		color: '#000',
		fontFamily: 'ProximaNova-Regular',
		fontSize: 14,
		marginRight: 5
	}
};

const shopExample = require('@images/shop-example.png');

class NearbyCard extends Component {
	render() {
		return (
			<View style={{ flexDirection: 'row' }}>
				<View style={styles.containerStyle}>
					<Image style={styles.imageShop} source={shopExample} />
					<View style={styles.detailContainer}>
						<Text style={styles.shopName}>Toko H.Husin</Text>
						<Text style={styles.descriptionName}>
							Jl. Pulo Kemandoran No.88, RT.4/RW.15, Grogol Utara,
							Kby. Lama, Kota Jakarta Selatan, Daerah Khusus
							Ibukota Jakarta 12210
						</Text>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								marginTop: 12
							}}
						>
							<View style={{ flexDirection: 'row' }}>
								<Button style={styles.labelButton} textStyle={styles.redButtonText}>
										Promo
								</Button>
								<Button style={[styles.labelButton, { backgroundColor: '#fff', borderWidth: 1, borderColor: '#000' }]} textStyle={[styles.redButtonText, { color: '#000' }]}>
										Nama Undian
								</Button>
							</View>
							<View style={{ flexDirection: 'row',alignItems:'center' }}>
                               <Icon name="directions-run" size={14} />
                               <Text style={styles.rangeText}>0.9 KM</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

export default NearbyCard;