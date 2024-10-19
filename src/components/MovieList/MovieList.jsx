import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css';

function MovieList() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  const goDetails = (id) => {
    history.push(`/details/${id}`);
  };

  return (
    <main>
      <h1>Movie List</h1>
      <section className="movies">
        {movies.map(movie => (
          <div className="movie-card" data-testid='movieItem' key={movie.id}>
            <img
              src={movie.poster}
              alt={movie.title}
              className="movie-poster"
              data-testid='moviePoster'
            />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <button onClick={() => goDetails(movie.id)} data-testid='toDetails'>View Details</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default MovieList;