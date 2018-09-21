import React, { Component } from 'react';
import { View, Text, ScrollView, Image, ActivityIndicator } from 'react-native';
import HTML from 'react-native-render-html';
import { CommonService } from '@services';
import styles from './styles';

class StaticContentComponent extends Component {
    state = {
        data: {},
        loaded: false
    }

    componentWillMount() {
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

    render() {
        console.log('check state', this.state.data);
        if (this.state.loaded) {
            if (this.state.data !== null) {
                return (
                    <ScrollView contentContainerStyle={styles.container}>
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: this.state.data.banners[0].image_url }} style={styles.image} />
                        </View>
                        <View style={styles.staticContent}>
                            <Text style={styles.staticTitle}>
                                {this.state.data.title}
                            </Text>
                            <HTML html={this.state.data.body} />
                        </View>
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
