import { StyleSheet } from 'react-native';


export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#FFF',
		paddingTop: 27,
		paddingHorizontal: 16
	},
	warning: {
		flexDirection: 'row',
		alignSelf: 'flex-start'
	},
	warningText: {
		fontFamily: 'ProximaNova-Bold',
		fontSize: 20,
		marginLeft: 8,
		color: '#000'
	},
	info: {
		flexDirection: 'row',
		alignSelf: 'flex-start',
		marginTop: 26
	},
	input: {
		flex: 1,
		justifyContent: 'flex-start'
	}
});
