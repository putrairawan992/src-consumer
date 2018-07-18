import React, { Component } from 'react';
import { Picker, View } from 'react-native';

const styles = {
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'ProximaNova-Bold',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#ECECEC',
    color: '#000',
    backgroundColor: '#FFF',
    padding: 16,
    fontSize: 16,
    textAlign: 'left',
    margin: 10
  },
  inputStyle: {
    width: '100%',
    height: 20
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
      <View
        style={styles.containerStyle}
      >
        <Picker
          style={styles.inputStyle}
          selectedValue={this.props.value}
          onValueChange={this.props.onValueChange}
        >
          {this.props.items.map((i, index) => (
            <Picker.Item key={index} label={i.label} value={i.value} />
          ))}
        </Picker>
      </View>
    );
  }
}

export default Select;