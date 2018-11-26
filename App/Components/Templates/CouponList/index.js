import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { CouponListCard, CouponListCardRetailer } from '@partials';
import styles from './styles';

const dummy = ['qqw', 'qqw', 'qqw', 'qqw', 'qqw', 'qqw', 'qqw', 'qqw', 'qqw', 'qqw'];

class CouponListComponent extends Component {
    renderItem() {
        if (this.props.isRetailer) {
            return (
                <CouponListCardRetailer
                    couponName="Paguyuban Bandung Selatan" couponType="KUPON UNDIAN" couponNumber="No. 69811986" couponDate="12/3/2019" srcLogo
                />
            );
        }
        return (<CouponListCard
            couponName="Paguyuban Bandung Selatan" couponType="KUPON UNDIAN" couponNumber="No. 69811986" couponDate="12/3/2019" srcLogo
        />);
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={dummy}
                    keyExtractor={(i, idx) => idx.toString()}
                    renderItem={this.renderItem.bind(this)}
                />
            </View>
        );
    }
}

export default CouponListComponent;
