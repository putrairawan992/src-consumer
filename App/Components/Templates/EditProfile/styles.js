import { StyleSheet, Dimensions } from 'react-native';
const PAGE_WIDTH = Dimensions.get('window').width;
const PAGE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#FFF',
		paddingTop: 40,
		paddingHorizontal: 16
	},
	avaPlaceHolder: {
		flexDirection: 'column',
		justifyContent: 'center',
		height: 85,
		width: 85,
		borderWidth: 1,
		borderColor: '#ececec',
		backgroundColor: '#f8f8f8',
		borderRadius: 8,
		alignItems: 'center',
		flex: 1
	},
	avaPlaceHolderText: {
		fontFamily: 'ProximaNova-Regular',
		padding: 10,
		fontSize: 14,
		maxWidth: '50%'
	}
});
