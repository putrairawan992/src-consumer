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
		fontFamily: 'ProximaNova-Bold',
		borderRadius: 5,
		borderWidth: 2,
		borderColor: '#ECECEC',
		color: '#000',
		backgroundColor: '#FFF',
		padding: 16,
		fontSize: 18,
		textAlign: 'left',
		margin: 10,
		flex: 1
	}
};

class Input extends Component {
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

				/>
			</View>
		);
	}
}

export default Input;
