import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import moment from 'moment';
import globalStyles from '../../GlobalStyles';

require('moment/locale/id');

moment.locale('id');

class CouponLogCard extends Component {

	render() {
		return (
			<TouchableWithoutFeedback>
				<View style={globalStyles.TrasnsactionCard}>
					<View style={globalStyles.PointLogPreview}>
						<Text style={globalStyles.TransactionShopName}>
                            {/* Tanggal Transaksi: {moment(this.props.item.created_at).format('D MMMM YYYY')} */}
                            Tanggal Transaksi : 4 Oktober 2018
						</Text>
						<View style={globalStyles.PointDetails}>
                            <Text style={globalStyles.inputPoint}>Undian YBKS</Text>
							{/* <Text style={(this.props.item.type === 'in') ? globalStyles.inputPoint : globalStyles.outputPoint}>
								{this.props.item.description}
                            </Text> */}
                            <Text style={globalStyles.inputPoint}>Loreem Ipsum Dolor Sit Amet</Text>
							<View style={globalStyles.PointTime}>
                                {/* <Text>{moment(this.props.item.updated_at).format('DD-MM-YYYY HH:mm')}</Text> */}
                                <Text>5 Oktober</Text>
							</View>
						</View>
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

export default CouponLogCard;
