export interface MoviesDTO {
  results: MovieDTO[]
 }

export interface MovieDTO {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  backdrop_path: string;
  genre_ids: number[];
  overview: string;
  release_date: string;
  vote_count: number;
  popularity: number;
  status: string;
}