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
    },
    contentList: {
        padding: 22
    },
    contentListTitle: {
        fontFamily: 'ProximaNova-Bold',
        color: '#000',
        fontSize: 18
    },
    contentListDescription: {
        marginTop: 13
    },
    contentListDescriptionText: {
        fontFamily: 'ProximaNova-Regular',
        fontSize: 14,
        color: '#4a4a4a'
    },
    contentItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 32,
        paddingVertical: 22
    },
    imageLogo: {
        height: 50,
        width: 50,
        resizeMode: 'contain'
    },
    contentItemMainTitle: {
        fontFamily: 'ProximaNova-Bold',
        fontSize: 16,
        color: '#000'
    },
    contentItemMainContent: {
        fontFamily: 'ProximaNova-Regular',
        fontSize: 16,
        color: '#000'
    },
    contentItemSecondary: {
        marginTop: 13
    },
    contentItemSecondaryContent: {
        fontFamily: 'ProximaNova-Regular',
        color: '#4a4a4a',
        fontSize: 12
    },
    iconStyle: {
        alignSelf: 'center'
    },
    buttonStyle: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#ececec'
    }
});
