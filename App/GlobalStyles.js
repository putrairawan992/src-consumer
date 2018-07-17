import { StyleSheet, Dimensions } from 'react-native';
const PAGE_WIDTH = Dimensions.get('window').width;
const PAGE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
	profileInfo: {
        flexDirection: 'column',
        backgroundColor: '#DC1E2D',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
        height: 310
       

	},
	logoImg: {
		height: 35,
		width: 108,
		resizeMode: 'contain'
	},
	personImg: {
		height: 88,
		width: 88,
		borderRadius: 100,
		borderWidth: 1,
		borderColor: '#FFF'
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
        top: 280,
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
		top: 280-10,
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
	},
	menuRow: {
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'row'
	},
	horizontalSlider: { flexDirection: 'row', height: 180, backgroundColor: '#ececec', padding: 5, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#d3d3d3' },
	sliderImg: { height: 160, width: 380, margin: 5, borderRadius: 5 },
	newsFeedContainer: {
		flexDirection: 'column'
	},
	newsFeedCard: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignContent: 'center',
		padding: 12,
		borderWidth: 1,
		borderColor: '#ececec'
	},
	newsFeedImage: {
		height: 120,
		width: 120,
		borderRadius: 4
	},
	newsFeedText: {
       fontFamily: 'ProximaNova-Bold',
       fontSize: 14,
       color:'#000',
       lineHeight: 17
	},
	articlePreview: {
		flexDirection: 'column',
		justifyContent: 'space-around',
		paddingLeft: 12,
		width: 0,
	    flexGrow: 1
	},
	newsDate: {
		fontFamily: 'ProximaNova-Regular',
		fontSize: 12,
		paddingTop: 0,
		color: '#C6C6C6',
		marginBottom: 10
	},
	likeContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	phoneRow: {
		flexDirection: 'row'
	},
	singlePageText: {
        fontFamily: 'ProximaNova-Regular',
        fontSize: 16,
        color: 'rgba(0,0,0,0.6)',
        textAlign: 'center',
        lineHeight: 28,
        maxWidth: '70%',
        paddingBottom: 41
	}
});
