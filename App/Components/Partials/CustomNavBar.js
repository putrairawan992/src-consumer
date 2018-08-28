import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {  
    height: 56,
    flexDirection: 'row',
    backgroundColor: '#DC1E2D',
    justifyContent: 'space-between',
    alignItems: 'center'

  },
  navBarItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  navBarItemText: {
    fontFamily: 'ProximaNova-Bold',
    color: '#fff',
    fontSize: 20,
    paddingLeft: 30
  }

});

export default class CustomNavBar extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  _renderLeft() {
      return (
        <TouchableOpacity
          onPress={Actions.pop}
          style={[styles.navBarItem]}
        >
          <Icon name="keyboard-arrow-left" size={36} color="#fff" />
          <Text style={styles.navBarItemText}>{this.props.title}</Text>
        </TouchableOpacity>
      );
    // if (Actions.currentScene === 'customNavBar1') {
    //   return (
    //     <TouchableOpacity
    //       onPress={() => console.log('Hamburger button pressed')}
    //       style={[styles.navBarItem, { paddingLeft: 10 }]}
    //     >
    //       <Image
    //         style={{ width: 30, height: 50 }}
    //         resizeMode="contain"
    //         source={{
    //           uri:
    //             'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png'
    //         }}
    //       />
    //     </TouchableOpacity>
    //   );
    // } else {
    //   return (
    //     <TouchableOpacity
    //       onPress={Actions.pop}
    //       style={[styles.navBarItem, { paddingLeft: 10 }]}
    //     >
    //       <Image
    //         style={{ width: 30, height: 50 }}
    //         resizeMode="contain"
    //         source={{
    //           uri: 'https://image.flaticon.com/icons/png/512/0/340.png'
    //         }}
    //       />
    //     </TouchableOpacity>
    //   );
    // }
  }

  _renderMiddle() {
    return (
      <View style={styles.navBarItem} />
    );
  }

  _renderRight() {
    return (
      <View
        style={[
          styles.navBarItem,
          { flexDirection: 'row', justifyContent: 'flex-end' }
        ]}
      >
        <TouchableOpacity
          onPress={this.props.rightPress}
          style={{ paddingRight: 10 }}
        >
          <Icon name={this.props.withIcon} size={32} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={[styles.container]}>
        {this._renderLeft()}
        {this._renderMiddle()}
        {(this.props.withIcon ? this._renderRight() : null)}
      </View>
    );
  }
}
