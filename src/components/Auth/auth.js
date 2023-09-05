import { auth } from '../../config/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { Link } from 'react-router-dom';
import './auth.css';
import { useState } from 'react';

export const Auth = (props) => {
    const email = props.email
    const password = props.password
    const setEmail = props.setEmail
    const setPassword = props.setPassword
    const logIn = props.logIn
    const token = props.token
    const setToken = props.setToken
    // const [token, setToken] = useState('')

    const signUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            alert ('You have signed up!')
            logIn(email, password);
            setToken(auth?.currentUser?.accessToken)
        } catch (err) {
            alert('You already have an account, try signing in!')
            console.error()
        }
    };

    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            alert ('You are signed in!')
            logIn(email, password);
            setToken(auth?.currentUser?.accessToken)
        } catch (err) {
            alert('Password is incorrect, please try again.')
            console.error()
        }
    };
    
    return (
        <div className="auth-form-container">
            <input
                placeholder="Email..."
                onChange={(e) => setEmail(e.target.value)}
                className="auth-input"
            />
            <input
                placeholder="Password..."
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="auth-input"
            />
            <button onClick={signUp} className="auth-button">
                Sign Up
            </button>
            <button onClick={signIn} className="auth-button">
                Sign In
            </button>
            <Link to="/resetPassword" className="auth-link">
                <button className="auth-button">Reset Password</button>
            </Link>
            <Link to="/movies" className="auth-link">
                List of Top Rated Movies
            </Link>
        </div>
    );
}

export default Auth