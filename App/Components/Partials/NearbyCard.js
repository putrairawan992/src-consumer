import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button } from '@partials';
import globalStyles from '../../GlobalStyles';
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
	}
};

const shopExample = require('@images/shop-example.png');

class NearbyCard extends Component {
	render() {
		return (
			<View style={{ flexDirection: 'row' }}>
				<View style={styles.containerStyle}>
					<Image style={styles.imageShop} source={shopExample} />
					<View style={globalStyles.detailCardContainer}>
						<Text style={globalStyles.shopName}>Toko H.Husin</Text>
						<Text style={globalStyles.descriptionName}>
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
								<Button style={globalStyles.labelButton} textStyle={globalStyles.redButtonText}>
										Promo
								</Button>
								<Button style={[globalStyles.labelButton, { backgroundColor: '#fff', borderWidth: 1, borderColor: '#000' }]} textStyle={[globalStyles.redButtonText, { color: '#000' }]}>
										Nama Undian
								</Button>
							</View>
							<View style={{ flexDirection: 'row',alignItems:'center' }}>
                               <Icon name="directions-run" size={14} />
                               <Text style={globalStyles.rangeText}>0.9 KM</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

export default NearbyCard;