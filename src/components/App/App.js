import React from 'react';
import T from 'prop-types';

import TweetsPage from '../tweets/TweetsPage';
import LoginPage from '../auth/LoginPage';

class App extends React.Component {
  tweetsPageRef = React.createRef();
  loginPageRef = React.createRef();
  state = {
    loggedUserId: this.props.initiallyLooggedUserId,
  };

  handleLogin = loggedUserId => this.setState({ loggedUserId });

  componentDidMount() {
    console.log(this.tweetsPageRef);
    if (this.tweetsPageRef.current) {
      this.tweetsPageRef.current.getTweets();
    }
  }

  render() {
    const { loggedUserId } = this.state;
    return (
      <div className="App">
        {loggedUserId ? (
          <TweetsPage ref={this.tweetsPageRef} />
        ) : (
          <LoginPage onLogin={this.handleLogin} ref={this.loginPageRef} />
        )}
      </div>
    );
  }
}

App.propTypes = {
  initiallyLooggedUserId: T.string,
};

export default App;
