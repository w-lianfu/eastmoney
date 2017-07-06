import React from 'react';
import { View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';

import Home from './src/component';
import News from './src/component/news';
import Portfolio from './src/component/portfolio';
import Markets from './src/component/markets';
import Trade from './src/component/trade';

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
        </View>
      </NativeRouter>
    );
  }
}

export default App;
