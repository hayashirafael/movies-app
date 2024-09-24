import { MoviesDTO } from "@dtos/movie";
import { api } from "./api";

export async function getMoviesList() {
  try {
    const {data} = await api.get<MoviesDTO>('/movie/popular');
    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
}