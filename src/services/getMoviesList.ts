import { MovieDTO } from "@dtos/movie";
import { api } from "./api";

export async function getMoviesList() {
  try {
    const {data} = await api.get<MovieDTO>('/movie/popular');
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}