import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { NearbyCard } from '@partials';
import * as globalActions from '../../../Store/GlobalReducer/actions';
import styles from './styles';

const exampleNews = require('@images/news-example.png');

const items = [
	{
		id: 1,
		image: exampleNews,
		children:
			'It’s always a great time to get “Back to Cool” and enjoy a picnic with family and friends.'
	},
	{
		id: 2,
		image: exampleNews,
		children:
			'It’s always a great time to get “Back to Cool” and enjoy a picnic with family and friends.'
	},
	{
		id: 3,
		image: exampleNews,
		children:
			'It’s always a great time to get “Back to Cool” and enjoy a picnic with family and friends.'
	},
	{
		id: 4,
		image: exampleNews,
		children:
			'It’s always a great time to get “Back to Cool” and enjoy a picnic with family and friends.'
	},
	{
		id: 5,
		image: exampleNews,
		children:
			'It’s always a great time to get “Back to Cool” and enjoy a picnic with family and friends.'
	},
	{
		id: 6,
		image: exampleNews,
		children:
			'It’s always a great time to get “Back to Cool” and enjoy a picnic with family and friends.'
	},
	{
		id: 7,
		image: exampleNews,
		children:
			'It’s always a great time to get “Back to Cool” and enjoy a picnic with family and friends.'
	},
	{
		id: 8,
		image: exampleNews,
		children:
			'It’s always a great time to get “Back to Cool” and enjoy a picnic with family and friends.'
	},
	{
		id: 9,
		image: exampleNews,
		children:
			'It’s always a great time to get “Back to Cool” and enjoy a picnic with family and friends.'
	},
	{
		id: 10,
		image: exampleNews,
		children:
			'It’s always a great time to get “Back to Cool” and enjoy a picnic with family and friends.'
	}
];

class NearbyComponent extends Component {
	renderItem() {
		return <NearbyCard />;
	}

	render() {
		console.log('check props nearby', this.props.latitude, this.props.longitude);
		return (
			<View style={styles.container}>
				<FlatList
					data={items}
					renderItem={this.renderItem}
				/>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		latitude: state.globalReducer.location.latitude,
		longitude: state.globalReducer.location.longitude
	};
};

export default connect(mapStateToProps, globalActions)(NearbyComponent);
