import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { LinkText } from '@partials';
import { CheckBox } from 'react-native-elements';

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
					checkedColor='#DC1E2D'
					uncheckedColor='#DC1E2D'
				/>
				{this.renderText()}
			</View>
		);
	}

	renderText() {
		if (this.props.type == 'term') {
			return (
				<View style={styles.customText}>
					<Text>Saya telah membaca dan menyetujui</Text>
					<LinkText style={{ marginLeft: 0, marginTop: 0 }}>
						Syarat & Ketentuan
					</LinkText>
				</View>
			);
		} else if (this.props.type == 'smoking') {
			return <View style={styles.customText}><Text>Ya, Saya Merokok</Text></View>;
		}
	}
}

export default Checkbox;