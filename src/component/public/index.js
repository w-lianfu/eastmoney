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

  componentDidMount() {
    console.log()
  }

  render() {
    return (
      <AbsBottomView>
        <Link to='/'
          underlayColor={colors.c000}
          style={styles.link_style}>
          <FlexView>
            <WhiteText>首页</WhiteText>
            <SmallWhiteText style={common.mg_top2}>
              Home
            </SmallWhiteText>
          </FlexView>
        </Link>
        <Link to='/news'
          underlayColor={colors.c000}
          style={styles.link_style}>
          <FlexView>
            <WhiteText>资讯</WhiteText>
            <SmallWhiteText style={common.mg_top2}>
              News
            </SmallWhiteText>
          </FlexView>
        </Link>
        <Link to='/portfolio'
          underlayColor={colors.c000}
          style={styles.link_style}>
          <FlexView>
            <WhiteText>自选</WhiteText>
            <SmallWhiteText style={common.mg_top2}>
              Portfolio
            </SmallWhiteText>
          </FlexView>
        </Link>
        <Link to='/markets'
          underlayColor={colors.c000}
          style={styles.link_style}>
          <FlexView>
            <WhiteText>行情</WhiteText>
            <SmallWhiteText style={common.mg_top2}>
              Markets
            </SmallWhiteText>
          </FlexView>
        </Link>
        <Link to='/trade'
          underlayColor={colors.c000}
          style={styles.link_style}>
          <FlexView>
            <WhiteText>交易</WhiteText>
            <SmallWhiteText style={common.mg_top2}>
              Trade
            </SmallWhiteText>
          </FlexView>
        </Link>
      </AbsBottomView>
    );
  }
}

export default NavBottom;
