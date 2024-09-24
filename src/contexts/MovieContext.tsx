import { MovieDTO } from "@dtos/movie";
import { addStorageFavoriteMovie, getStorageFavoriteList, deleteAll } from "@libs/asyncStorage/favoriteMoviesStorage";
import { getMoviesList } from "@services/getMoviesList";
import { createContext, ReactNode, useEffect, useState } from "react";

export type MovieContextDataProps = {
  addFavoriteMovie: (movie: MovieDTO) => Promise<void>;
  getFavoriteMovies: () => Promise<void>;
  deleteMovies: () => Promise<void>;
  favoriteMovies: MovieDTO[];
  movies: MovieDTO[];
}

type MovieContextProviderProps = {
  children: ReactNode;
}

export const MovieContext = createContext<MovieContextDataProps>({} as MovieContextDataProps);

export function MovieContextProvider({ children }: MovieContextProviderProps) {
  const [favoriteMovies, setFavoritesMovies] = useState<MovieDTO[]>([]);
  const [movies, setMovies] = useState<MovieDTO[]>([]);

  async function getAllMovies() {
    const response = await getMoviesList();
    setMovies(response);
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

  async function deleteMovies() {
    await deleteAll();
    await getFavoriteMovies();
  }

  useEffect(() => {
    getAllMovies();
    getFavoriteMovies();
  }, [])

  return (
    <MovieContext.Provider value={{
      addFavoriteMovie,
      getFavoriteMovies,
      deleteMovies,
      movies,
      favoriteMovies
    }}>
      {children}
    </MovieContext.Provider>
  )
}