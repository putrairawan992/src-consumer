import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';

const styles = {
	tabRow: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: '#FFF'
	},
	menuText: {
		fontFamily: 'ProximaNova-Regular',
		fontSize: 14,
		lineHeight: 17,
		color: '#DC1E2D',
		marginHorizontal: 16
	},
	menuActive: {
		fontFamily: 'ProximaNova-Bold',
		color: '#D83426'
	}
};

class ScrollSegment extends Component {
	state = {
		selectedCategory: ''
	};

	componentWillMount() {
		this.setState({
			selectedCategory: this.props.items[0].id
		});
	}

	renderMenu() {
		return this.props.items.map((value) => {
			return (
				<TouchableOpacity
					key={value.id} onPress={() => {
						this.setState({
							selectedCategory: value.id
						}, () => {
							this.props.parentCallback(value.id);
						});
					}}
				>
					<Text style={[styles.menuText, (this.state.selectedCategory === value.id) ? styles.menuActive : null]}>{value.name}</Text>
				</TouchableOpacity>
			);
		});
	}
	render() {
		return (
			<ScrollView style={{ borderWidth: 1, borderColor: '#ececec' }} contentContainerStyle={styles.tabRow} horizontal showsHorizontalScrollIndicator={false}>
				{this.renderMenu()}
			</ScrollView>
		);
	}

}

export default ScrollSegment;
