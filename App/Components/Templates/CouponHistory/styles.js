import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        flex: 1
    },
    couponSection: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: '#ececec',
    },
    couponTextSection: {
        flexDirection: 'column',
        marginLeft: 12
    },
    ybksVoucher: {
        flexDirection: 'column',
        marginHorizontal: 36,
        marginVertical: 24
    },
    logoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 12
    },
    logo: {
        width: 65,
        height: 42
    }
});
