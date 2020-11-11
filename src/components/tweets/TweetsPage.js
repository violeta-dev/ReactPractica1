import React from 'react';

import { getLatestTweets } from '../../api/tweets';
import Tweet from './Tweet';

class TweetsPage extends React.Component {
  state = {
    tweets: null,
  };

  async componentDidMount() {
    const tweets = await getLatestTweets();
    this.setState({ tweets });
  }

  render() {
    const { tweets } = this.state;
    return (
      tweets && (
        <ul>
          {tweets.map(tweet => (
            <Tweet key={tweet.id} {...tweet} />
          ))}
        </ul>
      )
    );
  }
}

export default TweetsPage;
