import { StyleSheet, Dimensions } from 'react-native';
const PAGE_WIDTH = Dimensions.get('window').width;
const PAGE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
	container: {
		flexDirection: 'column',
		backgroundColor: '#fff'
	},
	viewHeight: {
		height: PAGE_HEIGHT - 135 //adjust
	}
});