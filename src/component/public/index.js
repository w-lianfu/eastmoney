import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

import colors from '../../style/color';

// 样式文件
import common from '../../style/common';
import styles from '../../style/nav-bottom';

// 自定义组件
import { AbsBottomView, WhiteText, SmallWhiteText, FlexView } from '../../styled';

class NavBottom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let homeColor = this.props.homeColor ? '#FF3D00' : '#000';
    let newsColor = this.props.newsColor ? '#FF3D00' : '#000';
    let portfolioColor = this.props.portfolioColor ? '#FF3D00' : '#000';
    let marketsColor = this.props.marketsColor ? '#FF3D00' : '#000';
    let tradeColor = this.props.tradeColor ? '#FF3D00' : '#000';

    return (
      <AbsBottomView>
        <Link to='/'
          underlayColor={colors.c30}
          style={styles.link_style}>
          <FlexView>
            <WhiteText style={{color: homeColor}}>首页</WhiteText>
            <SmallWhiteText 
              style={[common.mg_top2, {color: homeColor}]}>
              Home
            </SmallWhiteText>
          </FlexView>
        </Link>
        <Link to='/news'
          underlayColor={colors.c30}
          style={styles.link_style}>
          <FlexView>
            <WhiteText style={{color: newsColor}}>资讯</WhiteText>
            <SmallWhiteText 
              style={[common.mg_top2, {color: newsColor}]}>
              News
            </SmallWhiteText>
          </FlexView>
        </Link>
        <Link to='/portfolio'
          underlayColor={colors.c30}
          style={styles.link_style}>
          <FlexView>
            <WhiteText style={{color: portfolioColor}}>自选</WhiteText>
            <SmallWhiteText 
              style={[common.mg_top2, {color: portfolioColor}]}>
              Portfolio
            </SmallWhiteText>
          </FlexView>
        </Link>
        <Link to='/markets'
          underlayColor={colors.c30}
          style={styles.link_style}>
          <FlexView>
            <WhiteText style={{color: marketsColor}}>行情</WhiteText>
            <SmallWhiteText 
              style={[common.mg_top2, {color: marketsColor}]}>
              Markets
            </SmallWhiteText>
          </FlexView>
        </Link>
        <Link to='/trade'
          underlayColor={colors.c30}
          style={styles.link_style}>
          <FlexView>
            <WhiteText style={{color: tradeColor}}>交易</WhiteText>
            <SmallWhiteText 
              style={[common.mg_top2, {color: tradeColor}]}>
              Trade
            </SmallWhiteText>
          </FlexView>
        </Link>
      </AbsBottomView>
    );
  }
}

class NavTop extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={common.mg_top20}>
        <Text>nav top...</Text>
      </View>
    );
  }
}

export {
  NavBottom,
  NavTop
}
