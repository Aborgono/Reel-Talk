import { useEffect, useState } from 'react';

import {db, auth} from "../config/firebase"
import {getDocs, doc, collection, updateDoc, arrayUnion, documentId} from 'firebase/firestore'

function Movies(props) {
  const[movieList, setMovieList] = useState([]);
  const userId = props.userId
  const currentUser = props.currentUser
  const [likedChecked, setLikedChecked] = useState(false);
//   const [likedCheckedMap, setLikedCheckedMap] = useState({});

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
        // console.log("checkbox", likedCheckedMap[movieId]);

        if(likedChecked){
            try {
                const movieDocRef = doc(db, "movies", movieId);
                // console.log("updating likes for", movieId);

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
          <div key={movie.id}>
            <h1> {movie.title} </h1>
            <p> Date: {movie.releaseDate} </p>
                <input
                    type='checkbox'
                    checked={likedChecked}
                    onChange={() => setLikedChecked(!likedChecked)}    
                />
                <label> Liked </label>
                <button onClick={() => onSubmit(movie.id)}> Submit Like </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;




    // return (
    //     <div>
    //       <div>
    //         {movieList.map((movie) => (
    //           <div key={movie.id}>
    //             <h1> {movie.title} </h1>
    //             <p> Date: {movie.releaseDate} </p>
    //             <input
    //               type='checkbox'
    //               checked={likedCheckedMap[movie.id] || false}
    //               onChange={() =>
    //                 setLikedCheckedMap((prevMap) => ({
    //                   ...prevMap,
    //                   [movie.id]: !prevMap[movie.id],
    //                 }))
    //               }
    //             />
    //             <label> Liked </label>
    //             <button onClick={() => onSubmit(movie.id)}> Submit Like </button>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   );
    // }
