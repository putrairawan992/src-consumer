import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { CouponInfo, CouponCard } from '@partials';
import styles from './styles';
import globalStyles from '../../../GlobalStyles';

const coinLogo = require('@images/red-coupon.png');

class MyCouponComponent extends Component {
    state = {
        selected: 'tukar'
    }
    redirectContent(value) {
        this.setState({
            selected: value
        });
    }
    renderMainView() {
        if (this.state.selected === 'tukar') {
            return (
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <CouponInfo titleText="Total Kupon Tukar Anda" imgIcon={coinLogo} value={'2400'} />
                    <Text style={styles.couponDesc}>Kupon Tukar adalah Kupon yang dikeluarkan oleh masing-masing toko dan hanya berlaku di toko yang tertera. Tanyakan promo apa yang sedang berjalan di toko dekatmu.
</Text>
                <CouponCard 
                couponName="TOKO SUKA MAKMUR
GEMILANG CAHAYA" couponType="KUPON TUKAR" value="3200" 
                />
                <CouponCard 
                couponName="TOKO SUKA MAKMUR
GEMILANG CAHAYA" couponType="KUPON TUKAR" value="3200" 
                />
                <CouponCard 
                couponName="TOKO SUKA MAKMUR
GEMILANG CAHAYA" couponType="KUPON TUKAR" value="3200" 
                />
                <CouponCard 
                couponName="TOKO SUKA MAKMUR
GEMILANG CAHAYA" couponType="KUPON TUKAR" value="3200" 
                />
                <CouponCard 
                couponName="TOKO SUKA MAKMUR
GEMILANG CAHAYA" couponType="KUPON TUKAR" value="3200" 
                />
                </ScrollView>
            );
        }
        else if (this.state.selected === 'undian') {
            return (
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <CouponInfo titleText="Total Kupon Undian YBKS Anda" imgIcon={coinLogo} value={'2400'} />
                    <Text style={styles.couponDesc}>Kupon Undian adalah Kupon yang dikeluarkan dan dikelola oleh paguyuban SRC yang sudah berizin Dinas Sosial. Tanya pada toko terdekatmu bagaimana cara mendapatkan Kupon Undian.
</Text>
                <CouponCard 
                couponName="Paguyuban Bandung Selatan" couponType="KUPON UNDIAN" value="3200" srcLogo
                />
                <CouponCard 
                couponName="Paguyuban Bandung Barat" couponType="KUPON UNDIAN" value="3200" srcLogo
                />
                <CouponCard 
                couponName="Paguyuban Bandung Utara" couponType="KUPON UNDIAN" value="3200" srcLogo
                />
                <CouponCard 
                couponName="Paguyuban Bandung Timur" couponType="KUPON UNDIAN" value="3200" srcLogo
                />
                </ScrollView>
            );
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={globalStyles.segment}>
                    <TouchableOpacity
                        style={globalStyles.segmentContent}
                        onPress={() => {
                            this.redirectContent('tukar');
                        }}
                    >
                        <Text style={[globalStyles.segmentContentText, (this.state.selected === 'tukar') ? globalStyles.segmentContentTextActive : null]}>KUPON TUKAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={globalStyles.segmentContent}
                        onPress={() => {
                            this.redirectContent('undian');
                        }}
                    >
                        <Text style={[globalStyles.segmentContentText, (this.state.selected === 'undian') ? globalStyles.segmentContentTextActive : null]}>KUPON UNDIAN</Text>
                    </TouchableOpacity>
                </View>
                {this.renderMainView()}
            </View>
        );
    }
}

export default MyCouponComponent;
