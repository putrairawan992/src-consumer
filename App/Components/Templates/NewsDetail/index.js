import React, { Component } from 'react';
import { WebView, View, Text } from 'react-native';
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
	render() {
		return (
			<View style={{ flex: 1 }}>
				<WebView
					source={{ uri: this.props.newsLink }} style={{ paddingTop: 40, flex: 1 }}
				/>
				<View style={styles.fixedBottom}>
					<Icon name="share" size={24} color="#DC1E2D" />
					<View style={styles.likeContainer}>
						<Icon name="thumb-up" size={24} />
						<Text style={styles.likeCount}>20</Text>
					</View>
				</View>
			</View>
		);
	}
}

export default NewsDetailComponent;
