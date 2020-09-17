import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import NavigationBar from '../Navbar/NavigationBar';
import {UserContext} from '../../App'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import './login.css'


const Login = () => {
    let history = useHistory();
    let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
    })

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    
    var googleProvider = new firebase.auth.GoogleAuthProvider();
    
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then(function(result) {

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            const signedInUser = {
                isSignedIn: true,
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
                success: true,
            }
            setUser(signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from)
            console.log(user)
            
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }
    
    return (
        <Container>
            <NavigationBar background="white"></NavigationBar>
            <p>Signed In User Email: {user.email}</p>
            <p>Signed In User Name: {user.name}</p>
            <div className="login-form-container">
                <form action="" className="booking-login-form" onSubmit="dosomething">
                    <h4>Create an Account</h4>
                    <input placeholder="First Name" type="text" name="First Name"/>
                    <br/>
                    <input placeholder="Last Name" type="text" name="Last Name"/>
                    <br/>
                    <input placeholder="UserName or Email" type="text" name="Username or Email"/>
                    <br/>
                    <input placeholder="Password" type="password" name="password"/>
                    <br/>
                    <input placeholder="Confirm Password" type="text" name="Confirm Password"/>
                    <br/>
                    <input className="sumit-btn" type="submit" value="Submit" />
                    <p>Already have and account? <button>Login</button></p>
                </form>
                <button onClick={handleGoogleSignIn}>Sign in with Google</button>
            </div>
        </Container>
    );
};

export default Login;