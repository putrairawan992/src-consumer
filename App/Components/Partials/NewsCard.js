import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import TimeAgo from 'react-native-timeago';
import moment from 'moment';
import globalStyles from '../../GlobalStyles';

require('moment/locale/id');

moment.locale('id');

class NewsCard extends Component {
	redirectNewsDetail() {
		Actions.NewsDetail({ newsLink: this.props.item.link });
	}

	render() {
		return (
			<TouchableWithoutFeedback onPress={this.redirectNewsDetail.bind(this)}>
				<View style={globalStyles.newsFeedCard}>
					<View>
						<Image
							source={{ uri: this.props.item.image }}
							style={globalStyles.newsFeedImage}
						/>
					</View>
					<View style={globalStyles.articlePreview}>
						<Text style={globalStyles.newsFeedText}>
							{this.props.item.title}
						</Text>
						<Text style={globalStyles.newsDate}>
							<TimeAgo time={this.props.item.date} interval={20000} />
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
								{this.props.item.likes_count}
							</Text>
						</View>
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

export default NewsCard;
