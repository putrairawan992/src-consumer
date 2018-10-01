import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
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
                size={25}
                color={
                  this.props.activeTab === i ? '#DC1E2D' : 'rgb(204,204,204)'
                }
                ref={icon => {
                  this.tabIcons[i] = icon;
                }}
              />
              <Text
                style={[
                  { fontFamily: 'ProximaNova-Regular', fontSize: 12 },
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
              {(i === 2 && this.props.globalProfile.notif_unread > 0) ? <View style={styles.badge} /> : null}
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
    borderColor: 'rgba(0,0,0,0.05)',
    backgroundColor: '#fff'
  },
  badge: {
		backgroundColor: '#DC1E2D',
		position: 'absolute',
    top: 0,
    left: 25,
		height: 12,
		width: 12,
		borderRadius: 20
	}
});

const mapStateToProps = (state) => {
  return {
    globalProfile: state.globalReducer.globalProfile
  };
};

export default connect(mapStateToProps, null)(CustomTabBar);
