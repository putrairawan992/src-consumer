import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

const styles = {
	containerStyle: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	inputStyle: {
		fontFamily: 'ProximaNova-Regular',
		borderRadius: 5,
		borderWidth: 2,
		borderColor: '#ECECEC',
		color: '#000',
		backgroundColor: '#FFF',
		padding: 16,
		fontSize: 16,
		textAlign: 'left',
		margin: 10,
		flex: 1
	}
};

class Input extends Component {
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
			<View style={[styles.containerStyle, this.props.flexItem]}>
				<TextInput
					onChangeText={this.props.onChangeText}
					value={this.props.value}
					style={[styles.inputStyle, this.props.style]}
					autoCorrect={false}
					placeholder={this.props.placeholder}
					secureTextEntry={this.props.secureTextEntry}
					placeholderTextColor={'rgba(0,0,0,0.6)'}
					editable={this.props.editable}
					keyboardType={this.props.keyboardType}
					maxLength={this.props.maxLength}
					ref={input => (this.textInput = input)}
				/>
			</View>
		);
	}
}

export default Input;