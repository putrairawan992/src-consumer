import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        flexGrow: 1,
        backgroundColor: '#fff'
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 1,
        height: 203,
        resizeMode: 'cover'
    },
    staticContent: {
        paddingVertical: 26,
        paddingHorizontal: 21
    },
    staticTitle: {
        fontFamily: 'ProximaNova-Bold',
        fontSize: 18,
        color: '#4a4a4a',
        lineHeight: 22
    },
    staticDescription: {
        fontFamily: 'ProximaNova-Regular',
        fontSize: 14,
        color: '#4a4a4a',
        lineHeight: 20,
        marginTop: 17
    },
    winnerView: {
        marginTop: 30,
        flexDirection: 'column'
    },
    winnerPrice: {
        fontFamily: 'ProximaNova-Bold',
        fontSize: 18,
        color: '#4a4a4a',
        textAlign: 'center'
    },
    winnerColumn: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#fafafa'
    },
    winnerRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    questText: {
        fontFamily: 'ProximaNova-Regular',
        fontSize: 12,
        flex: 4
    },
    ansText: {
        fontFamily: 'ProximaNova-Bold',
        fontSize: 12,
        flex: 3
    }
});
