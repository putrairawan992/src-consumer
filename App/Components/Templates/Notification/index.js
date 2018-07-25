import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { NotificationSegment } from '@partials';
import styles from './styles';

const items = [
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
class NotificationComponent extends Component {
	renderItem(item) {
		return <NotificationSegment item={item.item} />;
	}
	render() {
		return (
			<View style={styles.container}>
				<FlatList data={items} renderItem={this.renderItem} />
			</View>
		);
	}
}

export default NotificationComponent;
