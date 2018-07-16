import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import globalStyles from '../../GlobalStyles';

class NewsCard extends Component {
	render() {
		return (
			<View style={globalStyles.newsFeedCard}>
			  <View>
				<Image
					source={this.props.image}
					style={globalStyles.newsFeedImage}
				/>
				</View>
				<View style={globalStyles.articlePreview}>
					<Text style={globalStyles.newsFeedText}>
						{this.props.children}
					</Text>
					<Text style={globalStyles.newsDate}>
						10 Minutes Ago
					</Text>
					<View style={globalStyles.likeContainer}>
                       <Icon name="thumb-up" size={20}/>
                       <Text style={ { fontFamily:'ProximaNova-Regular', fontSize: 16,paddingLeft: 12 } }>20</Text>
					</View>
				</View>
			</View>
		);
	}
}

export default NewsCard;
