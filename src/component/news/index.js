import React, { Component } from 'react';
import { View, Text } from 'react-native';

class News extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.match.url);
  }

  render() {
    return (
      <View>
        <Text>hello, react native!</Text>
        <Text>News page</Text>
        <Text>News page</Text>
        <Text>News page</Text>
      </View>
    );
  }
}

export default News;
