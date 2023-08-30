
import { useNavigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Auth } from './components/auth';
import HomePage from './components/homePage';
import { useState } from 'react';
import { auth } from './config/firebase'
import { signOut} from "firebase/auth";
import PasswordReset from './components/passwordReset';
import MovieAPI from './components/movieListApi';


function App() {

  const [signedIn, setSignedIn] = useState(false)
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const logIn = () => {
    setSignedIn(true)
    navigate('/homePage')
  }

  
  const logOut = async () => {
    try {
        await signOut (auth)
        alert ('You have signed out!')
        navigate('/')
    } catch (err) {
        console.error()
    }
};

  return (
    <>
      <Routes>
        <Route path='/' element={<Auth logOut={logOut} logIn={logIn} email={email} password={password} setEmail={setEmail} setPassword={setPassword} />}></Route>
        <Route path='/homePage' element={<HomePage logOut={logOut} signedIn={setSignedIn} email={email} password={password} setEmail={setEmail} setPassword={setPassword} />}></Route>
        <Route path='/movies' element={<MovieAPI />}></Route>
        <Route
          path="/resetPassword" 
          element={<PasswordReset email={email} setEmail={setEmail} />} 
        />
      </Routes>
    </>
  );
}

export default App;