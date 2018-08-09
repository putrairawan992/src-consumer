import React, { Component } from 'react';
import { ScrollView, View, Image, Text, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import { WideButton, NewsCard } from '@partials';
import globalStyles from '../../../GlobalStyles';
import styles from './styles';


const ayoImg = require('@images/ayo-src-logo-w.png');
const personFace = require('@images/person-face.jpeg');
const exampleImage = require('@images/example-banner.png');
const exampleNews = require('@images/news-example.png');


const itemDummy = {
	image: exampleNews,
	children:
		'It’s always a great time to get “Back to Cool” and enjoy a picnic with family and friends.'
};

class DashboardComponent extends Component {
	redirectNearby() {
		Actions.Nearby();
	}

	redirectCard() {
		Actions.MyCard();
	}

	componentWillMount() {

	}

	render() {
		return (
			<View style={styles.container}>
				<ScrollView>
					<ImageBackground
						style={globalStyles.profileInfo}
						source={require('@images/ayo-bg-login.png')}
					>
						<View style={globalStyles.imgPadder}>
							<Image
								style={globalStyles.logoImg}
								source={ayoImg}
							/>
						</View>
						<View style={globalStyles.detailContainer}>
							<Image
								style={globalStyles.personImg}
								source={personFace}
							/>
							<Text style={globalStyles.detailText}>
								Michael Robinson
							</Text>
						</View>
					</ImageBackground>
					{/* <LinearGradient
						style={globalStyles.couponChildren}
						colors={['#DC1E2D', '#B11522']}
						location={[0, 1]}
					> */}
						{/* <Text style={globalStyles.couponChildrenText}>
							My Coupouns
						</Text> */}
					{/* </LinearGradient> */}
					{/* <View style={globalStyles.couponContainer}>
						<Text style={globalStyles.couponContainerText}>
							2.250
						</Text>
					</View> */}
					<View style={globalStyles.mainContainer}>
						<View style={globalStyles.menuRow}>
							<WideButton onPress={this.redirectNearby.bind(this)} />
						</View>
						<View style={{ flexDirection: 'row' }} >
							<Swiper
								style={globalStyles.horizontalSlider} dotColor="#fff" activeDotColor="#DC1E2D"
							>
								<Image
									source={exampleImage}
									style={globalStyles.sliderImg}
								/>
								<Image
									source={exampleImage}
									style={globalStyles.sliderImg}
								/>
								<Image
									source={exampleImage}
									style={globalStyles.sliderImg}
								/>
							</Swiper>
						</View>

						<View style={globalStyles.newsFeedContainer}>
							<NewsCard item={itemDummy} />
							<NewsCard item={itemDummy} />
							<NewsCard item={itemDummy} />
						</View>
					</View>
				</ScrollView>
			</View >
		);
	}
}

export default DashboardComponent;
