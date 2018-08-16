import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CommonService } from '@services';
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
    state = {
        like_status: this.props.item.like_status,
        unlike_status: this.props.item.unlike_status,
        likes_count: this.props.item.likes_count,
        unlikes_count: this.props.item.unlikes_count
    }

    likeContent() {
        const context = {
            content_id: this.props.item.id
        };
        CommonService.likeContent(context).then((response) => {
            if (response.status === true) {
                this.setState({
                    like_status: true,
                    likes_count: this.state.likes_count + 1,
                    unlike_status: false,
                    unlikes_count: this.state.unlikes_count > 0 ? this.state.unlikes_count - 1 : this.state.unlikes_count
                });
            }
            else {
                this.setState({
                    like_status: false,
                    likes_count: this.state.likes_count - 1
                });
            }
        });
    }
    dislikeContent() {
        const context = {
            content_id: this.props.item.id
        };
        CommonService.dislikeContent(context).then((response) => {
            if (response.status === true) {
                this.setState({
                    unlike_status: true,
                    unlikes_count: this.state.unlikes_count + 1,
                    like_status: false,
                    likes_count: this.state.likes_count > 0 ? this.state.likes_count - 1 : this.state.likes_count
                });
            }
            else {
                this.setState({
                    unlike_status: false,
                    unlikes_count: this.state.unlikes_count - 1
                });
            }
        });
    }
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
                        <TouchableWithoutFeedback onPress={this.likeContent.bind(this)}>
                            <Icon name="thumb-up" color={(this.state.like_status ? '#DC1E2D' : null)} size={20} />
                        </TouchableWithoutFeedback>
                        <Text
                            style={{
                                fontFamily: 'ProximaNova-Regular',
                                fontSize: 16,
                                paddingLeft: 12
                            }}
                        >
                            {this.state.likes_count}
                        </Text>
                    </View>
                    <View style={globalStyles.likeContainer}>
                        <TouchableWithoutFeedback onPress={this.dislikeContent.bind(this)}>
                            <Icon name="thumb-down" color={(this.state.unlike_status ? '#DC1E2D' : null)} size={20} />
                        </TouchableWithoutFeedback>
                        <Text
                            style={{
                                fontFamily: 'ProximaNova-Regular',
                                fontSize: 16,
                                paddingLeft: 12
                            }}
                        >
                            {this.state.unlikes_count}
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
