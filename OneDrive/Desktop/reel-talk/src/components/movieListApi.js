import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function MovieAPI() {

    const [listMovie, setListMovie] = useState([]);

    // useEffect(() => {
    //   axios.get('https://api.themoviedb.org/3/movie/popular?api_key=9a18ce06bba8a0e8dba96a97dfd2a61e').then((response) => {
    //     setListMovie(response.data.results)
    //   });
    // }, []);

    // console.log("this is my movie list", listMovie);

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/popular',
  params: {page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTE4Y2UwNmJiYThhMGU4ZGJhOTZhOTdkZmQyYTYxZSIsInN1YiI6IjY0ZWU1MjMzMTgwZGVhMDBhY2U4NzFjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gMas9RcyRtU6YZWLHAYAGjWDyF2sFLh2AvBbqHmsrCQ'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log("THIS IS MY RESPONSE", response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

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
