import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import globalStyles from '../../GlobalStyles';

class NewsCard extends Component {
	redirectNewsDetail() {
		Actions.NewsDetail();
	}

	render() {
		return (
			<TouchableWithoutFeedback onPress={this.redirectNewsDetail.bind(this)}>
				<View style={globalStyles.newsFeedCard}>
					<View>
						<Image
							source={this.props.item.image}
							style={globalStyles.newsFeedImage}
						/>
					</View>
					<View style={globalStyles.articlePreview}>
						<Text style={globalStyles.newsFeedText}>
							{this.props.item.children}
						</Text>
						<Text style={globalStyles.newsDate}>
							10 Minutes Ago
						</Text>
						<View style={globalStyles.likeContainer}>
							<Icon name="thumb-up" size={20} />
							<Text
								style={{
									fontFamily: 'ProximaNova-Regular',
									fontSize: 16,
									paddingLeft: 12
								}}
							>
								20
							</Text>
						</View>
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

export default NewsCard;
