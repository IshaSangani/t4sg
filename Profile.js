import React, { Component } from "react";
import {Login, me} from './Login'; 
import { Link } from 'react-router-dom';
import { fi, db } from "./config/Fire";
import Home from './Home.js';
import firebase from 'firebase';
import Header from './components/NavBar';

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
        user: firebase.auth().currentUser,
        firstName: "", 
        lastName: "",
        bio: ""
    };
    
  }
  
  componentDidMount() {
    /*let bioInput = firebase.database().ref(`users/${me.userId}/bi`); 
    bioInput.on('value', function(snapshot) {
        this.setState({bio: snapshot.val()});
      }
    )*/
    db.ref(`users/${me.userId}/bi`).on("value", snapshot => {
        let bioInput = "";
        
        snapshot.forEach(snap => {
          bioInput.set(snap.val());
        });
        this.setState({ bio: bioInput });
      });
    db.ref(`users/${me.userId}/first`).on("value", snapshot => {
        let firstNameInput = "";
        snapshot.forEach(snap => {
          firstNameInput.set(snap.val());
        });
        this.setState({ firstName: firstNameInput });
      });
    db.ref(`users/${me.userId}/last`).on("value", snapshot => {
        let lastNameInput = "";
        snapshot.forEach(snap => {
          lastNameInput.set(snap.val());
        });
        this.setState({ lastName: lastNameInput });
      });
  }

  render() {
    return (
      <div>
        <nav>
        <Link to="/Contact">Contact   </Link>
        <Link to="/Home">Home   </Link>
        <Link to="/Profile">Profile   </Link>
            <button className="btn btn-primary" to="../Login.js" onClick={() => firebase.auth().signOut()}>Logout</button> 
      </nav>
        <div>
          Welcome back, <div key={this.state.firstName}></div>
        </div>
        <div>
            <h3>Name</h3>
            <p>{this.state.firstName} {this.state.lastName}</p>
        </div>
        <div>
            <h3>Bio</h3>
            <p>{this.state.bio}</p>
        </div>
      </div>
    );
  }
}