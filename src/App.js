import React from 'react';

import { getLatestTweets } from './api/tweets';
class App extends React.Component {
  state = {
    tweets: null,
  };

  async componentDidMount() {
    const tweets = await getLatestTweets();
    this.setState({ tweets });
  }

  render() {
    const { tweets } = this.state;
    return <div className="App">{JSON.stringify(tweets)}</div>;
  }
}

export default App;
