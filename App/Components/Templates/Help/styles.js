import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        flex: 1
    },
    topContent: {
        flex: 1,
        backgroundColor: '#DC1E2D',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 40
    },
    topText: {
        fontFamily: 'ProximaNova-Bold',
        fontSize: 20,
        color: '#fff'
    },
    helpContent: {
        flex: 10
    },
    segment: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ebebeb'

    },
    segmentContent: {
        flex: 1
    },
    segmentContentText: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'proximaNova-Regular',
        color: '#000',
        marginTop: 16,
        paddingBottom: 16
    },
    segmentContentTextActive: {
        borderBottomColor: '#DC1E2D',
        borderBottomWidth: 3,
        color: '#DC1E2D'
    },
    search: {
        padding: 16
    }
});
