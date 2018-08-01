import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import globalStyles from '../../GlobalStyles';

const styles = {
	baseStyle: {
		flex: 1,
		margin: 10
	}
};

class Datepicker extends Component {
	renderCalendar() {
		return (
			<Icon
				name="perm-contact-calendar"
				size={40}
				style={{
					position: 'absolute',
					right: 0,
					top: 0
				}}
			/>
		);
	}

	render() {
		return (
			<View style={styles.baseStyle}>
				<DatePicker
					style={{
						width: '100%',
						borderRadius: 5,
						borderWidth: 2,
						borderColor: '#ECECEC',
						backgroundColor: '#FFF',
						paddingVertical: 10,
						paddingHorizontal: 12,
					}}
					date={this.props.date}
					mode="date"
					placeholder="Tanggal Lahir"
					format="DD-MM-YYYY"
					confirmBtnText="Confirm"
					cancelBtnText="Cancel"
					androidMode="spinner"
					onDateChange={this.props.onDateChange}
					iconComponent={this.renderCalendar()}
					customStyles={{
						dateInput: {
							borderWidth: 0,
							padding: 0
						},
						dateText: {
							fontSize: 16,
							textAlign: 'left',
							fontFamily: 'ProximaNova-Regular',
							color: '#000',
							alignSelf: 'flex-start',
							justifyContent: 'center'
						},
						placeholderText: {
							alignSelf: 'flex-start',
							fontFamily: 'ProximaNova-Regular',
							color: 'rgba(0,0,0,0.6)',
							fontSize: 16
						}
						// ... You can check the source to find the other keys.
					}}
				/>
				{this.props.error ? (
					<Text style={[globalStyles.validationText]}>
						{this.props.error}
					</Text>
				) : null}
			</View>
		);
	}
}

export default Datepicker;
