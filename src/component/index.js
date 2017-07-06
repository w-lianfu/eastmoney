import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Route, Link } from 'react-router-native';

import NavBottom from './public';
import { WarningText } from '../styled';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>One</Text>
        <Text>Two</Text>
        <Text>Three</Text>
        <WarningText>warning</WarningText>
        <NavBottom />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  }
})

export default Home;
