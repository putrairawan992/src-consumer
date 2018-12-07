import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CommonService } from '@services';
import { connect } from 'react-redux';
import { MenuListButton, Loader } from '@partials';
import { trackScreen } from '@helpers/analytic';
import { storeExpiryDate } from '@helpers/Storage';
import { CustomAlert } from '@helpers/CustomAlert';
import globalStyles from '../../../GlobalStyles';
import styles from './styles';

const pageName = this.pageName = 'privacy-menu';

class PrivacySettingComponent extends Component {

    state = {
        sendOtpProccess: false
    }

    componentWillMount() {
        trackScreen(pageName);
    }

    redirectSubmitSetting(type, title) {
        Actions.SubmitSetting({ typeData: type, title: title });
    }

    async redirectDeleteAccount() {
        this.setState({
            sendOtpProccess: true
        });
        const payload = {
            type: 'delete-account'
        };
        CommonService.sendDeleteOtp(payload).then(async(res) => {
            const otpPayload = {
                phone: this.props.globalProfile.phone,
                type: 'delete-account'
            };
            await storeExpiryDate(res.expiry_at);
            Actions.OtpResetPassword({ hideNavBar: false, title: 'Kode Verifikasi', deleteSession: otpPayload, phoneNumber: otpPayload.phone });
        })
            .catch(() => {
                CustomAlert(null, 'Gagal Kirim OTP.', [{ text: 'OK' }]);
            })
            .finally(() => {
                this.setState({
                    sendOtpProccess: false
                });
            });
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
                        <MenuListButton onPress={this.redirectDeleteAccount.bind(this)}>Hapus Akun Saya</MenuListButton>
                        <MenuListButton
                            onPress={() => {
                                this.redirectSubmitSetting('data_history', 'Permintaan Riwayat Data');
                            }}
                        >Permintaan Riwayat Data</MenuListButton>
                    </View>
                </View>
                <Loader visible={this.state.sendOtpProccess} text="Kirim OTP..." />
            </View >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        globalProfile: state.globalReducer.globalProfile
    };
};

export default connect(mapStateToProps)(PrivacySettingComponent);
