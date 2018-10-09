import React, { Component } from 'react';
import { WebView, View, Text, TouchableWithoutFeedback } from 'react-native';
import { CommonService } from '@services';
import { EventRegister } from 'react-native-event-listeners';
import { trackScreen } from '@helpers/analytic';
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/MaterialIcons';

const pageName = this.pageName = 'news-detail';

const styles = {
	fixedBottom: {
		height: 40,
		width: '100%',
		position: 'absolute',
		bottom: 0,
		backgroundColor: '#fff',
		borderTopWidth: 2,
		borderColor: '#ececec',
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 24
	},
	likeCount: {
		fontFamily: 'ProximaNova-Regular',
		fontSize: 12,
		color: '#000',
		marginLeft: 11
	},
	likeContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 30
	}
};

class NewsDetailComponent extends Component {
	state = {
		like_status: this.props.news.like_status,
		likes_count: this.props.news.likes_count
	}

	componentWillMount() {
		const showName = pageName + '-' + this.props.news.id;
		trackScreen(showName);
	}

	shareNews() {
		const shareOptions = {
			title: 'Share via',
			url: this.props.news.link
		};
		Share.open(shareOptions);
	}

	likeNews() {
		const context = {
			newsfeed_id: this.props.news.id
		};
		CommonService.likeNews(context).then((response) => {
			if (response.status === true) {
				this.setState({
					like_status: !this.state.like_status,
					likes_count: (this.state.like_status === false) ? this.state.likes_count + 1 : this.state.likes_count - 1
				});
				const likeObj = {
					like_status: this.state.like_status,
					likes_count: this.state.likes_count,
					news_id: this.props.news.id
				};
				EventRegister.emit('newsLike', likeObj);
			}
		});
	}
	render() {
		return (
			<View style={{ flex: 1 }}>
				<WebView
					source={{ uri: this.props.news.link }} style={{ paddingTop: 40, flex: 1 }}
				/>
				<View style={styles.fixedBottom}>
					<TouchableWithoutFeedback onPress={this.shareNews.bind(this)}>
						<Icon name="share" size={24} color="#DC1E2D" />
					</TouchableWithoutFeedback>
					<View style={styles.likeContainer}>
						<TouchableWithoutFeedback onPress={this.likeNews.bind(this)}>
							<Icon name="thumb-up" size={24} color={this.state.like_status ? '#DC1E2D' : null} />
						</TouchableWithoutFeedback>
						<Text style={styles.likeCount}>{this.state.likes_count}</Text>
					</View>
				</View>
			</View>
		);
	}
}

export default NewsDetailComponent;
