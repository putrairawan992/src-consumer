import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';


const slides = [
	{
		key: 'intro-1',
		title: 'Hai, Terima Kasih Sudah Bergabung dalam AYO SRC',
		text:
			'Geser untuk tahu lebih lanjut',
		image: require('@images/wscreen1.png')
	},
	{
		key: 'intro-2',
		title: 'Ayo Cari Tahu SRC',
		text: 'SRC (Sampoerna Retail Community) adalah komunitas ritel lokal dimana kamu bisa menemukan kebutuhan sehari-hari dengan pelayanan yang ramah dan harga bersahabat',
		image: require('@images/intro-new.png')
	},
	{
		key: 'intro-3',
		title: 'Ayo Temukan SRC Terdekat',
		text:
			'Dengan fitur “SRC Terdekat”, kamu bisa temukan promo menarik dan lokasi SRC yang paling dekat denganmu',
		image: require('@images/intro2.png')
	},
	{
		key: 'intro-4',
		title: 'Ayo Simpan Kupon dari SRC di Aplikasi',
		text: 'Sekarang kamu tidak perlu khawatir kupon dari SRC hilang karena bisa disimpan di aplikasi AYO SRC',
		image: require('@images/intro3.png')
	}
];

class IntroComponent extends Component {
	state = { isLast: false };
	
	triggerOnDone() {
      Actions.WelcomeScreen({ type: 'reset' });
	}

	renderSlider(props) {
		return (
			// <View
			// 	style={[
			// 		styles.container,
			// 		{
			// 			width: props.width,
			// 			height: props.height,
			// 			paddingBottom: props.bottomSpacer
			// 		}
			// 	]}
			// >
			// 	<View style={styles.imageContainer}>
			// 		<Image source={props.image} style={styles.image} />
			// 	</View>
			// 	<View style={styles.textContainer}>
			// 		<Text style={styles.textTitleContent}>
			// 			{props.title}
			// 		</Text>
			// 		<Text style={styles.textContent}>{props.text}</Text>
			// 	</View>
			// </View>
			<View
				style={[
					styles.container,
					{
						width: props.width,
						height: props.height,
						paddingBottom: props.bottomSpacer + 100
					}
				]}
			>
				<View style={styles.onbox}>
					<Image source={props.image} style={styles.image} />
					<Text style={styles.introTitle}>{props.title}</Text>
					<Text style={styles.introCaption}>{props.text}</Text>
				</View>
			</View>

		);
	}

	render() {
		return (
			<LinearGradient
				colors={['#C31432', '#240B36']}
				start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
				locations={[0.2,1]}
				style={{ flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center' }}
			>

				<Image source={require('@images/ayo-src-logo-w.png')} style={styles.outboxImg} />
				<AppIntroSlider
					slides={slides}
					renderItem={this.renderSlider}
					dotColor={'#D8D8D8'}
					activeDotColor={'#9C2020'}
					hideNextButton
					onDone={this.triggerOnDone}
					doneLabel="Selesai"
				/>
			</LinearGradient>
		);
	}
}

export default IntroComponent;
