import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	topper: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 16
	},
	topperImg: {
		height: 162,
		width: 162,
        resizeMode: 'contain',
        marginBottom: 42
	},
	buttonStyle: {
		backgroundColor: '#FFF',
		borderWidth: 1,
		borderColor: 'rgba(0,0,0,0.12)'
	},
	textStyle: {
		color: '#DC1E2D',
		fontWeight: 'bold'
	},
	buttonContainer: {
		width: '100%'
	},
	whiteText: {
		fontFamily: 'ProximaNova-Bold',
		color: '#fff',
		fontSize: 12,
		textAlign: 'center'
    },
    inputStyle: {
        backgroundColor: 'transparent',
        paddingVertical: 12,
        color: '#fff',
        fontWeight: '600'
    },
    linkText: {
        color: '#fff',
        fontFamily: 'ProximaNova-Regular',
        fontSize: 15
    },
    linkRow: {
        flexDirection: 'row',
        width: '55%'
    }
});

