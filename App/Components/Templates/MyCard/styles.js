import { StyleSheet } from 'react-native';


export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFF',
		paddingHorizontal: 42
	},
	consumerCard: {
		width: 260,
		height: 400,
		borderRadius: 12,
		elevation: 25,
		alignSelf: 'center'
	},
	number: {
         rotation: 90,
         position: 'absolute',
         top: 130,
         right: 100
	},
	numberValue: {
		fontFamily: 'ProximaNova-Regular',
		fontSize: 24,
		color: '#fff'
    
	}
});
