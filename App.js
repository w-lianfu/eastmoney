import React from 'react';
import { View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';

import Home from './src/component/home';
import News from './src/component/news';
import Portfolio from './src/component/portfolio';
import Markets from './src/component/markets';
import Trade from './src/component/trade';
import My from './src/component/my';
import Setting from './src/component/my/setting';

class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View>
          <Route exact path='/' component={Home} />
          <Route path='/news' component={News} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/markets' component={Markets} />
          <Route path='/trade' component={Trade} />
          <Route path='/my' component={My} />
          <Route path='/setting' component={Setting} />
        </View>
      </NativeRouter>
    );
  }
}

export default App;
