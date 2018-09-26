import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from '@partials';
import { CommonService } from '@services';
import HTML from 'react-native-render-html';
import styles from './styles';


class TermConditionComponent extends Component {
    state = {
        body: '',
        loaded: false
    };
    componentWillMount() {
        const staticParam = {
            type: (this.props.termState === 'term') ? 'terms-conditions' : 'privacy-policy',
            user: 'customer'
        };
        CommonService.getStaticContent(staticParam).then((term) => {
            this.setState({
                loaded: true,
                body: term.data[0].body
            });
        });
    }
    renderContent() {
        return (
            <View>
                <HTML html={this.state.body} />
            </View>
        );
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container} >
                {this.renderContent()}
                <Button
                    style={{ margin: 0, marginTop: 25 }}
                    onPress={() => {
                        Actions.pop();
                    }}
                >Tutup
                </Button>
            </ScrollView>
        );
    }
}

export default TermConditionComponent;
