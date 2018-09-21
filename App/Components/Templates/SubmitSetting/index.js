import React, { Component } from 'react';
import { Text, View, ToastAndroid } from 'react-native';
import { Button, Loader } from '@partials';
import { CommonService } from '@services';
import { Actions } from 'react-native-router-flux';
import styles from './styes';


class SubmitSettingComponent extends Component {
    state = {
        title: '',
        text: '',
        onSubmit: false
    }

    componentWillMount() {
        const params = {
            type: this.props.typeData,
            user: 'customer'
        };
        CommonService.getStaticContent(params).then((response) => {
            this.setState({
                title: response.data[0].title,
                text: response.data[0].body
            });
        });
    }

    submitPrivacy() {
        this.setState({
            onSubmit: true
        });
        const payload = {
            type: this.props.typeData,
            status: 'yes'
        };
        CommonService.submitPrivacy(payload).then(() => {
            this.setState({
                onSubmit: false
            });
            ToastAndroid.show('Sukses Memperbarui Pengaturan', ToastAndroid.SHORT);
            Actions.pop();
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    {this.state.title}
                </Text>
                <Text style={styles.contentText}>
                    {this.state.text}
                </Text>
                <Button style={{ margin: 0 }} onPress={this.submitPrivacy.bind(this)}>
                    {(this.props.typeData === 'contacted')? 'Saya Mengerti': 'Kirim Permohonan'}
                </Button>
                <Loader visible={this.state.onSubmit} />
            </View>
        );
    }
}

export default SubmitSettingComponent;
