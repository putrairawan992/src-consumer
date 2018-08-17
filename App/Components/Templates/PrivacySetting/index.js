import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { MenuListButton } from '@partials';
import globalStyles from '../../../GlobalStyles';
import styles from './styles';

class PrivacySettingComponent extends Component {

    redirectSubmitSetting(type, title) {
        Actions.SubmitSetting({ typeData: type, title: title });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={globalStyles.mainContainer}>
                    <View style={globalStyles.listContainer}>
                        <MenuListButton
                            onPress={() => {
                                this.redirectSubmitSetting('contacted', 'Jangan Hubungi Saya');
                            }}
                        >Jangan Hubungi Saya</MenuListButton>
                        <MenuListButton>Hapus Akun Saya</MenuListButton>
                        <MenuListButton
                            onPress={() => {
                                this.redirectSubmitSetting('data_history', 'Permintaan Riwayat Data');
                            }}
                        >Permintaan Riwayat Data</MenuListButton>
                    </View>
                </View>
            </View >
        );
    }
}

export default PrivacySettingComponent;
