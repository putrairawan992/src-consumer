import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
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
    }
});
