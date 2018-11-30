import React, { Component } from 'react';
import { View, Text, ScrollView, Image, ActivityIndicator } from 'react-native';
import { CouponLogCard } from '@partials';
import { CommonService } from '@services';
import { connect } from 'react-redux';
import styles from './styles';

const coinLogo = require('@images/red-coupon.png');

class CouponHistoryComponent extends Component {
    state = {
        baseLoading: false,
        coupons: []
    }
    async componentWillMount() {
        this.setState({
            baseLoading: true
        });
        const coupons = await CommonService.getCouponHistory();
        this.setState({
            coupons,
            baseLoading: false
        });
    }
    renderCoupon() {
        return this.state.coupons.map((value, index) => {
            return <CouponLogCard key={index} item={value} />;
        });
    }
    render() {
        if (this.state.baseLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#DC1E2D" />
                </View>
            );
        }
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.ybksVoucher}>
                    <Text style={{ fontFamily: 'ProximaNova-Regular', fontSize: 12, color: '#4a4a4a' }}>Total Kupon Anda</Text>
                    <View style={styles.logoContainer}>
                        <Image source={coinLogo} style={styles.logo} />
                        <Text style={{ fontFamily: 'ProximaNova-Regular', fontSize: 36, color: '#DC1E2D' }}>{this.props.globalProfile.coupon}</Text>
                    </View>
                </View>
                {this.renderCoupon()}
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
