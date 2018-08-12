import React, { Component } from 'react';
import { WebView } from 'react-native';

class NewsDetailComponent extends Component {
	render() {
		console.log('check link', this.props.newsLink);
		return (
				<WebView
					source={{ uri: this.props.newsLink }} style={{ paddingTop: 40 }}
				/>
		);
	}
}

export default NewsDetailComponent;
