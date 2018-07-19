import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';

const styles = {
	tabRow: {
		flexGrow: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: '#FFF',
		height: 52
	},
	menuText: {
		fontFamily: 'ProximaNova-Regular',
		fontSize: 14,
		lineHeight: 17,
		color: '#DC1E2D',
		margin: 16
	},
	menuActive: {
		fontFamily: 'ProximaNova-Bold',
		color: '#D83426'
	}
};

class ScrollSegment extends Component {
	render() {
		return (
			<ScrollView style={{ borderWidth: 1, borderColor: '#ececec' }} contentContainerStyle={styles.tabRow} horizontal showsHorizontalScrollIndicator={false}>
				<TouchableOpacity>
					<Text style={[styles.menuText, styles.menuActive]}>Terbaru</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text style={styles.menuText}>Populer</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text style={styles.menuText}>Olahraga</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text style={styles.menuText}>Teknologi</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text style={styles.menuText}>Seputar Sampoerna</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text style={styles.menuText}>Lifestyle</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text style={styles.menuText}>Teknologi</Text>
				</TouchableOpacity>
			</ScrollView>
		);
	}
}

export default ScrollSegment;