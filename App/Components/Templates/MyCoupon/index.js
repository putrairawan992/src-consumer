import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import { CouponInfo, CouponCard } from '@partials';
import { CommonService } from '@services';
import { connect } from 'react-redux';
import { refreshProfile } from '../../../Store/GlobalReducer/actions';
import styles from './styles';

const coinLogo = require('@images/red-coupon.png');

class MyCouponComponent extends Component {
    state = {
        pageLoading: false,
        paguyubans: [],
        isRefreshing: false
    }
    async componentWillMount() {
        this.setState({
            pageLoading: true
        });
        const paguyubans = await CommonService.getPaguyuban();
        this.setState({
            paguyubans: paguyubans.data,
            pageLoading: false
        });
    }
    async handleRefresh() {
        this.props.refreshProfile();
        const paguyubans = await CommonService.getPaguyuban();
        this.setState({
            paguyubans: paguyubans.data,
            isRefreshing: false
        });
    }
    renderPaguyubans() {
        return this.state.paguyubans.map((value) => {
            return (
                <CouponCard
                    couponName={value.group_name} couponType="KUPON UNDIAN" value={value.amount} key={value.group_id} srcLogo val={value}
                />
            );
        });
    }
    renderMainView() {
        return (
            <ScrollView 
            contentContainerStyle={styles.scrollContainer}
                scrollEventThrottle={400}
                refreshControl={<RefreshControl
                    refreshing={this.state.isRefreshing}
                    onRefresh={this.handleRefresh.bind(this)}
                />}
            >
                <CouponInfo titleText="Total Kupon Undian YBKS Anda" imgIcon={coinLogo} value={this.props.globalProfile.coupon} />
                <Text style={styles.couponDesc}>Kupon Undian adalah Kupon yang dikeluarkan dan dikelola oleh paguyuban SRC yang sudah berizin Dinas Sosial. Tanya pada toko terdekatmu bagaimana cara mendapatkan Kupon Undian.
</Text>
                {this.renderPaguyubans()}
            </ScrollView>
        );
    }
    render() {
        if (this.state.pageLoading === false) {
            return (
                <View style={styles.container}>
                    {this.renderMainView()}
                </View>
            );
        }
        return (
            <View style={[styles.container, { flex: 1 }]}>
                <ActivityIndicator size="large" color="#DC1E2D" />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        globalProfile: state.globalReducer.globalProfile
    };
};

export default connect(mapStateToProps, { refreshProfile })(MyCouponComponent);
