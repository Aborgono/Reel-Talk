import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './movieListApi.css';

function MovieAPI() {

    const [listMovie, setListMovie] = useState([]);

    useEffect(() => {
      axios.get('https://api.themoviedb.org/3/movie/popular?api_key=9a18ce06bba8a0e8dba96a97dfd2a61e').then((response) => {
        setListMovie(response.data.results)
      });
    }, []);

    return (
      <div className="movie-list">
          {listMovie.map((movie) => (
              <div key={movie.id} className="movie-card">
                  <div className="movie-title">{movie.original_title}</div>
              </div>
          ))}
          <Link to="/" className="back-link">Back to Home</Link>
      </div>
  );
}

export default MovieAPI;
