import Movies from '../Movies/movies';
import {auth} from "../../config/firebase"
import './homePage.css';


function HomePage(props) {


    const logOut = props.logOut

    const currentUser = auth?.currentUser?.email;
    const userId = auth?.currentUser?.uid;

    console.log("this is my currentUser", currentUser);

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
