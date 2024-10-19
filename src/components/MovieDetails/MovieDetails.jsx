import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import './MovieDetails.css';

function MovieDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector(store => store.selectedMovie);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: id });
  }, [dispatch, id]);

  const goBack = () => {
    history.push('/');
  };

  return (
    <main>
      <h1>Movie Details</h1>
      <section className="movie-details" data-testid="movieDetails">
        <h2>{movie.title}</h2>
        <img src={movie.poster} alt={movie.title} />
        <p>{movie.description}</p>
        <h3>Genres:</h3>
        <ul>
          {movie.genres && movie.genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
        <button onClick={goBack} data-testid="toList">Back to Movie List</button>
      </section>
    </main>
  );
}

export default MovieDetails;
