import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        flex: 1
    },
    scrollContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        padding: 16
    },
    couponDesc: {
        fontFamily: 'ProximaNova-Regular',
        color: '#4a4a4a',
        fontSize: 14,
        lineHeight: 21,
        textAlign: 'center',
        marginVertical: 20
    }
});
