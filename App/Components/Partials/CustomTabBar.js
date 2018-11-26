import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

class CustomTabBar extends Component {
  tabIcons = [];

  isNotComplete() {
    if (this.props.globalProfile.fullname && this.props.globalProfile.phone && this.props.globalProfile.gender && this.props.globalProfile.birth_date && (calculateAge(this.props.globalProfile.birth_date) >= 18 ? this.props.globalProfile.id_number : true) && this.props.globalProfile.city_id && this.props.globalProfile.province_id && this.props.globalProfile.email) {
      return false;
    }
    return true;
  }

  render() {
    console.log('check is not complete value', this.isNotComplete());
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
              {(i === 4 && this.isNotComplete()) ? <View style={styles.badge} /> : null}
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
    top: 5,
    left: 20,
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

const calculateAge = (birthday) => {
  return Math.floor((new Date() - new Date(birthday)) / 1000 / 60 / 60 / 24 / 365.25);
};

export default connect(mapStateToProps, null)(CustomTabBar);
