import React from 'react';
import TweetsPage from '../tweets/TweetsPage';
import LoginPage from '../auth/LoginPage';

class App extends React.Component {
  state = {
    loggedUserId: null,
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

export default App;
