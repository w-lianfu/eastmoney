import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

import common from '../../style/common';

class My extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <View style={common.full_screen}>
        <Text>文件</Text>
        <Text>文件</Text>
        <Text>文件</Text>
        <Text>文件</Text>
        <Text>文件</Text>
        <Text>文件</Text>
      </View>
    );
  }
}

export default My;
