import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

import { NavBottom } from '../public';

import common from '../../style/common';

class News extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.match.url);
  }

  render() {
    return (
      <View style={common.full_screen}>
        <View style={common.container}>
          <Text>hello, react native!</Text>
          <Text>News page</Text>
          <Text>News page</Text>
          <Text>News page</Text>
          <Link to='/my'>
            <Text>My Page</Text>
          </Link>
          <Link to='/setting'>
            <Text>Setting Page</Text>
          </Link>
        </View>
        <NavBottom newsColor />
      </View>
    );
  }
}

export default News;
