import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	topper: {
		flex: 1,
		width: '100%',
		height: '100%',
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingHorizontal: 35
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
		alignItems: 'center'
		
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
		width: '100%',
		paddingHorizontal: 35
	}
});
