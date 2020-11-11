import React from 'react';

import { getLatestTweets } from '../../api/tweets';

const Tweet = ({ tweet }) => (
  <li>
    <div>{tweet.content}</div>
    <div>{tweet.userId}</div>
  </li>
);

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
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
        </ul>
      )
    );
  }
}

export default TweetsPage;
