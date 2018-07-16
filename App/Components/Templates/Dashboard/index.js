import React, { Component } from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { MenuButton, NewsCard } from '@partials';
import LinearGradient from 'react-native-linear-gradient';
import globalStyles from '../../../GlobalStyles';
import styles from './styles';

const ayoImg = require('@images/home-logo.png');
const personFace = require('@images/person-face.jpeg');
const exampleImage = require('@images/example-banner.jpg');
const exampleNews = require('@images/news-example.png');
const coinImage = require('@images/icon-coin.png');
const qrImage = require('@images/icon-qr.png');
const locationImage = require('@images/icon-location.png');

class DashboardComponent extends Component {
	render() {
		console.log(globalStyles.page);
		return (
			<View style={styles.container}>
				<ScrollView>
					<LinearGradient
						style={globalStyles.profileInfo}
						colors={['#DC1E2D', '#B11522']}
						location={[0, 1]}
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
					</LinearGradient>
					<LinearGradient
						style={globalStyles.couponChildren}
						colors={['#DC1E2D', '#B11522']}
						location={[0, 1]}
					>
						<Text style={globalStyles.couponChildrenText}>
							My Coupouns
						</Text>
					</LinearGradient>
					<View style={globalStyles.couponContainer}>
						<Text style={globalStyles.couponContainerText}>
							2.250
						</Text>
					</View>
					<View style={globalStyles.mainContainer}>
						<View style={globalStyles.menuRow}>
							<MenuButton iconName="attach-money" image={coinImage}>
								KUPON SAYA
							</MenuButton>
							<MenuButton iconName="code" image={qrImage}>KODE QR</MenuButton>
							<MenuButton iconName="location-on" image={locationImage}>
								TERDEKAT
							</MenuButton>
						</View>

						<View style={globalStyles.horizontalSlider}>
							<ScrollView
								horizontal
								pagingEnabled
								showsHorizontalScrollIndicator={false}
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
							</ScrollView>
						</View>
						<View style={globalStyles.newsFeedContainer}>
							<NewsCard image={exampleNews}>
								It’s always a great time to get “Back to Cool”
								and enjoy a picnic with family and friends.
							</NewsCard>
							<NewsCard image={exampleNews}>
								It’s always a great time to get “Back to Cool”
								and enjoy a picnic with family and friends.
							</NewsCard>
							<NewsCard image={exampleNews}>
								It’s always a great time to get “Back to Cool”
								and enjoy a picnic with family and friends.
							</NewsCard>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}

export default DashboardComponent;