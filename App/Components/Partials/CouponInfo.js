import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

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
        height: 40,
        width: 70,
        resizeMode: 'cover'
    }
};

class CouponInfo extends Component {
    render() {
        return (
            <TouchableOpacity 
            onPress={() => {
                Actions.CouponHistory();
            }}
            style={styles.container}
            >
            <View>
               <Text>{this.props.titleText}</Text>
               <View style={styles.rowView}>
                   <Image source={this.props.imgIcon} style={styles.imageStyle} />
                   <Text style={styles.valueText}>{this.props.value}</Text>
               </View>
            </View>
            </TouchableOpacity>
        );
    }
}

export default CouponInfo;
