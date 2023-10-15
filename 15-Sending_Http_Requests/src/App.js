import React, {useState, useEffect, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchMoviesListHandler = useCallback(async ()=> {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.py4e.com/api/films");
      if (!response.ok) {
        throw new Error("Something went wrong!")
      }
      const responseData = await response.json();

      const transformedMovies = responseData.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          releaseDate: movie.release_date,
          openingText: movie.opening_crawl
        }
      })
      setMovies(transformedMovies);

    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false)
  }, [])

  useEffect(()=>{
    fetchMoviesListHandler()
  }, [fetchMoviesListHandler])

  let context = <p> No movie data found</p>;

  if (movies.length > 0) {
    context = <MoviesList movies={movies} />
  }


  if (isLoading) {
    context = <p> Loading ...please wait</p>
  }


  if (error) {
    context = <p>{error}</p>
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesListHandler}>Fetch Movies</button>
      </section>
      <section>
        {context}
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p> No movie data found</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p> Loading ...please wait</p>} */}

      </section>
    </React.Fragment>
  );
}

export default App;
