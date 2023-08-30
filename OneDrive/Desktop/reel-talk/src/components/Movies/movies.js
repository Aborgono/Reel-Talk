import { useEffect, useState } from 'react';
import {db} from "../../config/firebase"
import {getDocs, doc, collection, updateDoc, arrayUnion} from 'firebase/firestore'
import './movies.css';

function Movies(props) {
  const[movieList, setMovieList] = useState([]);
  const userId = props.userId
  // const currentUser = props.currentUser
  const [likedChecked, setLikedChecked] = useState(false);


  const moviesCollectionRef = collection(db, "movies")

  useEffect(() => {
    const getMovieList = async () => {
      try {
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

    const onSubmit = async (movieId) => {

        if(likedChecked){
            try {
                const movieDocRef = doc(db, "movies", movieId);

                await updateDoc(movieDocRef, {
                    liked: arrayUnion(userId),
                });
            } catch (err) {
                console.error(err);
            }
        }
    };

    
    return (
      <div>
          <div>
              {movieList.map((movie) => (
                  <div key={movie.id} className="movie-card">
                      <h1 className="movie-title">{movie.title}</h1>
                      <p className="movie-release-date">Date: {movie.releaseDate}</p>
                      <div className="like-container">
                          <input
                              type="checkbox"
                              checked={likedChecked}
                              onChange={() => setLikedChecked(!likedChecked)}
                              className="like-checkbox"
                          />
                          <label>Liked</label>
                          <button
                              onClick={() => onSubmit(movie.id)}
                              className="submit-like-button"
                          >
                              Submit Like
                          </button>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
}
export default Movies;
