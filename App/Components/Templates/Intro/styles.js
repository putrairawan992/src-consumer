import { StyleSheet, Dimensions } from 'react-native';
const PAGE_WIDTH = Dimensions.get('window').width;
const PAGE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center',
		alignContent: 'center',
		backgroundColor: '#fff',
		paddingLeft: 40,
		paddingRight: 40
	},
	imageContainer: {
		flex: 2,
		paddingTop: 30
	},
	image: {
		flex: 1,
		resizeMode: 'contain'
	},
	textContainer: {
		paddingTop: 40,
		flex: 1
	},
	textTitleContent: {
        fontFamily: 'ProximaNova-Bold',
        fontSize: 20,
        lineHeight: 24,
        textAlign: 'center',
        paddingBottom: 20
	},
	textContent: {
		color: '#636363',
		fontFamily: 'ProximaNova-Regular',
		fontSize: 14,
		lineHeight: 24,
		textAlign: 'center'
	},
	customDone: {
		backgroundColor: '#DC1E2D',
		width: '50%',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: '25%',
		marginRight: '25%',
		padding: 13,
		borderRadius: 6
	},
	customDoneText: {
		fontFamily: 'ProximaNova-Bold',
		color: '#fff',
		fontSize: 14
	}
});
