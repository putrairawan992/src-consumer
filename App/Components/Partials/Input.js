import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import globalStyles from  '../../GlobalStyles';

const styles = {
	containerStyle: {
		flexDirection: 'column',
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		margin: 10
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
		width: '100%'
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
					onKeyPress={this.props.onKeyPress}
					ref={input => (this.textInput = input)}
				/>
				{this.props.error ? (
					<Text style={globalStyles.validationText}>
						{this.props.error}
					</Text>
				) : null}
			</View>
		);
	}
}

export default Input;