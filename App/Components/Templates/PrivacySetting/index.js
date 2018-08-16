import React, { Component } from 'react';
import { View } from 'react-native';
import { MenuListButton } from '@partials';
import globalStyles from '../../../GlobalStyles';
import styles from './styles';

class PrivacySettingComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={globalStyles.mainContainer}>
                    <View style={globalStyles.listContainer}>
                        <MenuListButton>Jangan Hubungi Saya</MenuListButton>
                        <MenuListButton>Hapus Akun Saya</MenuListButton>
                        <MenuListButton>Permintaan Riwayat Data</MenuListButton>
                    </View>
                </View>
            </View >
        );
    }
}

export default PrivacySettingComponent;
