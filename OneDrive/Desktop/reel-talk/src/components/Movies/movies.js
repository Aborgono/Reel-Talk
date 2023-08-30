import { useEffect, useState } from 'react';
import {db} from "../../config/firebase"
import {getDocs, doc, collection, updateDoc, arrayUnion, arrayRemove} from 'firebase/firestore'
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
      } catch (err) {
        console.error(err);
      } 
    };

    getMovieList();
  }, []);

    const like = async (movieId) => {
        setLikedChecked(true)
        if(!likedChecked){
            try {
                const movieDocRef = doc(db, "movies", movieId);

                await updateDoc(movieDocRef, {
                    likedByUser: arrayUnion(userId),
                });
            } catch (err) {
                console.error(err);
            }
        }
    };


    const unLike = async (movieId) => {
        setLikedChecked(false)
        if(likedChecked){
            try {
                const movieDocRef = doc(db, "movies", movieId);

                await updateDoc(movieDocRef, {
                    likedByUser: arrayRemove(userId),
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
                      <p className="movie-release-date">Release Date: {movie.releaseDate}</p>
                      <div className="like-container">
                          <input
                              type="checkbox"
                              checked={likedChecked}
                              className="like-checkbox"
                          />
                          <label></label>
                          <button
                              onClick={() => like(movie.id)}
                              className="submit-like-button"
                          >
                              Like
                          </button>
                          <button
                              onClick={() => unLike(movie.id)}
                              className="submit-like-button"
                          >
                              Remove Like
                          </button>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
}
export default Movies;
