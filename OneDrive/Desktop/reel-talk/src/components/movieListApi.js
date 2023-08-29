import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function MovieAPI() {

    const [listMovie, setListMovie] = useState([]);

    useEffect(() => {
      axios.get('https://api.themoviedb.org/3/movie/popular?api_key=9a18ce06bba8a0e8dba96a97dfd2a61e').then((response) => {
        setListMovie(response.data.results)
      });
    }, []);

    console.log("this is my movie list", listMovie);

  return (
    <>
        {listMovie.map((movie) => {
        return (
            <div>
                {movie.original_title}
            </div>
        )
        })}
        <Link to='/'>Back to Home</Link>
    </>
  );
}

export default MovieAPI;
