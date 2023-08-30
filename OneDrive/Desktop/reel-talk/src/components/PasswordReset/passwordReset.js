import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../config/firebase";
import './passwordReset.css';

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
        </div>
    );
}

export default PasswordReset;