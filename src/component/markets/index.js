import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

import { NavBottom } from '../public';

import common from '../../style/common';

class Markets extends Component {
  render() {
    return (
      <View style={common.full_screen}>
        <Text>markets page......</Text>
        <Text>markets page......</Text>
        <Text>markets page......</Text>
        <Text>markets page......</Text>
        <Text>markets page......</Text>
        <Text>markets page......</Text>
        <Text>markets page......</Text>
        <NavBottom marketsColor />
      </View>
    );
  }
}

export default Markets;
