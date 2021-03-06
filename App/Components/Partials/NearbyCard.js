import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	Dimensions,
	TouchableWithoutFeedback,
} from 'react-native';
import { Button } from '@partials';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
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
		alignItems: 'flex-start',
		borderRadius: 8,
		overflow: 'hidden',
		margin: 16
	},
	imageShop: {
		width: '100%',
		height: PAGE_WIDTH >= 768 ? 328 : 164,
		resizeMode: 'cover'
	}
};

class NearbyCard extends Component {
	redirectDetail() {
		Actions.ShopDetail({ item: this.props.item });
	}
	render() {
		return (
			<TouchableWithoutFeedback onPress={this.redirectDetail.bind(this)}>
				<View style={{ flexDirection: 'row' }}>
					<View style={styles.containerStyle}>
						<Image style={styles.imageShop} source={{ uri: this.props.item.image_url }} />
						<View style={globalStyles.detailCardContainer}>
							<Text style={globalStyles.shopName}>
								{this.props.item.name}
							</Text>
							<Text style={globalStyles.descriptionName}>
								{this.props.item.address}
							</Text>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'flex-start',
									alignItems: 'center',
									marginTop: 12
								}}
							>
								<View style={{ flexDirection: 'row' }}>
									{(this.props.item.promo_badge) ? <Button
										style={globalStyles.labelButton}
										textStyle={globalStyles.redButtonText}
									>
										Promo
									</Button> : null}
									{(this.props.item.paguyuban_badge) ?
										<Button
											style={[
												globalStyles.labelButton,
												{
													backgroundColor: '#fff',
													borderWidth: 1,
													borderColor: '#000'
												}
											]}
											textStyle={[
												globalStyles.redButtonText,
												{ color: '#000' }
											]}
										>
											Undian YBKS
								</Button> : null}

								</View>
								<View
									style={{
										flexDirection: 'row',
										alignItems: 'center'
									}}
								>
									<Icon name="directions-run" size={14} />
									<Text style={globalStyles.rangeText}>
										{this.props.item.distance} KM
									</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

export default NearbyCard;
