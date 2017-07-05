import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import colors from '../../style/color';

class NavBottom extends Component {
  render() {
    return (
      <View>
        <Link to='/' underlayColor={colors.eee}>
          <View>
            <Text>首页</Text>
            <Text>Home</Text>
          </View>
        </Link>
        <Link to='/news' underlayColor={colors.eee}>
          <View>
            <Text>资讯</Text>
            <Text>News</Text>
          </View>
        </Link>
        <Link to='/portfolio' underlayColor={colors.eee}>
          <View>
            <Text>自选</Text>
            <Text>Portfolio</Text>
          </View>
        </Link>
        <Link to='/markets' underlayColor={colors.eee}>
          <View>
            <Text>行情</Text>
            <Text>Markets</Text>
          </View>
        </Link>
        <Link to='/trade' underlayColor={colors.eee}>
          <View>
            <Text>交易</Text>
            <Text>Trade</Text>
          </View>
        </Link>
      </View>
    );
  }
}

let styles = StyleSheet.create({

})

export default NavBottom;
