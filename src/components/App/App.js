import React from 'react';
import AdvertsPage from '../adverts/AdvertsPage';
import LoginPage from '../auth/LoginPage';
import T from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';
import AdvertPage from '../adverts/AdvertPage'
import NewAdvertPage from '../adverts/NewAdvertPage';
import PrivateRoute from '../auth/PrivateRoute';
export const AuthContext = React.createContext();



class App extends React.Component {
  advertsPageRef = React.createRef();
  loginPageRef = React.createRef();
  state = {
    loggedUserId: this.props.initiallyLooggedUserId,
  };

 // handleLogin = loggedUserId => this.setState({ loggedUserId });
 handleLogin = (loggedUserId, cb) => this.setState({ loggedUserId }, cb);

 handleLogout = () => this.setState({ loggedUserId: null });


  componentDidMount() {
    /*console.log(this.advertsPageRef);
    if (this.advertsPageRef.current) {
      this.advertsPageRef.current.getAdverts();
    }*/
  }



  render() {
    const { loggedUserId } = this.state;

    return (
      <AuthContext.Provider
        value={{
          isLogged: !!loggedUserId,
          onLogin: this.handleLogin,
          onLogout: this.handleLogout,
        }}
      >
        <div className="App">
          <Switch>
            <PrivateRoute path="/" exact>
              {({ history }) => <AdvertsPage history={history} />}
            </PrivateRoute>
            <PrivateRoute path="/adverts" exact>
              <AdvertsPage />
            </PrivateRoute>
            <PrivateRoute path="/advert" exact>
              <NewAdvertPage />
            </PrivateRoute>
            <PrivateRoute path="/advert/:advertId" exact component={AdvertPage} />
            <Route path="/login" exact>
              {({ history }) => (
                <LoginPage onLogin={this.handleLogin} history={history} />
              )}
            </Route>
            <Route path="/404" exact>
              <div
                style={{
                  textAlign: 'center',
                  fontSize: 48,
                  fontWeight: 'bold',
                }}
              >
                404 | Not found page
              </div>
            </Route>
            <Route>
              <Redirect to="/404" />
            </Route>
          </Switch>
        </div>
      </AuthContext.Provider>

    );
  }
}



App.propTypes = {
  initiallyLooggedUserId: T.string,
};


export default App;
