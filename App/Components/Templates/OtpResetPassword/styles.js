import { StyleSheet, Dimensions } from 'react-native';
const PAGE_WIDTH = Dimensions.get('window').width;
const PAGE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFF',
		paddingHorizontal: 16
	},
	forgotPasswordText: {
        fontFamily: 'ProximaNova-Regular',
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',
        lineHeight: 28,
        paddingBottom: 41
	},
	inputContainerStyle: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	singularInputStyle: {
		margin: 5,
		height: 52,
		textAlign: 'center',
		color: 'rgba(0,0,0,0.6)'
	}
});
