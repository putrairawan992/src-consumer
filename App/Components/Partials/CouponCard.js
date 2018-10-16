import React, { Component } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import styes from '../Templates/SubmitSetting/styes';

const styles = {
    container: {
        flexDirection: 'column',
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        height: 'auto',
        borderRadius: 8,
        elevation: 8,
        paddingHorizontal: 18,
        paddingVertical: 9,
        marginVertical: 30
    },
    couponName: {
        fontFamily: 'ProximaNova-Semibold',
        fontSize: 16,
        lineHeight: 19,
        color: '#fff',
        width: '50%'
    },
    couponValue: {
        marginTop: 12
    },
    couponType: {
        fontFamily: 'ProximaNova-Regular',
        fontSize: 12,
        color: '#fff'
    },
    couponValueText: {
        fontFamily: 'ProximaNova-Regular',
        fontSize: 50,
        lineHeight: 60,
        color: '#fff'
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
    }
};

const backgroundSource = require('@images/coupon-background.png');
const srcSource = require('@images/src-shape.png');

class CouponCard extends Component {
    renderSrcDiv() {
        if (this.props.srcLogo) {
            return (
                <View style={styles.srcDiv}>
                <Image source={srcSource} style={styles.srcImage} />
                </View>
            );
        }
    }
    render() {
        return (
            <ImageBackground style={styles.container} source={backgroundSource} resizeMode="stretch" >
                <Text style={styles.couponName}>{this.props.couponName}</Text>
                <View style={styles.couponValue}>
                    <Text style={styles.couponType}>{this.props.couponType}</Text>
                    <Text style={styles.couponValueText}>{this.props.value}</Text>
                </View>
                {this.renderSrcDiv()}
            </ImageBackground>
        );
    }
}

export default CouponCard;
