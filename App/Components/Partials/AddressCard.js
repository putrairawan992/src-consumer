import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import globalStyles from '../../GlobalStyles';

class AddressCard extends Component {
	redirectDetail() {
		Actions.ShopDetail({ item: this.props.item });
	}
	render() {
		return (
			<TouchableOpacity style={[globalStyles.detailCardContainer, { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#ececec', paddingHorizontal: 16, paddingBottom: 16 }]} onPress={this.redirectDetail.bind(this)} >
				<View style={{ flex: 10 }}>
					<Text style={globalStyles.shopName}>{this.props.item.name}</Text>
					<Text style={globalStyles.descriptionName}>
						{this.props.item.address}
					</Text>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							marginTop: 12
						}}
					>
						{/* <View style={{ flexDirection: 'row' }}>
							<Button
								style={globalStyles.labelButton}
								textStyle={globalStyles.redButtonText}
							>
								Promo
							</Button>
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
								Nama Undian
							</Button>
						</View> */}
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
				<View style={{ flex: 1 }}>
					<Icon name="keyboard-arrow-right" size={36} color="#ececec" />
				</View>
			</TouchableOpacity>
		);
	}
}

export default AddressCard;
