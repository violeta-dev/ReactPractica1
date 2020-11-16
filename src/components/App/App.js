import React from 'react';
import T from 'prop-types';

import TweetsPage from '../tweets/TweetsPage';
import LoginPage from '../auth/LoginPage';

class App extends React.Component {
  state = {
    loggedUserId: this.props.initiallyLooggedUserId,
  };

  handleLogin = loggedUserId => this.setState({ loggedUserId });

  render() {
    const { loggedUserId } = this.state;
    return (
      <div className="App">
        {loggedUserId ? (
          <TweetsPage />
        ) : (
          <LoginPage onLogin={this.handleLogin} />
        )}
      </div>
    );
  }
}

App.propTypes = {
  initiallyLooggedUserId: T.string,
};

export default App;
