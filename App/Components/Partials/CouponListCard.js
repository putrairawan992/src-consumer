import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = {
    container: {
        flexDirection: 'column',
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        height: 160,
        borderRadius: 8,
        elevation: 8,
        marginVertical: 30,
        marginHorizontal: 16
    },
    topSection: {
        paddingHorizontal: 18,
        paddingVertical: 9,
        flexDirection: 'column',
        flex: 5,
        backgroundColor: '#DC1E2D',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    couponName: {
        fontFamily: 'ProximaNova-Semibold',
        fontSize: 16,
        lineHeight: 19,
        color: '#fff',
        width: '50%'
    },
    couponValue: {
        marginTop: 12
    },
    couponType: {
        fontFamily: 'ProximaNova-Semibold',
        fontSize: 14,
        color: '#fff'
    },
    couponValueText: {
        fontFamily: 'ProximaNova-Regular',
        fontSize: 50,
        lineHeight: 60,
        color: '#fff'
    },
    srcDiv: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    srcImage: {
        width: 119,
        height: 41,
        resizeMode: 'contain',
        marginTop: 15,
        marginRight: 9
    },
    bottomSection: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 18,
        paddingVertical: 9,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    },
    couponDetail: {
        fontFamily: 'ProximaNova-Regular',
        fontSize: 14,
        color: '#fff'
    },
    couponDisplayName: {
        fontFamily: 'ProximaNova-Bold',
        fontSize: 24,
        color: '#fff',
        marginTop: 13
    },
    couponDate: {
        fontFamily: 'ProximaNova-Regular',
        fontSize: 12,
        color: '#9b9b9b'
    },
      triangleContainer: {
          width: '100%',
          height: 10,
          backgroundColor: '#B11522',
          flexDirection: 'row',
          justifyContent: 'flex-end',
      },
      triangleStyle: {
          width: '100%',
          height: 'auto',
          resizeMode: 'repeat'
      }
};

const srcSource = require('@images/src-shape.png');
const triangle = require('@images/white-triangle.png');

class CouponListCard extends Component {
    renderSrcDiv() {
        if (this.props.srcLogo) {
            return (
                <View style={styles.srcDiv}>
                    <Image source={srcSource} style={styles.srcImage} />
                </View>
            );
        }
    }		
    render() {
        return (
            <TouchableWithoutFeedback>
                <View style={styles.container}>
                    <LinearGradient 
                    style={styles.topSection} colors={['#DC1E2D', '#B11522']}
							location={[0, 1]}
                    >
                        <Text style={styles.couponType}>KUPON UNDIAN</Text>
                        <View style={styles.couponValue}>
                            <Text style={styles.couponDetail}>{this.props.couponName}</Text>
                            <Text style={styles.couponDetail}>{this.props.couponNumber}</Text>
                        </View>
                        <Text style={styles.couponDisplayName}>JOHN THOR</Text>
                        {this.renderSrcDiv()}
                    </LinearGradient>
                    <View style={styles.triangleContainer}>
                      <Image source={triangle} style={styles.triangleStyle} />
                    </View>
                    <View style={styles.bottomSection}>
                        <Text style={styles.couponDate}>Jadwal Pengundian {this.props.couponDate}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default CouponListCard;
