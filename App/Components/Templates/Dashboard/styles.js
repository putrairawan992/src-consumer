import { StyleSheet } from 'react-native';


export default StyleSheet.create({
	container: {
		flexDirection: 'column',
		backgroundColor: '#fff',
		alignContent: 'center'
	},
	modalContent: {
		backgroundColor: 'white',
		padding: 24,
		justifyContent: 'flex-start',
		alignItems: 'center',
		borderRadius: 4,
		borderColor: 'rgba(0, 0, 0, 0.1)',
		flex: 0.4,
		flexDirection: 'column'
	},
	bottomModal: {
		justifyContent: 'flex-end',
		margin: 0
	},
	scrollableModal: {
		height: 300
	},
	scrollableModalContent1: {
		height: 200,
		backgroundColor: 'orange',
		alignItems: 'center',
		justifyContent: 'center'
	},
	scrollableModalContent2: {
		height: 200,
		backgroundColor: 'lightgreen',
		alignItems: 'center',
		justifyContent: 'center'
	},
	modalText: {
		fontFamily: 'ProximaNova-Regular',
		textAlign: 'left',
		fontSize: 18
	},
	modalTextHeader: {
		fontFamily: 'ProximaNova-Bold',
		textAlign: 'left',
		fontSize: 24
	}
});
