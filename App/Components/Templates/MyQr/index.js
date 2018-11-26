import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import QRCode from 'react-native-qrcode-svg';
import styles from './styles';

class MyQrComponent extends Component {
    myQuery = {
        id: this.props.globalProfile.id,
        name: this.props.globalProfile.fullname,
        phone: this.props.globalProfile.phone,
        ayo_consumer_qr: true
    }
    render() {
        console.log('user query', this.myQuery);
        return (
            <View style={styles.container}>
              <View style={styles.qrContainer}>
                <QRCode
                    value={JSON.stringify(this.myQuery)}
                    logoSize={50}
                    size={230}
                    logoMargin={10}
                    logoBackgroundColor='transparent'
                />
                </View>
                <Text style={{ fontFamily: 'ProximaNova-Semibold', fontSize: 14, textAlign: 'center', color: '#000', lineHeight: 24 }}>Tunjukkan Kode QR Anda saat belanja di SRC untuk mendapatkan kupon undian berhadiah</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        globalProfile: state.globalReducer.globalProfile
    };
};

export default connect(mapStateToProps, null)(MyQrComponent);
