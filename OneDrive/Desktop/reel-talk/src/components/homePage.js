import { useEffect, useState } from 'react';

import {db} from "../config/firebase"
import {getDocs, collection} from 'firebase/firestore'

// import { auth } from '../config/firebase'
// import { signOut} from "firebase/auth";

function HomePage(props) {
  const[movieList, setMovieList] = useState([]);

  const moviesCollectionRef = collection(db, "movies")

  const [currentUser, setCurrentUser] = useState('');

    const email = props.email
    // const password = props.password
    // const setEmail = props.setEmail
    // const setPassword = props.setPassword

    const logOut = props.logOut

  useEffect(() => {
    const getMovieList = async () => {
      try {
        // setCurrentUser(email)
        // console.log("this is my email and passwod", email, password);
        const data = await getDocs(moviesCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        setMovieList(filteredData);
        console.log(filteredData);
      } catch (err) {
        console.error(err);
      } 
    };

    getMovieList();
  }, []);

  
  return (
    <div className='App'>
        <div>
            'Hello' {currentUser}
            <button onClick={logOut}> Logout </button>
        </div>
      <div>
        {movieList.map((movie) => (
          <div>
            <h1> {movie.title} </h1>
            <p> Date: {movie.releaseDate} </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
