import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	topper: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 35
	},
	topperImg: {
		height: 224,
		width: 224,
		resizeMode: 'contain'
	},
	buttonStyle: {
		backgroundColor: '#FFF',
		borderWidth: 1,
		borderColor: 'rgba(0,0,0,0.12)'
	},
	textStyle: {
		color: '#DC1E2D',
		fontWeight: 'bold'
	},
	buttonContainer: {
		width: '100%'
	},
	whiteText: {
		fontFamily: 'ProximaNova-Bold',
		color: '#fff',
		fontSize: 12,
		textAlign: 'center'
	}
});
