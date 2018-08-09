import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';

const styles = {
    ButtonBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#DC1E2D',
        margin: 18,
        borderRadius: 8,
        padding: 18
    },
    descriptionSection: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        flex: 2
    },
    imageSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: 'ProximaNova-Bold',
        fontSize: 14,
        color: '#000',
        flex: 1
    },
    description: {
        fontFamily: 'ProximaNova-Regular',
        fontSize: 14,
        color: '#4a4a4a',
        flex: 1
    },
    icon: {
        height: 56,
        width: 48,
        resizeMode: 'contain',
    }
}

class WideButton extends Component {
    render() {
        return (
            <TouchableWithoutFeedback>
                <View style={styles.ButtonBox}>
                    <View style={styles.descriptionSection}>
                        <Text style={styles.title}>
                            TERDEKAT
                        </Text>
                        <Text style={styles.description}>
                            Temukan Toko SRC terdekat anda disini
                        </Text>
                    </View>
                    <View style={styles.imageSection}>
                        <Image source={require('@images/map-mini-icon.png')} style={styles.icon} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default WideButton;
