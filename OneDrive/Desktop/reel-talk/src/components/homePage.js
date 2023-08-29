// import { useEffect, useState } from 'react';
import Movies from './movies';
import {auth} from "../config/firebase"
import MovieAPI from './movieListApi';

function HomePage(props) {


    const logOut = props.logOut

    const currentUser = auth?.currentUser?.email;
    const userId = auth?.currentUser?.uid;

    console.log(currentUser);


  return (
    <div className='App'>
        <div >
            'Hello' {currentUser}
            <button onClick={logOut}> Logout </button>
        </div>
        <Movies currentUser={currentUser} userId={userId} />
        <MovieAPI />
    </div>
  );
}

export default HomePage;
