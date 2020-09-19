import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../Home.js'; 
import Contact from '../Contact.js';

function Header() {
    //NAV BAR NEEDS EDITING
    
;
    return (
      <header>
        <nav>
        <Link to="/Login">Log In/Sign Up</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Home">Home</Link>
        {(firebase.auth().currentUser) ? (
            <button className="btn btn-primary" to="../Login.js"onClick={() => firebase.auth().signOut()}>Logout</button>
        ) : (
          null
        )
        }
      </nav>
      </header>   
    );
  }
  
  export default Header;