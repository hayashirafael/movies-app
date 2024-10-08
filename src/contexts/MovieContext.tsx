import { MovieDTO } from "@dtos/movie";
import { addStorageFavoriteMovie, getStorageFavoriteList } from "@libs/asyncStorage/favoriteMoviesStorage";
import { getMoviesList } from "@services/getMoviesList";
import { AppError } from "@utils/AppError";
import { createContext, ReactNode, useEffect, useState } from "react";

export type MovieContextDataProps = {
  movies: MovieDTO[];
  favoriteMovies: MovieDTO[];
  addFavoriteMovie: (movie: MovieDTO) => Promise<void>;
  getFavoriteMovies: () => Promise<void>;
  isLoading: boolean;
  error: AppError | null;
}

type MovieContextProviderProps = {
  children: ReactNode;
}

export const MovieContext = createContext<MovieContextDataProps>({} as MovieContextDataProps);

export function MovieContextProvider({ children }: MovieContextProviderProps) {
  const [favoriteMovies, setFavoritesMovies] = useState<MovieDTO[]>([]);
  const [movies, setMovies] = useState<MovieDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AppError | null>(null);

  async function getAllMovies() {
    try {
      setIsLoading(true);
      const response = await getMoviesList();
      setMovies(response);
      setError(null);
    } catch (error) {
      setError(new AppError('Falha na API ou de conexão.\nTente novamente mais tarde'))
    } finally {
      setIsLoading(false);
    }
  }

  async function addFavoriteMovie(movie: MovieDTO) {
    await addStorageFavoriteMovie(movie);
    const list = await getStorageFavoriteList();
    setFavoritesMovies(list);
  }

  async function getFavoriteMovies() {
    const response = await getStorageFavoriteList();
    setFavoritesMovies(response);
  }

  useEffect(() => {
    getAllMovies();
  }, [])

  return (
    <MovieContext.Provider value={{
      addFavoriteMovie,
      getFavoriteMovies,
      movies,
      favoriteMovies,
      isLoading,
      error
    }}>
      {children}
    </MovieContext.Provider>
  )
}