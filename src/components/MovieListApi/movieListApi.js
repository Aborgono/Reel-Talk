import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './movieListApi.css';

function MovieAPI() {

    const [listMovie, setListMovie] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      const res = await axios.get('http://localhost:5000/api/movies');
      setListMovie(res.data.movies)
      console.log("THIS IS RES", res.data);
    };

    return (
      <div className="movie-list">
          {listMovie.map((movie) => (
              <div key={movie.id} className="movie-card">
                  <div className="movie-title">{movie.title}</div>
              </div>
          ))}
          <Link to="/" className="back-link">Back to Home</Link>
      </div>
  );
}

export default MovieAPI;
