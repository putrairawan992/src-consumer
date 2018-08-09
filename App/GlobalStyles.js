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
		height: 82,
		width: 82,
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
		flexDirection: 'column',
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
		top: 280 - 10,
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
	horizontalSlider: { height: (PAGE_WIDTH >= 720 ? 360 : 180), borderWidth: 1, borderColor: '#d3d3d3', alignItems: 'center', justifyContent: 'center', flex: 1 },
	sliderImg: { height: '100%', flex: 1, width: '102%', resizeMode: 'cover', alignSelf: 'center' },
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
		color: '#000',
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
	},
	listContainer: {
		flexDirection: 'column',
		borderTopWidth: 1,
		borderColor: '#ececec'
	},
	centeredText: {
		fontFamily: 'ProximaNova-Regular',
		fontSize: 16,
		color: 'rgba(0,0,0,0.6)',
		textAlign: 'center',
		lineHeight: 28,
		maxWidth: '70%',
		paddingBottom: 41
	},
	leftedText: {
		fontFamily: 'ProximaNova-Regular',
		fontSize: 14,
		color: '#000',
		lineHeight: 20,
		paddingBottom: 10
	},
	detailCardContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		paddingHorizontal: 20,
		marginTop: 21
	},
	shopName: {
		fontFamily: 'ProximaNova-Bold',
		fontSize: 14,
		lineHeight: 20,
		color: '#000'
	},
	descriptionName: {
		fontFamily: 'ProximaNova-Regular',
		color: '#000',
		fontSize: 12,
		lineHeight: 16,
		marginTop: 5
	},
	labelButton: {
		backgroundColor: '#DC1E2D',
		paddingVertical: 6,
		paddingHorizontal: 22,
		height: 'auto',
		borderRadius: 13,
		margin: 5,
		marginLeft: 0
	},
	redButtonText: {
		color: '#fff',
		fontFamily: 'ProximaNova-Regular',
		fontSize: 12
	},
	rangeText: {
		color: '#000',
		fontFamily: 'ProximaNova-Regular',
		fontSize: 14,
		marginRight: 5
	},
	validationText: {
		flexDirection: 'row',
		marginTop: 10,
		color: '#cc0000',
		justifyContent: 'flex-start'
	},
	cardContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: 250,
		paddingTop: 20,
		position: 'relative',

	},
	cardImg: {
		height: 220,
		width: '100%',
		resizeMode: 'contain'
	},
	cardText: {
		position: 'absolute',
		flexDirection: 'column',
		bottom: 60,
		left: (PAGE_WIDTH >= 720) ? '30%' : '10%'
	},
	innerText: {
		fontFamily: 'ProximaNova-Bold',
		color: '#fff'
	}
});
