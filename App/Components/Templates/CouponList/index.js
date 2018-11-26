import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { CouponListCard } from '@partials';
import * as actions from './actions';
import styles from './styles';

class CouponListComponent extends Component {

    componentWillMount() {
        this.pageContext = {
            group_id: this.props.group_id
        };
        this.props.loadMyCoupons(true, this.pageContext);
    }
    handleLoadMore() {
        this.props.handleLoadMoreAct(this.pageContext);
    }

    handleRefresh() {
        this.props.handleRefreshAct(this.pageContext);
    }

    renderItem(item) {
        return (<CouponListCard
            item={item.item} srcLogo
        />);
    }
    render() {
        if (!this.props.baseLoading) {
            console.log('check coupon', this.props.coupons);
            return (
                <View style={styles.container}>
                    <FlatList
                        data={this.props.coupons}
                        renderItem={this.renderItem.bind(this)}
                        keyExtractor={(i, idx) => idx.toString()}
                        onEndReached={this.handleLoadMore.bind(this)}
                        onEndThreshold={0}
                        refreshing={this.props.isRefreshing}
                        onRefresh={this.handleRefresh.bind(this)}
                    />
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
        coupons: state.couponReducer.coupons,
        isRefreshing: state.couponReducer.isRefreshing,
        baseLoading: state.couponReducer.baseLoading,
        globalProfile: state.globalReducer.globalProfile
    };
};

export default connect(mapStateToProps, actions)(CouponListComponent);
