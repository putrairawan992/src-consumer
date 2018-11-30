import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { CouponLogCard } from '@partials';
import { connect } from 'react-redux';
import styles from './styles';

const coinLogo = require('@images/red-coupon.png');

class CouponHistoryComponent extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.ybksVoucher}>
                    <Text style={{ fontFamily: 'ProximaNova-Regular', fontSize: 12, color: '#4a4a4a' }}>Total Kupon Anda</Text>
                    <View style={styles.logoContainer}>
                       <Image source={coinLogo} style={styles.logo} />
                       <Text style={{ fontFamily: 'ProximaNova-Regular', fontSize: 36, color: '#DC1E2D' }}>{this.props.globalProfile.coupon}</Text>
                    </View>
                </View>
                <CouponLogCard />
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        globalProfile: state.globalReducer.globalProfile
    };
};

export default connect(mapStateToProps)(CouponHistoryComponent);
