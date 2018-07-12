import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './styles';

const slides = [
	{
		key: 'intro-1',
		title: 'Lorem Ipsum is simply dummy text of the printing.',
		text:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard.',
		image: require('@images/intro1.png')
	},
	{
		key: 'intro-2',
		title: 'Lorem Ipsum is simply dummy text of the printing.',
		text:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard.',
		image: require('@images/intro2.png')
	},
	{
		key: 'intro-3',
		title: 'Lorem Ipsum is simply dummy text of the printing.',
		text:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard.',
		image: require('@images/intro3.png')
	}
];

class IntroComponent extends Component {
	state = { isLast: false };
	onSlideChange(index) {
		if (index === 2) {
			this.setState({ isLast: true });
		} else {
			this.setState({ isLast: false });
		}
	}

	triggerOnDone() {
		console.log('called');
	}

	renderCustomButton() {
		return (
			<View style={styles.customDone}>
				<Text style={styles.customDoneText}>Mulai</Text>
			</View>
		);
	}

	renderSlider(props) {
		return (
				<View
					style={[
						styles.container,
						{
							width: props.width,
							height: props.height,
							paddingBottom: props.bottomSpacer
						}
					]}
				>
					<View style={styles.imageContainer}>
						<Image source={props.image} style={styles.image} />
					</View>
					<View style={styles.textContainer}>
						<Text style={styles.textTitleContent}>
							{props.title}
						</Text>
						<Text style={styles.textContent}>{props.text}</Text>
					</View>
				</View>
		);
	}

	render() {
		return (
			<AppIntroSlider
				slides={slides}
				renderItem={this.renderSlider}
				dotColor={'#D8D8D8'}
				activeDotColor={'#9C2020'}
				bottomButton
				hideNextButton
				onDone={this.triggerOnDone}
				renderDoneButton={this.renderCustomButton}
				onSlideChange={this.onSlideChange.bind(this)}
			/>
		);
	}
}

export default IntroComponent;