import { StyleSheet, Dimensions } from 'react-native';
const PAGE_WIDTH = Dimensions.get('window').width;
const PAGE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	topper: {
		flex: 2,
		backgroundColor: '#DC1E2D',
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	topperImg: {
		height: 97.22,
		width: 300,
		resizeMode: 'contain'
	},
	bottom: {
		flex: 1,
		backgroundColor: '#FFF',
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 35
	},
	buttonStyle: {
		backgroundColor: '#FFF',
		borderWidth: 1,
		borderColor: 'rgba(0,0,0,0.12)',
		marginTop: 21
	},
	textStyle: {
		color: '#DC1E2D',
		fontWeight: 'bold'
	}
});
