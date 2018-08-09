import { StyleSheet } from 'react-native';


export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		paddingHorizontal: 12

	},
	outbox: {
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	},
	outboxImg: {
		height: 82,
		width: 82,
		resizeMode: 'contain'
	},
	onbox: {
		backgroundColor: '#fff',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		borderRadius: 14,
		textAlign: 'center'
	},
	image: {
		height: 234,
		width: 234,
		resizeMode: 'contain',
		marginBottom: 24
	},
	introTitle: {
		fontFamily: 'ProximaNova-Bold',
		color: '#DC1E2D',
		fontSize: 20,
		textAlign: 'center',
		marginHorizontal: 36,
		lineHeight: 24,
		marginBottom: 13
	},
	introCaption: {
		fontFamily: 'ProximaNova-Regular',
		fontSize: 14,
		textAlign: 'center',
		lineHeight: 20,
		marginHorizontal: 20
	}
});
