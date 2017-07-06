import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { NavBottom } from '../public';

import common from '../../style/common';

class Portfolio extends Component {
  render() {
    return (
      <View style={common.full_screen}>
        <Text>immutable</Text>
        <Text>ramda</Text>
        <NavBottom portfolioColor />
      </View>
    );
  }
}

export default Portfolio;
