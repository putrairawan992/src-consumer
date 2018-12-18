import React, { Component } from 'react';
import { View, Text, ScrollView, Image, ActivityIndicator } from 'react-native';
import { trackScreen } from '@helpers/analytic';
import HTML from 'react-native-render-html';
import { CommonService } from '@services';
import styles from './styles';

const pageName = this.pageName = 'static';

class StaticContentComponent extends Component {
    state = {
        data: {},
        loaded: false
    }

    componentWillMount() {
        const displayName = pageName + '-' + this.props.banner.target_page.slug;
        trackScreen(displayName);
        const context = {
            slug: this.props.banner.target_page.slug
        };
        CommonService.getBannerDetail(context).then((data) => {
            this.setState({
                data: data,
                loaded: true
            });
        }).catch(() => {
            this.setState({
                loaded: true,
                data: null
            });
        });
    }

    renderWinner() {
        if (this.state.data.winner_announcement === 'yes') {
            return this.state.data.winners.map((value, index) => {
                return (
                    <View style={styles.winnerView} key={index}>
                        <Text style={styles.winnerPrice}>{value.item}</Text>
                        {value.pemenang.map((pemenangVal, indexPemenang) => {
                            return (
                                <View style={styles.winnerColumn} key={indexPemenang}>
                                    <View style={styles.winnerRow}>
                                        <Text style={styles.questText}>Pemenang Ke</Text>
                                        <Text style={styles.ansText}>{indexPemenang + 1}</Text>
                                    </View>
                                    <View style={styles.winnerRow}>
                                        <Text style={styles.questText}>Kupon</Text>
                                        <Text style={styles.ansText}>{pemenangVal.coupon}</Text>
                                    </View>
                                    <View style={styles.winnerRow}>
                                        <Text style={styles.questText}>Nama</Text>
                                        <Text style={styles.ansText}>{pemenangVal.name}</Text>
                                    </View>
                                    <View style={styles.winnerRow}>
                                        <Text style={styles.questText}>Nomor Ponsel</Text>
                                        <Text style={styles.ansText}>{pemenangVal.phone.substring(0, pemenangVal.phone.length - 3) + 
                                    'XXX'}</Text>
                                    </View>
                                    <View style={styles.winnerRow}>
                                        <Text style={styles.questText}>Toko Asal</Text>
                                        <Text style={styles.ansText}>{pemenangVal.toko_asal}</Text>
                                    </View>
                                </View>
                            );
                        })}
                    </View>
                );
            });
        }
    }

    render() {
        if (this.state.loaded) {
            if (this.state.data !== null) {
                return (
                    <ScrollView contentContainerStyle={styles.container}>
                        <View style={styles.imageContainer}>
                            {this.state.data.banners.length > 0 ? <Image source={{ uri: this.state.data.banners[0].image_url }} style={styles.image} /> : null }
                        </View>
                        <View style={styles.staticContent}>
                            <Text style={styles.staticTitle}>
                                {this.state.data.title}
                            </Text>
                            <HTML html={this.state.data.body} />
                        </View>
                        {this.renderWinner()}
                    </ScrollView>
                );
            }
            return (
                <ScrollView contentContainerStyle={styles.container}>
                    <Text>Halaman Tidak Ditemukan</Text>
                </ScrollView>
            );
        }
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <ActivityIndicator size="large" color="#DC1E2D" />
            </ScrollView>
        );
    }
}

export default StaticContentComponent;
