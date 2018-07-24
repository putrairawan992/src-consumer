import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import { CustomMapView, AddressCard } from '@partials';
import styles from './styles';
const PAGE_WIDTH = Dimensions.get('window').width;

const items = [
	{
		id: 0
	},
	{
		id: 1,

		children:
			'It’s always a great time to get “Back to Cool” and enjoy a picnic with family and friends.'
	},
	{
		id: 2,

		children:
			'It’s always a great time to get “Back to Cool” and enjoy a picnic with family and friends.'
	},
	{
		id: 3,

		children:
			'It’s always a great time to get “Back to Cool” and enjoy a picnic with family and friends.'
	},
	{
		id: 4,

		children:
			'It’s always a great time to get “Back to Cool” and enjoy a picnic with family and friends.'
	},
	{
		id: 5,

		children:
			'It’s always a great time to get “Back to Cool” and enjoy a picnic with family and friends.'
	},
	{
		id: 6,

		children:
			'It’s always a great time to get “Back to Cool” and enjoy a picnic with family and friends.'
	},
	{
		id: 7,

		children:
			'It’s always a great time to get “Back to Cool” and enjoy a picnic with family and friends.'
	},
	{
		id: 8,
		children:
			'It’s always a great time to get “Back to Cool” and enjoy a picnic with family and friends.'
	},
	{
		id: 9,
		children:
			'It’s always a great time to get “Back to Cool” and enjoy a picnic with family and friends.'
	},
	{
		id: 10,
		children:
			'It’s always a great time to get “Back to Cool” and enjoy a picnic with family and friends.'
	}
];

class NearbyMapViewComponent extends Component {
	renderItem(item) {
		if (item.item.id !== 0) {
			return <AddressCard />;
		}
		else {
			return <CustomMapView containerStyle={{ height: (PAGE_WIDTH >= 720 ? 350 : 200), width: '100%' }} />;
		}
	}
	render() {
		return (
			<FlatList
				data={items}
				renderItem={this.renderItem}
				contentContainerStyle={{ backgroundColor: '#fff' }}
			/>
		);
	}
}

export default NearbyMapViewComponent;