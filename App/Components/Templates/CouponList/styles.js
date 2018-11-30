import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        paddingVertical: 20,
        flex: 1
    },
    paguyubanName: {
        borderBottomWidth: 1,
        borderBottomColor: '#ececec',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    paguyubanNameText: {
        fontFamily: 'ProximaNova-Regular',
        fontSize: 18,
        color: '#000'
    },
    paguyubanNamePrice: {
        fontFamily: 'ProximaNova-Bold',
        fontSize: 22,
        color: '#000',
        textAlign: 'center'
    }
});
