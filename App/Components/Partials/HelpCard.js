import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import globalStyles from '../../GlobalStyles';


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
    },
    innerContainer: {
        padding: 20,
        flexDirection: 'column'
    },
    bodyText: {
        fontFamily: 'ProximaNova-Regular',
        fontSize: 14,
        color: '#4a4a4a',
        lineHeight: 21
    },
    likeText: {
        marginTop: 15,
        marginBottom: 15,
        fontFamily: 'ProximaNova-Bold',
        fontSize: 14,
        color: '#000'
    }
};

class HelpCard extends Component {
    renderContent() {
        if (this.props.selectedId === this.props.item.id) {
            return (
                <View style={styles.innerContainer}>
                    <Text style={styles.bodyText}>
                        {this.props.item.body}
                    </Text>
                    <Text style={styles.likeText}>
                        Apakah informasi ini berguna?
                </Text>
                    <View style={[globalStyles.likeContainer, { marginBottom: 12 }]}>
                        <Icon name="thumb-up" size={20} />
                        <Text
                            style={{
                                fontFamily: 'ProximaNova-Regular',
                                fontSize: 16,
                                paddingLeft: 12
                            }}
                        >
                            {this.props.item.likes_count}
                        </Text>
                    </View>
                    <View style={globalStyles.likeContainer}>
                        <Icon name="thumb-down" size={20} />
                        <Text
                            style={{
                                fontFamily: 'ProximaNova-Regular',
                                fontSize: 16,
                                paddingLeft: 12
                            }}
                        >
                            {this.props.item.unlikes_count}
                        </Text>
                    </View>
                </View>
            );
        }
    }
    render() {
        return (
            <View>
                <TouchableWithoutFeedback onPress={this.props.onPress}>
                    <View style={styles.container}>
                        <View style={styles.imageTitle}>
                            <Image source={{ uri: this.props.item.image_url }} style={styles.imageStyle} />
                            <Text style={styles.textStyle}>{this.props.item.title}</Text>
                        </View>
                        <Icon name={(this.props.selectedId === this.props.item.id) ? 'keyboard-arrow-down' : 'keyboard-arrow-right'} size={28} color="#ececec" style={styles.iconStyle} />
                    </View>
                </TouchableWithoutFeedback>
                {this.renderContent()}
            </View>
        );
    }
}

export default HelpCard;
