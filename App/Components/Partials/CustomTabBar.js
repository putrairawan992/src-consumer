import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class CustomTabBar extends Component {
  tabIcons = [];

  render() {
    return (
      <View style={[styles.tabs, this.props.style]}>
        {this.props.tabs.map((tab, i) => {
          return (
            <TouchableOpacity
              key={tab}
              onPress={() => this.props.goToPage(i)}
              style={styles.tab}
            >
              <Icon
                name={tab}
                size={30}
                color={
                  this.props.activeTab === i ? '#DC1E2D' : 'rgb(204,204,204)'
                }
                ref={icon => {
                  this.tabIcons[i] = icon;
                }}
              />
              <Text
                style={[
                  { fontFamily: 'ProximaNova-Regular' },
                  {
                    color:
                      this.props.activeTab === i
                        ? '#DC1E2D'
                        : 'rgb(204,204,204)'
                  }
                ]}
              >
                {this.props.titles[i]}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  tabs: {
    height: 60,
    flexDirection: 'row',
    borderWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: 'rgba(0,0,0,0.05)'
  }
});

export default CustomTabBar;