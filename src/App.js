import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { SignUp} from "./SignUp";
import { PrivateRoute } from "./PrivateRoute";
import AccountListContainer from "./containers/AccountListContainer"

export class App extends React.Component {
  state = {
    authorized: false,
  }

  login = () => {
    this.setState({
      authorized: true,
    })
  }
  /*
  let url = 'https://localhost:5001/test';
    let response = await fetch(url);
    let data = await response.text(); 
    console.log(data);
  */

  logout = () => {
    this.setState({
      authorized: false,
    })
  }

  render() {
    const { authorized } = this.state;

    return (
      <BrowserRouter>
      <div>
        <Switch>
          <PrivateRoute exact path="/private" authorized={authorized}>
          
          <AccountListContainer />;
          <Home logout={this.logout} />
          </PrivateRoute>

          <Route exact path="/login">
            <Login login={this.login} authorized={authorized} />
          </Route>

          <Route exact path="/signup">
            <SignUp login={this.login} authorized={authorized} />
          </Route>

          {
            this.state.authorized ?
            <Redirect to="/private"/> :
            <Redirect to="/login"/>
          }
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
};

export default App;











/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/