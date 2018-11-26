import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styes from '../Templates/SubmitSetting/styes';

const styles = {
    container: {
        flexDirection: 'column',
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        height: 160,
        borderRadius: 8,
        elevation: 8,
        marginVertical: 30,
        marginHorizontal: 16
    },
    topSection: {
        paddingHorizontal: 18,
        paddingVertical: 9,
        flexDirection: 'row',
        flex: 5,
        backgroundColor: '#DC1E2D',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    srcDiv: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    srcImage: {
        width: 119,
        height: 41,
        resizeMode: 'contain',
        marginTop: 15,
        marginRight: 9
    },
    bottomSection: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 18,
        paddingVertical: 9,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    },
    triangleContainer: {
        width: '100%',
        height: 10,
        backgroundColor: '#B11522',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    triangleStyle: {
        width: '100%',
        height: 'auto',
        resizeMode: 'repeat'
    },
    textSection: {
        flex: 1,
        flexDirection: 'column'
    },
    shopName: {
        fontFamily: 'ProximaNova-Semibold',
        fontSize: 14,
        lineHeight: 17,
        color: '#fff'
    },
    WsCode: {
        fontFamily: 'ProximaNova-Bold',
        fontSize: 18,
        lineHeight: 17,
        marginTop: 12,
        color: '#fff'
    },
    imageSection: {
        flex: 1
    }
};

const triangle = require('@images/white-triangle.png');
const coinImg = require('@images/coin-logo-dark.png');

class CouponListCardRetailer extends Component {
    
    render() {
        return (
            <TouchableWithoutFeedback>
                <View style={styles.container}>
                    <LinearGradient
                        style={styles.topSection} colors={['#DC1E2D', '#B11522']}
                        location={[0, 1]}
                    >
                        <View style={styles.textSection}>
                            <Text style={styles.shopName}>TOKO SUKA MAKMUR
                                       GEMILANG CAHAYA</Text>
                            <Text style={styles.WsCode}>AYO12545</Text>
                        </View>
                        <View style={styes.imageSection}>
                          <Image source={coinImg} style={{ width: 68, height: 68 }} />
                        </View>
                    </LinearGradient>
                    <View style={styles.triangleContainer}>
                        <Image source={triangle} style={styles.triangleStyle} />
                    </View>
                    <View style={styles.bottomSection}>
                        <Text style={styles.couponDate}>Periode 1 Januari - 31 Maret 2018</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default CouponListCardRetailer;
