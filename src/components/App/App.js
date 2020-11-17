import React from 'react';
import T from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';

import TweetsPage from '../tweets/TweetsPage';
import TweetPage from '../tweets/TweetPage';
import LoginPage from '../auth/LoginPage';
import NewTweetPage from '../tweets/NewTweetPage';
import PrivateRoute from '../auth/PrivateRoute';

class App extends React.Component {
  tweetsPageRef = React.createRef();
  loginPageRef = React.createRef();
  state = {
    loggedUserId: this.props.initiallyLooggedUserId,
  };

  handleLogin = (loggedUserId, cb) => this.setState({ loggedUserId }, cb);

  handleLogout = () => this.setState({ loggedUserId: null });

  componentDidMount() {
    // console.log(this.tweetsPageRef);
    // if (this.tweetsPageRef.current) {
    //   this.tweetsPageRef.current.getTweets();
    // }
  }

  render() {
    const { loggedUserId } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact>
            {({ history }) => (
              <TweetsPage
                isLogged={!!loggedUserId}
                onLogout={this.handleLogout}
                history={history}
              />
            )}
          </Route>
          <PrivateRoute path="/tweet" exact isLogged={!!loggedUserId}>
            <NewTweetPage />
          </PrivateRoute>
          <Route path="/tweet/:tweetId" exact component={TweetPage} />
          <Route path="/login" exact>
            {({ history }) => (
              <LoginPage onLogin={this.handleLogin} history={history} />
            )}
          </Route>
          <Route path="/404" exact>
            <div
              style={{ textAlign: 'center', fontSize: 48, fontWeight: 'bold' }}
            >
              404 | Not found page
            </div>
          </Route>
          <Route>
            <Redirect to="/404" />
          </Route>
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  initiallyLooggedUserId: T.string,
};

export default App;
