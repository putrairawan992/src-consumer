import React, { Component } from 'react';
import { Picker, View, Text } from 'react-native';
import globalStyles from '../../GlobalStyles';

const styles = {
  containerStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'ProximaNova-Bold',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#ECECEC',
    color: '#000',
    backgroundColor: '#FFF',
    padding: 16,
    paddingLeft: 10,
    fontSize: 16,
    textAlign: 'left',
    flex: 1
  },
  inputStyle: {
    width: '100%',
    height: 20
  },
  baseStyle: {
    flexDirection: 'column',
    width: '100%',
    padding: 10
  }
};

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  render() {
    return (
      <View style={styles.baseStyle}>
        <View style={styles.containerStyle}>
          <Picker
            style={styles.inputStyle}
            selectedValue={this.props.value}
            onValueChange={this.props.onValueChange}
          >
            {this.props.placeholder ? (
              <Picker.Item value="" label={this.props.placeholder} />
            ) : null}
            {this.props.items.map((i, index) => (
              <Picker.Item
                key={index}
                label={i[this.props.iteratorLabel]}
                value={i[this.props.iteratorKey]}
              />
            ))}
          </Picker>
        </View>
        {this.props.error ? (
          <Text style={[globalStyles.validationText]}>{this.props.error}</Text>
        ) : null}
      </View>
    );
  }
}

export default Select;
