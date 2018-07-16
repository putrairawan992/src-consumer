import { StyleSheet, Dimensions } from 'react-native';
const PAGE_WIDTH = Dimensions.get('window').width;
const PAGE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
	profileInfo: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#DC1E2D',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative'
       

	},
	logoImg: {
		height: 35,
		width: 108,
		resizeMode: 'contain'
	},
	personImg: {
		height: 88,
		width: 88,
		borderRadius: 100
	},
	detailContainer: {
		alignItems: 'center'
	},
	detailText: {
		fontFamily: 'ProximaNova-Bold',
		color: '#fff',
		fontSize: 18,
		paddingTop: 8
	},
	mainContainer: {
		flex: 1.2,
		position: 'relative'
	},
	imgPadder: {
		padding: 22
	},
	couponContainer: {
		width: 225,
		height: 60,
		backgroundColor: '#fff',
		borderRadius: 36,
		borderWidth: 1,
		borderColor: 'rgba(0,0,0,0.12)',
		shadowColor: '#000',
		shadowOffset: { width: 5, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 2,
		elevation: 5,
        top: (PAGE_WIDTH > 720 ? (PAGE_HEIGHT / 2.55) : (PAGE_HEIGHT / 2.75)),
        alignSelf: 'center',
        position: 'absolute',
        alignItems: 'center',
        padding: 14
	},
	couponChildren: {
		height: 18,
		width: 90,
		borderRadius: 9,
		elevation: 8,
		top: (PAGE_WIDTH > 720 ? (PAGE_HEIGHT / 2.55 - 10) : (PAGE_HEIGHT / 2.75 - 10)),
		position: 'absolute',
	    alignSelf: 'center',
	    alignItems: 'center',
	    padding: 2
	},
	couponContainerText: {
		fontFamily: 'ProximaNova-Regular',
		color: '#D83426',
		fontSize: 36
	},
	couponChildrenText: {
		fontFamily: 'ProximaNova-Regular',
		color: '#fff',
		fontSize: 12
	},
	page: {
		height: PAGE_HEIGHT,
		width: PAGE_WIDTH
	}
});
