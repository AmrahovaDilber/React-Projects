import { useEffect, useRef, useState } from "react";
import StarRating from "./StarRating";
import { useMovies } from "./useMovies";
import useLocalStorageState from "./useLocalStorageState";

const API_KEY = "f21a6bf3bfe42bde02aa229e67732bb8";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

// const BASE_URL = "https://api.themoviedb.org/3/search/movie";

function Search() {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  // Focus the input field when the Enter key is pressed (if it's not already focused)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (document.activeElement === inputRef.current) return;
      if (e.code === "Enter") {
        inputRef.current.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Destructure movies, loading, and error from the custom hook
  const { movies, loading, error } = useMovies(query);

  return (
    <div>
      <input
        ref={inputRef}
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title}{" "}
            {movie.release_date ? `(${movie.release_date.split("-")[0]})` : null}
          </li>
        ))}
      </ul>
    </div>
  );
}



function Logo() {
  <div className="logo">
    <span role="img">🍿</span>
    <h1>usePopcorn</h1>
  </div>;
}

function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

function Navbar({ children, movies, setMovies }) {
  return (
    <nav className="nav-bar">
      <Logo></Logo>
      <Search movies={movies} setMovies={setMovies}></Search>
      {children}
    </nav>
  );
}

export default function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [watched, setWatched ]=useLocalStorageState([],"watched")
  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&region=US`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        if (response.ok) {
          const data = await response.json();
          setMovies(data.results);
          setLoading(false);
        } else {
          console.error("Failed to fetch movies:", response.status);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError(error.message);
      }
    }

    fetchMovies();
  }, []); //

  function handleSelectMovie(id) {
    if (selectedId) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
    // localStorage.setItem("watched",JSON.stringify([...watched,movie]))
    handleCloseMovie();
  }


  function deleteWatched(id) {
    setWatched((watched) => watched.filter((watch) => watch.id !== id));
  }

  return (
    <>
      <Navbar movies={movies} setMovies={setMovies}>
        <NumResults movies={movies}></NumResults>
      </Navbar>
      <Main>
        <Box>
          {loading && <p>Loading</p>}
          {!loading && !error && (
            <MovieList
              handleSelectMovie={handleSelectMovie}
              movies={movies}
            ></MovieList>
          )}
          {error && <p>{error}</p>}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              movies={movies}
              handleCloseMovie={handleCloseMovie}
              selectedId={selectedId}
              handleAddWatched={handleAddWatched}
              watched={watched}
              deleteWatched={deleteWatched}
            ></MovieDetails>
          ) : (
            <>
              <WatchedSummary watched={watched}></WatchedSummary>
              <WatchedMovieList
                watched={watched}
                deleteWatched={deleteWatched}
              ></WatchedMovieList>
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

function MovieDetails({
  selectedId,
  handleCloseMovie,
  handleAddWatched,
  watched,
  deleteWatched,
}) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userRating, setUserRating] = useState(0);
  const BASE_URL = "https://api.themoviedb.org/3/movie";

  const isWatched = watched.some((m) => m.id === selectedId);

  // Fetch Movie Details
  useEffect(() => {
    if (!selectedId) return;

    async function fetchMovieDetails() {
      try {
        setLoading(true);
        const response = await fetch(
          `${BASE_URL}/${selectedId}?api_key=${API_KEY}&language=en-US`
        );
        if (!response.ok) throw new Error("Failed to fetch movie details");
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovieDetails();
  }, [selectedId]);

  useEffect(() => {
    if (!movie) return;
    document.title = `Movie | ${movie.title}`;

    return () => {
      document.title = "MovieNest";
      console.log(`${movie.title} is cleaned up`);
    };
  }, [movie]);

  if (loading) return <p>Loading...</p>;
  if (!movie) return <p>No movie found</p>;

  function handleAdd() {
    const newWatchedMovie = {
      id: movie.id,
      title: movie.title,
      rating: movie.vote_average,
      userRating,
    };
    handleAddWatched(newWatchedMovie);
  }

  //   const isTop=imdbRating>8
  // // console.log(isTop)
  // const[avgRating,setAvgRating]=useState(0)

  return (
    <div className="movie-details">
      <button onClick={handleCloseMovie} className="details">
        &larr; Back
      </button>
      <div className="movie-container">
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        )}
        <div>
          <h2>{movie.title}</h2>
          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Rating:</strong> {movie.vote_average} / 10
          </p>
        </div>
      </div>
      {watched.some((m) => m.id === movie.id) && (
        <button onClick={() => deleteWatched(movie.id)}>Delete</button>
      )}

      {!isWatched ? (
        <>
          <StarRating maxRating={10} onSetRating={setUserRating} />
          {userRating > 0 && (
            <button className="btn-add" onClick={handleAdd}>
              Add To Watchlist
            </button>
          )}
        </>
      ) : (
        <p>You rated this movie</p>
      )}
    </div>
  );
}

function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

function WatchedMovie({ movie, deleteWatched }) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>

        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
        <button
          className="btn-delete"
          onClick={() => deleteWatched(movie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
}

function WatchedMovieList({ watched, deleteWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.id}
          deleteWatched={deleteWatched}
        ></WatchedMovie>
      ))}
    </ul>
  );
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}

function MovieList({ movies, handleSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie
          movie={movie}
          key={movie.id}
          handleSelectMovie={handleSelectMovie}
        ></Movie>
      ))}
    </ul>
  );
}

function Movie({ movie, handleSelectMovie }) {
  return (
    <li key={movie.id} onClick={() => handleSelectMovie(movie.id)}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`${movie.title} poster`}
      />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>
            {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
          </span>
        </p>
      </div>
    </li>
  );
}
