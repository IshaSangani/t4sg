import React, { Component } from 'react';
import {fi, db} from './config/Fire';
import {Login, User} from './Login';
import Contact from './Contact.js';
import { Link } from 'react-router-dom';
import Header from './components/NavBar';
import firebase from 'firebase';
import Calendar from 'react-calendar';
import Popup from './components/popup.js';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.state = { showPopup: false };
    }
    togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
    }
    logout() {
        fi.auth().signOut();
    }
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
            <button className="btn btn-primary" to="../Home.js" onClick={() => firebase.auth().signOut()}>Logout</button>
            </div>
            ) : (
            <Link to="/Login">Log In/Sign Up   </Link>
        )
        }
      </nav>
      </header>
        {!firebase.auth().currentUser ? (
            <div>
            <h1>Organization Title</h1> 
            <p>This is the unauthenticated home page.</p>
            <h2>Our Mission</h2>
            <p>More about our mission</p>
            <h2>Our Programs</h2>
            <p>More about our programs</p>
            <h2>Our Platform</h2>
            <p>First and foremost, we believe that websites should be ugly</p>
            <h2>Donate</h2>
            <a href="https://www.actionnetwork.org/">Click this link to access Action Network!</a>
            </div>
        )
        : (
            <div>
                <h1>Volunteer Corner</h1>
                <p>This is the authenticated home page.</p>
                <h2>Here are some exclusive educational materials that only our volunteers can access.</h2>
                <p>Pretend there are exclusive materials here</p>
                <h2>Calendar with upcoming volunteer trainings and events</h2>
                <p>Volunteers, please check your shifts here!</p>
                <Calendar
                onClickDay={this.togglePopup.bind(this)}>
                </Calendar>
                {this.state.showPopup ? 
                <Popup
                text='You have 1 shift scheduled for today from 9am to 2pm.'
                closePopup={this.togglePopup.bind(this)}
                />
                : null
                }
            </div>
            )}   
            </div>
        )
    }
}

export default Home;