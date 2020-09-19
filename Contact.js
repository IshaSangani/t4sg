import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Home from './Home.js';
import { Link } from 'react-router-dom';
import Header from './components/NavBar';
import firebase from 'firebase';

class Contact extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav>
                    
                    <Link to="/Contact">Contact   </Link>
                    <Link to="/Home">Home   </Link>
                    {(firebase.auth().currentUser) ? (
            <div>
            <Link to="/Profile">Profile   </Link>
            <button className="btn btn-primary" to="../Login.js" onClick={() => firebase.auth().signOut()}>Logout</button>
            </div>
        ) : (
            <Link to="/Login">Log In/Sign Up   </Link>
        )
        }
                    </nav>
                </header>
                <h1>Contact</h1>
                <h2>Phone</h2>
                <p>[Insert phone number here]</p>
                <h2>Email</h2>
                <p>[Insert email address here]</p>
                <h2>Starting a new chapter</h2>
                <p>Here are some instructions for how to start a new chapter.</p>
                
            </div>
        );
    }
}
export default Contact; 

