import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { NearbyCard } from '@partials';
import { CommonService } from '@services';
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
	state = {
		locations: [],
		loaded: false
	};

	componentWillMount() {
		const nearbyParam = {
			latitude: this.props.latitude,
			longitude: this.props.longitude
		};

		CommonService.getNearby(nearbyParam).then((location) => {
			this.setState({
				locations: location.data,
				loaded: true
			});
		});
	}

	renderItem() {
		return <NearbyCard />;
	}

	render() {
		if (this.state.loaded) {
			return (
				<View style={styles.container}>
					<FlatList
						data={items}
						renderItem={this.renderItem}
					/>
				</View>
			);
		}
		return (
			<View style={[styles.container, { flex: 1 }]}>
				<ActivityIndicator size="large" color="#DC1E2D" />
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
