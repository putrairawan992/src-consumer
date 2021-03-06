import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Linking, ActivityIndicator, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SearchInput, HelpCard } from '@partials';
import { CustomAlert } from '@helpers/CustomAlert';
import { trackScreen } from '@helpers/analytic';
import { CommonService } from '@services';
import styles from './styles';

const pageName = this.pageName = 'help';


class HelpComponent extends Component {
    state = {
        selected: 'information',
        loaded: false,
        helps: [],
        selectedId: null
    }
    componentWillMount() {
        trackScreen(pageName);
        const staticParam = {
            type: 'help',
            user: 'customer'
        };
        CommonService.getStaticContent(staticParam).then((help) => {
            this.setState({
                loaded: true,
                helps: help.data
            });
        });
    }

    redirectContent(value) {
        this.setState({
            selected: value
        });
    }

    linkPhone() {
        Linking.openURL('tel:+628041000234');
    }

    linkWhatsapp() {
        Linking.canOpenURL('https://api.whatsapp.com/send?phone=628111315234').then((supported) => {
            if (!supported) {
                CustomAlert(null, 'Perangkat tidak mendukung', [{ text: 'OK' }]);
            }
            else {
                return Linking.openURL('https://api.whatsapp.com/send?phone=628111315234');
            }
        });
    }

    linkSecondWhatsapp() {
        Linking.canOpenURL('https://api.whatsapp.com/send?phone=6281906000234').then((supported) => {
            if (!supported) {
                CustomAlert(null, 'Perangkat tidak mendukung', [{ text: 'OK' }]);
            }
            else {
                return Linking.openURL('https://api.whatsapp.com/send?phone=6281906000234');
            }
        });
    }

    searchOnChange(text) {
        const staticParam = {
            type: 'help',
            user: 'customer',
            search: text
        };
        CommonService.getStaticContent(staticParam).then((help) => {
            this.setState({
                helps: help.data
            });
        });
    }

    renderHelpItem(item) {
        return (
            <HelpCard
                item={item.item}
                onPress={() => {
                    if (this.state.selectedId !== item.item.id) {
                        this.setState({
                            selectedId: item.item.id
                        });
                    }
                    else {
                        this.setState({
                            selectedId: null
                        });
                    }
                }}
                selectedId={this.state.selectedId}
            />);
    }

    renderHelp() {
        if (this.state.loaded) {
            return (
                <FlatList
                    data={this.state.helps}
                    extraData={this.state}
                    keyExtractor={i => i.id.toString()}
                    renderItem={this.renderHelpItem.bind(this)}
                />
            );
        }
        return (
            <ActivityIndicator size="large" color="#DC1E2D" />
        );
    }

    renderContent() {
        if (this.state.selected === 'information') {
            return (
                <View>
                    <View style={styles.search}>
                        <SearchInput style={{ height: 56 }} placeholder="Cari" onChangeText={this.searchOnChange.bind(this)} />
                    </View>
                    {this.renderHelp()}
                </View>
            );
        }
        else if (this.state.selected === 'contact') {
            return (
                <View>
                    <View style={styles.contentList}>
                        <Text style={styles.contentListTitle}>Butuh Bantuan Lain ? </Text>
                        <View style={styles.contentListDescription}>
                            <Text style={styles.contentListDescriptionText}>
                                Tim Customer Service kami siap melayani anda secara langsung
                    </Text>
                            <Text style={[styles.contentListDescriptionText, { fontFamily: 'ProximaNova-Semibold' }]}>
                                Senin - Jumat ( 08:00 - 17:00 )
                    </Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.buttonStyle} onPress={this.linkPhone.bind(this)}>
                        <View style={styles.contentItem}>
                            <Image source={require('@images/customer-service.png')} style={styles.imageLogo} />
                            <View style={styles.contentItemContainer}>
                                <View style={styles.contentItemMain}>
                                    <Text style={styles.contentItemMainTitle}>Melalui Telepon</Text>
                                    <Text style={styles.contentItemMainContent}>0804-1000-234</Text>
                                </View>
                                <View style={styles.contentItemSecondary}>
                                    <Text style={[styles.contentItemSecondaryContent, { width: 160 }]} >Biaya ditanggung penelepon</Text>
                                </View>
                            </View>
                            <Icon name="keyboard-arrow-right" style={styles.iconStyle} size={36} color="#ececec" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttonStyle, { borderTopWidth: 0 }]} onPress={this.linkWhatsapp.bind(this)}>
                        <View style={styles.contentItem}>
                            <Image source={require('@images/whatsapp.png')} style={styles.imageLogo} />
                            <View style={styles.contentItemContainer}>
                                <View style={styles.contentItemMain}>
                                    <Text style={styles.contentItemMainTitle}>Melalui WhatsApp</Text>
                                    <Text style={styles.contentItemMainContent}>0811-1315-234</Text>
                                    <Text style={[styles.contentItemMainContent, { fontSize: 12, color: '#000', fontFamily: 'ProximaNova-Bold', marginTop: 12, maxWidth: 160 }]}>Nomor WA untuk Jawa Barat dan Jakarta</Text>
                                </View>
                                <View style={styles.contentItemSecondary}>
                                    <Text style={[styles.contentItemSecondaryContent, { width: 160 }]} />
                                </View>
                            </View>
                            <Icon name="keyboard-arrow-right" style={styles.iconStyle} size={36} color="#ececec" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttonStyle, { borderTopWidth: 0 }]} onPress={this.linkSecondWhatsapp.bind(this)}>
                        <View style={styles.contentItem}>
                            <Image source={require('@images/whatsapp.png')} style={styles.imageLogo} />
                            <View style={styles.contentItemContainer}>
                                <View style={styles.contentItemMain}>
                                    <Text style={styles.contentItemMainTitle}>Melalui WhatsApp</Text>
                                    <Text style={styles.contentItemMainContent}>0819-06000-234</Text>
                                    <Text style={[styles.contentItemMainContent, { fontSize: 12, color: '#000', fontFamily: 'ProximaNova-Bold', marginTop: 12, maxWidth: 160 }]}>Nomor WA untuk Jawa Tengah</Text>
                                </View>
                                <View style={styles.contentItemSecondary}>
                                    <Text style={[styles.contentItemSecondaryContent, { width: 160 }]} />
                                </View>
                            </View>
                            <Icon name="keyboard-arrow-right" style={styles.iconStyle} size={36} color="#ececec" />
                        </View>
                    </TouchableOpacity>
                </View>
            );
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.topContent}>
                    <Text style={styles.topText}>Bantuan</Text>
                </View>
                <View style={styles.helpContent}>
                    <View style={styles.segment}>
                        <TouchableOpacity
                            style={styles.segmentContent}
                            onPress={() => {
                                this.redirectContent('information');
                            }}
                        >
                            <Text style={[styles.segmentContentText, (this.state.selected === 'information') ? styles.segmentContentTextActive : null]}>INFORMASI</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.segmentContent}
                            onPress={() => {
                                this.redirectContent('contact');
                            }}
                        >
                            <Text style={[styles.segmentContentText, (this.state.selected === 'contact') ? styles.segmentContentTextActive : null]}>KONTAK</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        {this.renderContent()}
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default HelpComponent;
