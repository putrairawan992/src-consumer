import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = {
    container: {
        flexDirection: 'row',
        padding: 20,
        paddingRight: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ececec'
    },
    imageStyle: {
        height: 30,
        width: 30,
        marginRight: 22,
        resizeMode: 'contain',
        
    },
    textStyle: {
        fontFamily: 'ProximaNova-Bold',
        fontSize: 12,
        color: '#000'
    },
    imageTitle: {
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    iconStyle: {
        flex: 1
    }
};

class HelpCard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageTitle}>
                    <Image source={{ uri: this.props.item.image_url }} style={styles.imageStyle} />
                    <Text style={styles.textStyle}>{this.props.item.title}</Text>
                </View>
                <Icon name="keyboard-arrow-right" size={28} color="#ececec" style={styles.iconStyle} />
            </View>
        );
    }
}

export default HelpCard;
