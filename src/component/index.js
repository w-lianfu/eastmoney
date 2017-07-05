import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Route, Link } from 'react-router-native';

import NavBottom from './public';
import { WarningText } from '../styled';

class Home extends Component {
  render() {
    return (
      <View>
        <Text>One</Text>
        <Text>Two</Text>
        <Text>Three</Text>
        <WarningText>warning</WarningText>
        <NavBottom />
      </View>
    );
  }
}

export default Home;
