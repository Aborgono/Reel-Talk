import Movies from '../Movies/movies';
import {auth} from "../../config/firebase"
import './homePage.css';
import { useEffect } from 'react';
import { useNavigateavigate } from 'react-router-dom';


function HomePage(props) {


    const logOut = props.logOut
    const navigate = props.navigate;
    const currentUser = auth?.currentUser?.email;
    const userId = auth?.currentUser?.uid;
    useEffect(() => {
        if (!currentUser) {
            navigate('/')
        }
    }, [])

    return (
      <div className="App">
          <div className="greeting-container">
              <span className="greeting">Signed in as: </span> {currentUser}
              <button onClick={logOut} className="logout-button">
                  Logout
              </button>
          </div>
          <div className="movies-container">
              <Movies currentUser={currentUser} userId={userId} />
          </div>
      </div>
  );
}

export default HomePage;
