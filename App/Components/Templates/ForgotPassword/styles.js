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
		paddingTop: 49,
		paddingHorizontal: 16
	},
	forgotPasswordText: {
        fontFamily: 'ProximaNova-Regular',
        fontSize: 16,
        color: 'rgba(0,0,0,0.6)',
        textAlign: 'center',
        lineHeight: 28,
        maxWidth: '70%',
        paddingBottom: 41
	}
});
