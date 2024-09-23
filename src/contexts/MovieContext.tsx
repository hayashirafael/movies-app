import { MovieDTO } from "@dtos/movie";
import { addStorageFavoriteMovie, getStorageFavoriteList, deleteAll } from "@libs/asyncStorage/favoriteMoviesStorage";
import { createContext, ReactNode, useEffect, useState } from "react";

export type MovieContextDataProps = {
  favoriteMovies: MovieDTO[];
  addFavoriteMovie: (movie: MovieDTO) => Promise<void>;
  getFavoriteMovies: () => Promise<void>;
  deleteMovies: () => Promise<void>;
}

type MovieContextProviderProps = {
  children: ReactNode;
}

export const MovieContext = createContext<MovieContextDataProps>({} as MovieContextDataProps);

export function MovieContextProvider({ children }: MovieContextProviderProps) {
  const [favoriteMovies, setFavoritesMovies] = useState<MovieDTO[]>([]);

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
    getFavoriteMovies();
  }, [])

  return (
    <MovieContext.Provider value={{
      addFavoriteMovie,
      getFavoriteMovies,
      deleteMovies,
      favoriteMovies
    }}>
      {children}
    </MovieContext.Provider>
  )
}