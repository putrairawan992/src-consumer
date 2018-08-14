import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SearchInput } from '@partials';
import styles from './styles';

class HelpComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContent}>
                    <Text style={styles.topText}>Bantuan</Text>
                </View>
                <View style={styles.helpContent}>
                   <View style={styles.segment}>
                        <TouchableOpacity style={styles.segmentContent}>
                            <Text style={[styles.segmentContentText, styles.segmentContentTextActive]}>INFORMASI</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.segmentContent}>
                            <Text style={styles.segmentContentText}>KONTAK</Text>
                        </TouchableOpacity>
                   </View>
                   <View style={styles.search}>
                     <SearchInput style={{ height: 56 }} placeholder="Cari" />
                   </View>
                </View>
            </View>
        );
    }
}

export default HelpComponent;
