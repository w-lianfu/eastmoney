import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SearchBar } from 'antd-mobile';

import { NavBottom } from '../public';

import common from '../../style/common';
import styles from '../../style/nav-top';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  onChange() {
    console.log('hi')
  }

  searchSubmit(value) {
    console.log(value);
  }
  
  render() {
    return (
      <View style={common.full_screen}>
        <View style={common.abs_top}>
          <Link to='/my'>
            <Icon name='account-circle' size={25} />
          </Link>
          <View style={{width:'70%',margin:0,padding:0}}>
            <SearchBar
              placeholder='搜索股票/组合/用户/内容'
              onSubmit={this.searchSubmit.bind(this)}
            />
          </View>
          <Icon name='add-circle' size={25} />
        </View>
        <View style={common.container}>
          <Text>hello</Text>
          <Icon name='person' size={20} />
        </View>
        <NavBottom homeColor />
      </View>
    );
  }
}

export default Home;
