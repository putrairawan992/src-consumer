import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import TimeAgo from 'react-native-timeago';
import moment from 'moment';
import { CommonService } from '@services';
import globalStyles from '../../GlobalStyles';

require('moment/locale/id');

moment.locale('id');

class NewsCard extends Component {
	state = {
		like_status: this.props.item.like_status,
		likes_count: this.props.item.likes_count
	}
	redirectNewsDetail() {
		Actions.NewsDetail({ news: this.props.item });
	}

	likeNews() {
		const params = {
			newsfeed_id: this.props.item.id
		};
		CommonService.likeNews(params).then((response) => {
			if (response.status === true) {
				this.setState({
					like_status: !this.state.like_status,
					likes_count: (this.state.like_status === false) ? this.state.likes_count + 1 : this.state.likes_count - 1
				});
			}
		});
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
							<TouchableWithoutFeedback onPress={this.likeNews.bind(this)}>
								<Icon name="thumb-up" color={this.state.like_status ? '#DC1E2D' : null} size={20} />
							</TouchableWithoutFeedback>
							<Text
								style={{
									fontFamily: 'ProximaNova-Regular',
									fontSize: 16,
									paddingLeft: 12
								}}
							>
								{this.state.likes_count}
							</Text>
						</View>
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

export default NewsCard;
