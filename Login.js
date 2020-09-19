import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Header from './components/NavBar';
import {fi, db} from './config/Fire';
import './config/User'
import User from './config/User';
import firebase from 'firebase';
import Home from './Home';

let me = new User("abc"); 

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: '',
      bio: '',
      firstName: '',
      lastName: '',
    };
    this.state.me = new User("abc");
    me = this.state.me; 
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fi.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  
  }
      
    
  
//Creates an entry for the user in firebase auth
//Stores bio, first name, last name in firebase database
  signup(e){
    e.preventDefault();
    fi.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
    let f = `${this.state.firstName}`; 
    let l = `${this.state.lastName}`; 
    let b = `${this.state.bio}`; 
    const tag = db.ref('users').push().key; 
    this.state.me.uId = tag; 
    db.ref(`users/${this.state.me.uId}`).set({
      first: f, 
      last: l,
      bi: b
    });

  }
  render() {
    
    return (
      <div>
        <header>
        <nav>
        
        <Link to="/Contact">Contact   </Link>
        <Link to="/Home">Home   </Link>
        {(firebase.auth().currentUser) ? (
            <button className="btn btn-primary" to="../Login.js"onClick={() => firebase.auth().signOut()}>Logout</button>
        ) : (
          <Link to="/Login">Log In/Sign Up   </Link>
        )
        }
      </nav>
      </header>
        <h2>Volunteer Login</h2>
      <form>        
     <div class="form-group">
      <label for="exampleInputEmail1">Email address </label>
      <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    </div>
      <div class="form-group">
     <label for="exampleInputPassword1">Password </label>
     <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
     </div>
     <button type="submit" onClick={this.login} to="./Home.js" class="btn btn-primary">Login</button>
     <h2>Create a new volunteer account</h2>
     <div class="form-group">
     <div class="form-group">
      <label for="exampleInputEmail1">Email address </label>
      <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    </div>
      <div class="form-group">
     <label for="exampleInputPassword1">Password </label>
     <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
     </div>
     <label >First Name </label>
     <input value={this.state.firstName} onChange={this.handleChange} type="textarea" size="20" name="firstName" id="exampleInputFirstName1" maxLength="200"/>
     </div>
     <div class="form-group">
     <label >Last Name </label>
     <input value={this.state.lastName} onChange={this.handleChange} type="textarea" size="20" name="lastName" id="exampleInputLastName1" maxLength="200"/>
     </div>
     <div class="form-group">
     <label >Short bio (up to 200 characters) </label>
     <input value={this.state.bio} onChange={this.handleChange} type="textarea" size="200" name="bio" id="exampleInputBio1" maxLength="200"/>
     </div>
     <button onClick={this.signup} to="/Home" style={{marginLeft: '25px'}} className="btn btn-success">Sign Up</button>
     </form>
     </div>
    
    );
  }
}
export {me, Login}; 
