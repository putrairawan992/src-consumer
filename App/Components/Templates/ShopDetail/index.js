import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
						<TouchableOpacity style={styles.buttonDirection}>
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
