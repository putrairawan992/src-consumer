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
                        <MenuListButton>Ubah Profil</MenuListButton>
                        <MenuListButton>Ubah Kata Sandi</MenuListButton>
                        <MenuListButton>Pengaturan Privasi</MenuListButton>
                        <MenuListButton>Keluar</MenuListButton>
                    </View>
                </View>
            </View >
        );
    }
}

export default PrivacySettingComponent;