import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Datepicker extends Component {
	render() {
		return (
			<DatePicker
				style={{
					flex: 1,
					margin: 10,
					borderRadius: 5,
					borderWidth: 2,
					borderColor: '#ECECEC',
					backgroundColor: '#FFF',
					paddingVertical: 10,
					paddingHorizontal: 12
				}}
				date={this.props.date}
				mode="date"
				placeholder="Tanggal Lahir"
				format="DD-MM-YYYY"
				confirmBtnText="Confirm"
				cancelBtnText="Cancel"
				androidMode="spinner"
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
					}
					// ... You can check the source to find the other keys.
				}}
			/>
		);
	}

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
}

export default Datepicker;