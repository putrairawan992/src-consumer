import React, { Component } from 'react';
import { View, Text, WebView } from 'react-native';

class NewsDetailComponent extends Component {
	render() {
		return (
				<WebView
					source={{ uri: 'https://www.antaranews.com/berita/729889/tim-voli-putri-asian-school-games-harus-puas-sebagai-runner-up' }} style={{paddingTop: 40}}
				/>
		);
	}
}

export default NewsDetailComponent;