import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flexGrow: 1,
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
		alignItems: 'center',
		marginRight: 18
	},
	avaPlaceHolderText: {
		fontFamily: 'ProximaNova-Regular',
		fontSize: 14,
		lineHeight: 21,
		maxWidth: '80%'
	}
});
