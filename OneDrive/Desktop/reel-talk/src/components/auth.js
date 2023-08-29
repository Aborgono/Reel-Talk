import { auth } from '../config/firebase'
import { createUserWithEmailAndPassword} from "firebase/auth";
// import { useState } from 'react';


export const Auth = (props) => {
    const email = props.email
    const password = props.password
    const setEmail = props.setEmail
    const setPassword = props.setPassword
    const logIn = props.logIn

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            alert ('You are signed in!')
            logIn();
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
            <button onClick={signIn}> Sign In </button>
        </div>
    );
};