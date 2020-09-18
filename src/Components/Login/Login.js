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
    // Initalizing firebase
    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    // Initalizing History and Location hooks for redirecting
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    // States and Context for storing user information
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(true);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
    })

    // Facebook Login
    const handleFacebookSignIn = () => {
        var facebookProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(facebookProvider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            user.success = true;
            setUser(user)
            setLoggedInUser(user)
            history.replace(from)
            // ...
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
    
    // Google Login
    var googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
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
            
        }).catch(error => {
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

    // Handle New User or Old User login
    const handleUser = (e) => {
        e.preventDefault();
        setNewUser(!newUser);
        let firstName = document.querySelector('.first-name');
        let lastName = document.querySelector('.last-name');
        let rePassword = document.querySelector('.re-password');
        let email = document.querySelector('.email');
        let password = document.querySelector('.password');
        if(firstName && lastName && rePassword) {
            firstName.value = "";
            lastName.value = "";
            rePassword.value = ""
        }        
        email.value = "";
        password.value = "";
        const newUserInfo = {
            isSignedIn: false,
            name: '',
            email: '',
            password: '',
        }
        setUser(newUserInfo);
        console.log(newUserInfo);
    }
    
    // Handle Blur
    const handleBlur = e => {
        console.log("Handle Blur was triggered.")
        console.log(e.target.name, e.target.value)
        let isFieldValid = true;
        console.log(isFieldValid)
        if (e.target.name === "firstName") {
            isFieldValid = /^[a-zA-Z ]{2,30}$/.test(e.target.value)
        }
        if (e.target.name === "lastName") {
            isFieldValid = /^[a-zA-Z ]{2,30}$/.test(e.target.value)
        }
        if(e.target.name === "email") {
            const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            isFieldValid = regex.test(String(e.target.value).toLowerCase());
        }
        if(e.target.name === "password") {
            const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
            isFieldValid = regex.test(e.target.value);
        }
        if(e.target.name === "rePassword") {
            const rePassword = document.querySelector('.re-password').value;
            const password = document.querySelector('.password').value;
            isFieldValid = password === rePassword;
        }
        console.log(isFieldValid)
        if(isFieldValid) {
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
            console.log(newUserInfo);
        }
    }
    
    // Handling Form Submit
    const handleFormSubmit = (e) => {
        console.log(user.email, user.password)
        if(newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email , user.password)
            .then( res => {
                const newUserInfo = res.user;
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                history.replace(from);
            })
            .catch( error=> {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
            // ...
          });
        }
        if(!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const newUserInfo = res.user;
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                history.replace(from);
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage)
                // ...
            });
        }
        e.preventDefault();

    }
    
    return (
        <Container>
            <NavigationBar hasEmail={user.email} background="white"></NavigationBar>
            <p>Signed In User Email: {user.email}</p>
            <p>Signed In User Name: {user.name}</p>
            <div className="login-form-container">
                <form action="" className="booking-login-form" onSubmit={handleFormSubmit}>
                    <h4>{newUser ? "Create an Account" : "Login"}</h4>
                    {newUser?
                    <> 
                    <input className="first-name" required onBlur={handleBlur} placeholder="First Name" type="text" name="firstName"/>
                    <br/>
                    <input className="last-name" required onBlur={handleBlur} placeholder="Last Name" type="text" name="lastName"/>
                    <br/> </>
                    :
                    ""
                    }
                    <input className="email" required onBlur={handleBlur} placeholder="Email" type="text" name="email"/>
                    <br/>
                    <input  required onBlur={handleBlur} placeholder="Password" type="password" name="password" className="password"/>
                    <br/>
                    {newUser ? <input required onBlur={handleBlur} placeholder="Confirm Password" type="password" name="rePassword" className="re-password"/> : ""}
                    <br/>
                    <input className="submit-btn" type="submit" value={newUser? "Create Account" : "Login"} />
                    { newUser ? <p style={{textAlign: "center"}}>Already have an account? <button className="user-identifier-btn" onClick={handleUser}>Login</button></p>:<p style={{textAlign: "center"}}>Don't have an Account?<button className="user-identifier-btn" onClick={handleUser}>Create Account</button></p>}
                </form>
                <span className="login-options-divider"><hr />Or<hr /></span>
                <br />
                <button className="alternative-login-button" onClick={handleGoogleSignIn}>Continue with Google</button>
                <br />
                <button className="alternative-login-button" onClick={handleFacebookSignIn}>Continue with Facebook</button>
            </div>
        </Container>
    );
};

export default Login;