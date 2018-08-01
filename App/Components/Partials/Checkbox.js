import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { LinkText } from '@partials';
import { CheckBox } from 'react-native-elements';
import globalStyles from '../../GlobalStyles';

const styles = {
	mainStyle: {
		backgroundColor: '#fff',
		borderWidth: 0,
		margin: 0,
		marginRight: 0,
		justifyContent: 'flex-start'
	},
	textStyle: {
		marginLeft: 0,
		marginRight: 0
	},
	customText: {
		marginTop: 10
	}
};

class Checkbox extends Component {
	renderText() {
		if (this.props.type === 'term') {
			return (
				<View style={styles.customText}>
					<Text>Saya telah membaca dan menyetujui</Text>
					<LinkText style={{ marginLeft: 0, marginTop: 0, marginBottom: 0 }}>
						Syarat & Ketentuan
					</LinkText>
					{this.props.error ? (
						<Text style={[globalStyles.validationText]}>
							{this.props.error}
						</Text>
					) : null}
				</View>
			);
		} else if (this.props.type === 'smoking') {
			return (
				<View style={styles.customText}>
					<Text>Ya, Saya Merokok</Text>
				</View>
			);
		}
	}

	render() {
		return (
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					justifyContent: 'flex-start'
				}}
			>
				<CheckBox
					checked={this.props.status}
					onPress={this.props.onPress}
					containerStyle={styles.mainStyle}
					textStyle={styles.textStyle}
					checkedColor="#DC1E2D"
					uncheckedColor="#DC1E2D"
				/>
				{this.renderText()}
			</View>
		);
	}
}

export default Checkbox;
