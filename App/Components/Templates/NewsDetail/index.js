import React, { Component } from 'react';
import { WebView, View, Text, TouchableWithoutFeedback } from 'react-native';
import { CommonService } from '@services';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
					<Icon name="share" size={24} color="#DC1E2D" />
					<TouchableWithoutFeedback onPress={this.likeNews.bind(this)}>
						<View style={styles.likeContainer}>
							<Icon name="thumb-up" size={24} color={this.state.like_status ? '#DC1E2D' : null} />
							<Text style={styles.likeCount}>{this.state.likes_count}</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
			</View>
		);
	}
}

export default NewsDetailComponent;
