import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = {
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#ECECEC'
    },
    inputStyle: {
        fontFamily: 'ProximaNova-Regular',
        color: '#000',
        backgroundColor: '#FFF',
        fontSize: 16,
        textAlign: 'left',
        flex: 9,
        padding: 16
    },
    iconStyle: {
        flex: 1,
        height: 16,
        width: 16,
        color: '#B92E30',
        fontSize: 18
    }
};

class SearchInput extends Component {
    componentDidMount() {
        if (this.props.onRef != null) {
            this.props.onRef(this);
        }
    }
    focus() {
        this.textInput.focus();
    }

    render() {
        return (
            <View style={[styles.containerStyle, this.props.style]}>
                <TextInput
                    onChangeText={this.props.onChangeText}
                    value={this.props.value}
                    style={[styles.inputStyle]}
                    autoCorrect={false}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secureTextEntry}
                    placeholderTextColor={'rgba(0,0,0,0.6)'}
                    editable={this.props.editable}
                    keyboardType={this.props.keyboardType}
                    maxLength={this.props.maxLength}
                    onKeyPress={this.props.onKeyPress}
                    ref={input => (this.textInput = input)}
                />
                <Icon name="search" style={styles.iconStyle} />
            </View>
        );
    }
}

export default SearchInput;
