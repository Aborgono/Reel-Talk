import { auth } from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { Link } from 'react-router-dom';


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
            <Link to='/resetPassword'>
                <button> Reset Password </button>
            </Link>

            <Link to='/movies'>List of Top Rated Movies</Link>
        </div>
    );
};

export default Auth