import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../config/firebase";
import './passwordReset.css';
import { Link } from "react-router-dom";

function PasswordReset(props) {
    const email = props.email
    const setEmail = props.setEmail


    const resetPassword = async () => {
        console.log("this is my email", email);
        try {
            await sendPasswordResetEmail(auth, email)
            console.log('Password reset email sent');
        } catch (err) {
            console.error(err)
        }
    };

    return (
        <div className="reset-password-container">
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email-input"
            />
            <button onClick={resetPassword} className="reset-button">
                Reset Password
            </button>
            <Link to={'/'}>
                <button className="reset-button">
                    Back to HomePage
                </button>
            </Link>
        </div>
    );
}

export default PasswordReset;