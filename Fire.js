import firebase from 'firebase';
import fire from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCHraKezyyG7jsDScsJUWpWKEolHO2TApE",
    authDomain: "t4sg-e6e32.firebaseapp.com",
    databaseURL: "https://t4sg-e6e32.firebaseio.com",
    projectId: "t4sg-e6e32",
    storageBucket: "t4sg-e6e32.appspot.com",
    messagingSenderId: "434024348650",
    appId: "1:434024348650:web:ba63c651fe6262affa9093",
    measurementId: "G-SD7L0S1CT3"
  };
 
  const fi = firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  export {fi, db}
