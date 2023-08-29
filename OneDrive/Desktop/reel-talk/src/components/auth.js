import { auth } from '../config/firebase'
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword} from "firebase/auth";
import { Link } from 'react-router-dom';
// import { useState } from 'react';


export const Auth = (props) => {
    const email = props.email
    const password = props.password
    const setEmail = props.setEmail
    const setPassword = props.setPassword
    const logIn = props.logIn

    const signUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            alert ('You have signed up!')
            logIn();
        } catch (err) {
            console.error()
        }
    };

    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            alert ('You are signed in!')
            logIn();
        } catch (err) {
            console.error()
        }
    };

    const resetPassword = async () => {
        try {
            // console.log("THIS IS WORKING", email);
            await sendPasswordResetEmail(email)
            alert ('Password reset email sent')
        } catch (err) {
            console.error()
        }
    };
    
    return (
        <div>
            <input
                placeholder="Email..."
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                placeholder="Password..."
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signUp}> Sign Up </button>
            <button onClick={signIn}> Sign In </button>
            <button onClick={resetPassword}> Reset Password </button>

            <Link to='/movies'>List of Top Rated Movies</Link>
{/* 
            
            <div className='forgot-password'>
            <Link to='/forgot-password'>Forgot your Password?</Link>
            </div> */}

        </div>
    );
};