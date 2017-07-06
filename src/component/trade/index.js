import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

import { NavBottom } from '../public';

import common from '../../style/common';

class Trade extends Component {
  render() {
    return (
      <View style={common.full_screen}>
        <Text>Trade page......</Text>
        <Text>Trade page......</Text>
        <Text>Trade page......</Text>
        <Text>Trade page......</Text>
        <Text>Trade page......</Text>
        <Text>Trade page......</Text>
        <Text>Trade page......</Text>
        <Text>Trade page......</Text>
        <Text>Trade page......</Text>
        <NavBottom tradeColor />
      </View>
    );
  }
}

export default Trade;
