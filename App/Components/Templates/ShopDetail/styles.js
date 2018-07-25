import { StyleSheet, Dimensions } from 'react-native';
const PAGE_WIDTH = Dimensions.get('window').width;
const PAGE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
	container: {
		flexGrow: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#FFF'
	},
	shopDetailImage: {
		flex: 1,
		height: 210,
		resizeMode: 'cover'
	},
	shopName: {
		fontFamily: 'ProximaNova-Bold',
		textTransform: 'uppercase',
		fontSize: 18,
		lineHeight: 22,
		marginBottom: 18,
		color: '#000'
	},
	addressLabel: {
		fontFamily: 'ProximaNova-Bold',
		fontSize: 12,
		color: '#9b9b9b'
	},
	addressValue: {
		fontFamily: 'ProximaNova-Bold',
        fontSize: 14,
        color: '#000'
	},
	bannerImage: {
		height: PAGE_WIDTH >= 720 ? 288 : 144,
		resizeMode: 'cover',
		width: '100%',
		borderRadius: 8,
		marginBottom: 8
	}
});
