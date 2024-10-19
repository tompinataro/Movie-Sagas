import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import './App.css';

import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Movies Saga!</h1>
      </header>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details/:id" exact>
          <MovieDetails />
        </Route>
      </Router>
    </div>
  );
}

export default App;
