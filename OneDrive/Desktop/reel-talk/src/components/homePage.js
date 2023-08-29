import { useState } from 'react';
import Movies from './movies';
import {auth} from "../config/firebase"

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
    </div>
  );
}

export default HomePage;
