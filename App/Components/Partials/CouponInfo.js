import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

const styles = {
    container: {
        flexDirection: 'column',
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        height: 'auto',
        borderRadius: 8,
        elevation: 8,
        paddingHorizontal: 18,
        paddingVertical: 9
    },
    titleTextStyle: {
        fontFamily: 'ProximaNova-Regular',
        fontSize: 12,
        lineHeight: 14,
        color: '#4a4a4a'
    },
    rowView: {
        flexDirection: 'row',
        marginTop: 12,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    valueText: {
        fontFamily: 'ProximaNova-Regular',
        fontSize: 36,
        lineHeight: 43,
        color: '#DC1E2D'
    },
    imageStyle: {
        height: 60,
        width: 90
    }
};

class CouponInfo extends Component {
    render() {
        return (
            <View style={styles.container}>
               <Text>{this.props.titleText}</Text>
               <View style={styles.rowView}>
                   <Image source={this.props.imgIcon} style={styles.imageStyle} />
                   <Text style={styles.valueText}>{this.props.value}</Text>
               </View>
            </View>
        );
    }
}

export default CouponInfo;
