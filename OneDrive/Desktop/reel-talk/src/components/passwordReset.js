import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../config/firebase";

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
    <div>
        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        <button onClick={resetPassword}> Reset Password </button>

    </div>
  );
}

export default PasswordReset;