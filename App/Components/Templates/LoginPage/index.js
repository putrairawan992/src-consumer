import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, Keyboard, TouchableOpacity } from 'react-native';
import { Button, Input, Loader } from '@partials';
import { trackScreen } from '@helpers/analytic';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import * as actions from './actions';
import globalStyles from '../../../GlobalStyles';

const pageName = this.pageName = 'login-page';

const ayoImg = require('@images/login-logo.png');

class LoginPageComponent extends Component {

    state = {
        contentShow: true
    }

    componentWillMount() {
        trackScreen(pageName);
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
    }

    componentWillUnmount() {
        this.keyboardDidHideListener.remove();
        this.keyboardDidShowListener.remove();
    }

    onPhoneChange(text) {
        this.props.phoneNumberChanged(text);
    }

    redirectLogin() {
        const payload = {
            phone: '+62' + this.props.phone,
            type: 'login',
            from: 'customer'
        };
        this.props.submitPhone(payload);
    }

    redirectRegister() {
        Actions.Register();
    }

    _keyboardDidShow() {
        this.setState({
            contentShow: false
        });
    }

    _keyboardDidHide() {
        this.setState({
            contentShow: true
        });
    }

    renderInfo() {
        if (this.state.contentShow) {
            return (
                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 20 }}>
                    <Text style={styles.whiteText}>Hubungi kami:</Text>
                    <Text style={styles.whiteText}>Telepon: 0804-1000-234 | WhatsApp: 0819-06000234</Text>
                    <Text style={styles.whiteText}>Senin - Jumat (08.00 - 17.00 WIB)</Text>
                </View>
            );
        }
    }

    render() {
        return (
            <ImageBackground style={styles.container} source={require('@images/ayo-bg-login.png')}>
                <View
                    style={styles.topper}
                >
                    <Image source={ayoImg} style={styles.topperImg} />
                    <View style={styles.buttonContainer}>
                        <View style={globalStyles.phoneRow}>
                            <Input value="+62" editable={false} style={styles.inputStyle} placeholderTextColor={'#fff'} />
                            <Input
                                placeholder="Nomor Ponsel"
                                keyboardType={'phone-pad'}
                                flexItem={{ flex: 3 }}
                                style={styles.inputStyle}
                                placeholderTextColor={'#fff'}
                                onChangeText={this.onPhoneChange.bind(this)}
                                value={this.props.phone}
                                error={this.state.phoneError}
                            />
                        </View>
                        <Button
                            style={styles.buttonStyle}
                            textStyle={styles.textStyle}
                            onPress={this.redirectLogin.bind(this)}
                        >
                            MASUK
						</Button>
                    </View>
                    <View style={styles.linkRow}>
                        <Text style={styles.linkText}>Pengguna Baru?</Text>
                        <TouchableOpacity onPress={this.redirectRegister.bind(this)}>
                        <Text style={[styles.linkText, { textDecorationLine: 'underline' }]}> Daftar Disini</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {this.renderInfo()}
                <Loader visible={this.props.baseLoading} text="Submitting..." />
            </ImageBackground>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        phone: state.loginReducer.phone,
        baseLoading: state.loginReducer.baseLoading
    };
};

export default connect(mapStateToProps, actions)(LoginPageComponent);
