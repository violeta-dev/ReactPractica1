import React from 'react';

import { getLatestTweets } from '../../api/tweets';
import Layout from '../layout';
import Tweet from './Tweet';

class TweetsPage extends React.Component {
  state = {
    tweets: null,
  };

  getTweets = async () => {
    const tweets = await getLatestTweets();
    this.setState({ tweets });
  };

  componentDidMount() {
    this.getTweets();
  }

  renderContent = () => {
    const { history } = this.props;
    const { tweets } = this.state;

    if (!tweets) {
      return null;
    }
    return tweets.map(tweet => (
      <Tweet key={tweet.id} {...tweet} history={history} />
    ));
  };

  render() {
    return (
      <Layout title="What's going on..." {...this.props}>
        <div className="tweetsPage">{this.renderContent()}</div>
      </Layout>
    );
  }
}

export default TweetsPage;
