import { useEffect, useState } from 'react';
import {db} from "../../config/firebase"
import {getDocs, doc, collection, updateDoc, arrayUnion, arrayRemove} from 'firebase/firestore'
import './movies.css';

function Movies(props) {
  const[movieList, setMovieList] = useState([]);
  const userId = props.userId


  const moviesCollectionRef = collection(db, "movies")

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const data = await getDocs(moviesCollectionRef);
        const filteredData = data.docs.map((doc) => {
            const movieLikes = doc['_document']['data']['value']['mapValue']['fields']['likedByUser']['arrayValue']['values'];
            let isMovieLiked = movieLikes.find((likes) => likes.stringValue === userId)
            let liked = false
            if (isMovieLiked) {
                liked = true
            }
            return {
                ...doc.data(),
                id: doc.id,
                liked
            }
        })
        setMovieList(filteredData);
      } catch (err) {
        console.error(err);
      } 
    };

    getMovieList();
  }, []);

    const like = async (likedMovie) => { //likedMovie is our entire movie object
        const updatedMovieList = movieList.map((movie) => {
            if (movie.id === likedMovie.id) {
                movie.liked = true
            }
            return movie
        })
        setMovieList(updatedMovieList);
        if(likedMovie.liked){
            try {
                const movieDocRef = doc(db, "movies", likedMovie.id);

                await updateDoc(movieDocRef, {
                    likedByUser: arrayUnion(userId),
                });
            } catch (err) {
                console.error(err);
            }
        }
    };


    const unLike = async (likedMovie) => {
        const updatedMovieList = movieList.map((movie) => {
            if (movie.id === likedMovie.id) {
                movie.liked = false
            }
            return movie
        })
        setMovieList(updatedMovieList);
        if(!likedMovie.liked){
            try {
                const movieDocRef = doc(db, "movies", likedMovie.id);

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
                              checked={movie.liked}
                              className="like-checkbox"
                              readOnly
                          />
                          <button
                              onClick={() => like(movie)}
                              className="submit-like-button"
                          >
                              Like
                          </button>
                          <button
                              onClick={() => unLike(movie)}
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
