import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, Keyboard } from 'react-native';
import { Button, Input } from '@partials';
import { trackScreen } from '@helpers/analytic';
import { Actions } from 'react-native-router-flux';
import styles from './styles';
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

    redirectLogin() {
        Actions.Login();
    }

    redirectRegister() {
        Actions.ShopRegister();
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
                            <Input value="62" editable={false} style={styles.inputStyle} placeholderTextColor={'#fff'} />
                            <Input
                                placeholder="Nomor Ponsel"
                                keyboardType={'phone-pad'}
                                flexItem={{ flex: 3 }}
                                style={styles.inputStyle}
                                placeholderTextColor={'#fff'}
                            // onChangeText={this.onPhoneChange.bind(this)}
                            // value={this.props.phone}
                            // error={this.state.phoneError}
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
                </View>
             {this.renderInfo()}
            </ImageBackground>
        );
    }
}

export default LoginPageComponent;
