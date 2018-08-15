import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import globalStyles from '../../GlobalStyles';

class AddressCard extends Component {
	render() {
		return (
			<View style={[globalStyles.detailCardContainer, { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#ececec', paddingHorizontal: 16, paddingBottom: 16 }]} >
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
					</View>
				</View>
				<View style={{ flex: 1 }}>
                   <Icon name="keyboard-arrow-right" size={36} color="#ececec" />
				</View>
			</View>
		);
	}
}

export default AddressCard;
