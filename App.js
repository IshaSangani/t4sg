import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {fi, db} from './config/Fire';
import firebase from 'firebase';


import Home from './Home';
import {Login, User, me} from './Login';
import Contact from'./Contact';
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import Profile from './Profile';
import Header from './components/NavBar';
import Popup from './components/popup';

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/Home", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === false ? (
          <Component {...props} />
        ) : (
          <Redirect to="/Login" />
        )
      }
    />
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
      authenticated: false
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fi.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  render() {
    return(
      <Router>
        <Route exact path = "/" component = {Home}/>
      <Switch>
        <PublicRoute
          path="/Profile"
          authenticated={this.state.authenticated}
          component={Profile}
        ></PublicRoute>
        <PublicRoute
          path="/Home"
          authenticated={this.state.authenticated}
          component={Home}
        ></PublicRoute>
        <PublicRoute
          path="/Login"
          authenticated={this.state.authenticated}
          component={Login}
        ></PublicRoute>
        <PublicRoute
          path="/Contact"
          authenticated={this.state.authenticated}
          component={Contact}
        ></PublicRoute>
      </Switch>
    </Router>    
    );
}
}

 export default App; 