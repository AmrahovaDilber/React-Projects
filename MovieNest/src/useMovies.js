import { useEffect, useState, useRef } from "react";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";
const API_KEY = "f21a6bf3bfe42bde02aa229e67732bb8";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Clear movies if query is too short
    if (query.length < 3) {
      setMovies([]);
      return;
    }

    const controller = new AbortController();

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `${BASE_URL}?api_key=${API_KEY}&query=${query}`,
          { signal: controller.signal }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (err) {
        // Ignore abort errors
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();

    // Cleanup: abort fetch on effect cleanup
    return () => {
      controller.abort();
    };
  }, [query]);

  return { movies, loading, error };
}